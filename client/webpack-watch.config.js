let config = require('@ucd-lib/cork-app-build').watch({
  root : __dirname,
  entry : 'public/elements/ecosis-search.js',
  preview : 'public/js',
  clientModules : 'public/node_modules',
  ie: 'ie-bundle.js'
// });
// enable ie build in dev
}, true);

module.exports = config;