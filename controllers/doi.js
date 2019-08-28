const mongo = require('../lib/mongo');

module.exports = app => {
  app.get(/^\/doi:.+/, async (req, res) => {
    let doi = req.url.replace(/^\//, '');
    let collection = await mongo.packagesCollection();
    let result = await collection.findOne(
      {'value.ecosis.doi': doi}, 
      {projection: {'value.ecosis.package_name': 1}}
    );

    if( !result ) return res.status(404).send('Unknown EcoSIS DOI: '+doi);
    res.redirect('/package/'+result.value.ecosis.package_name);
  });
}