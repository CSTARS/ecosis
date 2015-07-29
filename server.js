'use strict';
var express = require('express');
var kraken = require('kraken-js');
var http = require('http');

var mqeLib = require('MongoQueryEngine');

var options, app, server, logger, conf;

/*
 * Create and configure application. Also exports application instance for use by tests.
 * See https://github.com/krakenjs/kraken-js#options for additional configuration options.
 */
options = {
    onconfig: function (config, next) {
      conf = config;

      // allow command line switch from serving /dist to /app
      if( config.get('dev') ) {
        var middleware = config.get('middleware').static;
        middleware.module.arguments[0] = middleware.module.arguments[0].replace(/dist$/,'public');
      }

      // command line override of mqe config
      if( config.get('mqe-local') ) {
        config.use(require(config.get('mqe-local')));
      }

      var mqeConfig = config.get('mqe');
      mqeConfig.rest.getParamParser = function(query) {
        if( query.id ) {
          return {'_id': query.id};
        } else if ( query.package_id ) {
          return {'_id': query.package_id};
        } else if ( query.package_name ) {
          return {'value.ecosis.package_name': query.package_name};
        }
        return {'_id': query._id};
      };

      mqeLib.init({
          config: mqeConfig,
          app: app,
          express: express
        }, function(){
          var setup = mqeLib.getSetup();
          logger = setup.logger;

          setup.spectraCollection = setup.database.collection(setup.config.db.spectraCollection);
          setup.usdaCollection = setup.database.collection(setup.config.db.usdaCollection);

          global.setup = setup;

          /*
           * Add any additional config setup or overrides here. `config` is an initialized
           * `confit` (https://github.com/krakenjs/confit/) configuration object.
           */
          next(null, config);

          onReady(config);
      });
    }
};

app = express();
app.use(kraken(options));
app.on('start', function () {
    logger.info('Application ready to serve requests.');
    logger.info('Environment: %s', app.kraken.get('env:env'));
    logger.info('Static root: '+conf.get('middleware').static.module.arguments[0]);
});

/*
 * Create and start HTTP server.
 */
function onReady(config) {
  server = http.createServer(app);
  server.listen(config.get('mqe').server.localport || process.env.PORT || 8000);
  server.on('listening', function () {
      logger.info('Server listening on http://localhost:%d', this.address().port);
  });
}
