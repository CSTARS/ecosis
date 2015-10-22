'use strict';

var collection = global.setup.lookupCollection;

module.exports = function() {
    return {
        name: 'lookup',
        key : findKey,
        value : findValue
    };
};

function findKey(query, callback) {
  query = new RegExp(query, 'i');

  collection
    .find({key: query},{key: 1, _id: 0})
    .limit(50)
    .toArray(function(err, result){
      if( err ) {
        return callback(err);
      }

      var arr = [];
      for( var i = 0; i < result.length; i++ ) {
        arr.push(result[i].key);
      }
      result = arr;

      result.sort(function(a, b){
        if( a.toLowerCase() > b.toLowerCase() ) {
          return 1;
        }
        if( a.toLowerCase() < b.toLowerCase() ) {
          return -1;
        }
        return 0;
      });
      callback(null, result);
    });
}

function findValue(key, query, callback) {
  if( !query ) {
    query = '.*';
  }
  query = new RegExp(query, 'i');

  collection
    .findOne({key: key}, {_id:0}, function(err, result){
      if( err ) {
        return callback(err);
      }

      if( !result.values ) {
        return callback(null, []);
      }

      for( var i = result.values.length-1; i >= 0; i--) {
        if( !query.test(result.values[i]) ) {
          result.values.splice(i, 1);
        }
      }

      if( result.values.length-1 >= 50 ) {
        result.splice(50, result.values.length-1);
      }

      callback(null, result);
    });
}
