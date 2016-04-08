var config = require('./index');

config.mqe.dev = false;
config.mqe.server.url = 'https://ecosis.org';

if( !config.mqe.ckan ) {
  config.mqe.ckan = {};
}

config.mqe.ckan.server = 'http://data.ecosis.org';
config.mqe.server.googleAnalytics = 'UA-60014992-1';
module.exports = config;
