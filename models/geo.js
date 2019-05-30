const mongo = require('../lib/mongo');

class GeoModel {
  async count(query) {
    let collection = await mongo.packagesCollection();
    return collection.count(query);
  }

  getSpectraLocations(package_id, callback) {
    spectraCollection.find({
      'ecosis.package_id':package_id,
      'ecosis.geojson' : {
        '$exists' : true
      }
    },{
      'ecosis.geojson': 1
    }).toArray(function(err, result){
      if( err ) {
        return callback(err);
      }
  
      var arr = [];
      for( var i = 0; i < result.length; i++ ) {
        arr.push(result[i].ecosis.geojson);
      }
      callback(null, arr);
    });
  }
}

module.exports = function GeoModel() {
    return {
        name: 'geo',
        count : getCount,
        getSpectraLocations : getSpectraLocations
    };
};
