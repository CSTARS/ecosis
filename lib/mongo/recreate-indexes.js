let cli = require('./indexes');
(async function() {
  await cli.recreateAll();
  console.log('done');
})();