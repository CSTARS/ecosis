'use strict';
var express = require('express');
var kraken = require('kraken-js');
var http = require('http');

var mqeLib = require('mongo-query-engine');
//var mqeLib = require('/Users/jrmerz/dev/cstars/mongo-query-engine');

var options, app, server, logger, conf;

process.on('uncaughtException', function(err) {
  if( logger ) logger.error(err);
  else console.log(err);
});

/*
 * Create and configure application. Also exports application instance for use by tests.
 * See https://github.com/krakenjs/kraken-js#options for additional configuration options.
 */
options = {
    onconfig: function (config, next) {
      conf = config;

      // allow command line switch from serving /dist to /app
      var staticRoot = 'dist';
      if( config.get('dev') ) {
        staticRoot = 'public';
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


      // if( config.get('docker') ) {
      //   url = 'mongodb://'+process.env.MONGO_PORT_27017_TCP_ADDR+':27017/'+config.get('mongo').database;
      // } else {
      //   url = config.get('mongo').url+config.get('mongo').database;
      // }

      var setup = {
        config: mqeConfig,
        app: app,
        express: express
      };
      require('./lib/appendOrgInfo')(setup);

      mqeLib.init(setup, function(){
          var setup = mqeLib.getSetup();

          logger = setup.logger;

          setup.static = staticRoot;

          setup.spectraCollection = setup.database.collection(setup.config.db.spectraCollection);
          setup.usdaCollection = setup.database.collection(setup.config.db.usdaCollection);
          setup.lookupCollection = setup.database.collection(setup.config.db.lookupCollection);

          global.setup = setup;

          app.use(require('./lib/prerender/middleware'));

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
