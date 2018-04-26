'use strict';

var fs = require('fs');
var path = require('path');
var ldjson = require('./ldjson');
var port = global.setup.config.server.localport || process.env.PORT || 8000;
var logger = global.setup.logger;
var staticRoot = global.setup.static;

module.exports = function(req, res, next) {
  if( req.path !== '/' && req.path !== '/index.html' ) {
    return next();
  }

  if( !req.query.result ) {
    return next();
  }

  var html = fs.readFileSync(path.join(__dirname, '..', '..', staticRoot, 'index.html'), 'utf-8');
  render(html, req.query.result, res);

};

function render(html, id, res) {
  global.setup.collection
    .findOne({_id: id}, function(error, item){
      if( error || !item ) {
        if( error ) {
          logger.info(error);
        } else {
          logger.info('Unabled to prerender: '+id);
        }

        return res.send(html); // silenty fail
      }
      var json = ldjson(item.value, 'https://ecosis.org');

      html = html.replace(
          /<\/body><\/html>/,
          '<script type="application/ld+json">'+JSON.stringify(json.ldjson, '  ', '  ')+'</script>'+
          '<script>window.prerender=true;</script></body></html>');

      html = html.replace(/<title>.*<\/title>/,'<title>'+json.title+'</title>');
      html = html.replace(/<meta name="description".*>/,'<meta name="description" content="'+json.description+'">');
      if( json.keywords ) {
        html = html.replace(/<meta name="keywords".*>/,'<meta name="keywords" content="'+json.keywords+'">');
      }

      res.send(html);
    });
}
