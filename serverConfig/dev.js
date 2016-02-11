var config = require('./index');

config.mqe.dev = true;
config.mqe.seo = false;

if( !config.mqe.ckan ) {
  config.mqe.ckan = {};
}

config.mqe.ckan.server = 'http://dev-data.ecospectra.org';
config.mqe.server.url = 'http://dev-search.ecospectra.org';
module.exports = config;
