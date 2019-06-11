let config = require('@ucd-lib/cork-app-build').watch({
  root : __dirname,
  entry : 'public/elements/ecosis-search.js',
  preview : 'public/js',
  clientModules : 'public/node_modules'
});

module.exports = config;