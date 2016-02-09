'use strict';

var collection = global.setup.lookupCollection;

module.exports = function() {
    return {
        name: 'lookup',
        suggest : suggest
    };
};

function suggest(query, callback) {
  query = new RegExp('^'+query, 'i');

  collection
    .find({'value.value': query})
    .sort({'value.count': -1})
    .limit(25)
    .toArray(function(err, result){
      if( err ) {
        return callback(err);
      }

      result = result.map(function(item) {
        return item.value;
      });

      callback(null, result);
    });
}

// make sure indexes are good
collection.ensureIndex(
  {
    value : 1,
    count : -1
  },
  {w: 1},
  function(err) {
    if( err ) {
      global.setup.logger.info(err);
    }
  }
);
