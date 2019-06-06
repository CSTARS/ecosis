const mongo = require('../lib/mongo');

class GeoModel {
  async count(query) {
    let collection = await mongo.packagesCollection();
    return collection.count(query);
  }

  async getSpectraLocations(package_id) {
    let collection = await mongo.spectraCollection();
    let results = await collection.find({
        'ecosis.package_id': package_id,
        'ecosis.geojson' : {
          '$exists' : true
        }
      },{
        'ecosis.geojson': 1
      }).toArray();

    return results.map(result => result.ecosis.geojson);
  }
}

module.exports = new GeoModel();
