const express = require('express');
const config = require('./lib/config');
const mqeLib = require('mongo-query-engine');

var fs = require('fs');


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
      if( config.get('mqe-local') && fs.existsSync(config.get('mqe-local')) ) {
        config.use(JSON.parse( fs.readFileSync(config.get('mqe-local'), 'utf-8') ));
      }

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
