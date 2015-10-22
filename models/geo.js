'use strict';

var collection = global.setup.collection;
var spectraCollection = global.setup.spectraCollection;

module.exports = function GeoModel() {
    return {
        name: 'geo',
        count : getCount,
        getSpectraLocations : getSpectraLocations
    };
};

// TODO: this sucks... move to package
function getCount(query, callback) {
  collection.count(query.options, callback);
}

function getSpectraLocations(package_id, callback) {
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
