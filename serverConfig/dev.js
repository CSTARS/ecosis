var config = require('./index');

config.mqe.dev = true;
config.mqe.seo = false;

if( !config.mqe.ckan ) {
  config.mqe.ckan = {};
}

config.mqe.ckan.server = 'https://dev-data.ecosis.org';
config.mqe.server.url = 'https://dev-search.ecosis.org';
module.exports = config;
