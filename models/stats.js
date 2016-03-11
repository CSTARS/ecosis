'use strict';

var async = require('async');

var packageCollection = global.setup.collection;
var lookupCollection = global.setup.lookupCollection;
var spectraCollection = global.setup.spectraCollection;

module.exports = function() {
    return {
        name: 'spectra',
        get : get
    };
};


function get(callback) {
  var result = {};

  var arr = ['ecosis.organization', 'Keywords', 'Theme'];

  async.eachSeries(
    arr,
    function(key, next) {
      getTop(key, function(err, resp){

        if( err ) {
          result[key] = err;
        } else {
          result[key] = resp;
        }

        next();
      });
    },
    function(err){
      getLastAdded(function(err, resp){
        if( err ) {
          result.lastAdded = err;
        } else {
          result.lastAdded = resp;
        }

        getCount(function(err, count){
          result.spectraCount = count;

          callback(null, result);
        });
      });
    }
  );
}

function getTop(key, callback) {
  lookupCollection.
    find({'value.key': key})
    .sort({'value.count': -1})
    .limit(5)
    .toArray(function(err, result){
      if( err ) {
        return callback(err);
      }

      result = result.map(function(r){
        return {
          value : r.value.value,
          count :  r.value.count
        };
      });

      callback(null, result);
    });
}

function getLastAdded(callback) {
  packageCollection
    .find({}, {
      'value.ecosis.package_id' : 1,
      'value.ecosis.package_title' : 1,
      'value.ecosis.description' : 1,
      'value.ecosis.organization' : 1,
      'value.ecosis.created' : 1,
      'value.Theme' : 1,
      'value.Keywords' : 1
    })
    .sort({'value.ecosis.created': -1})
    .limit(3)
    .toArray(function(err, result){
      if( err ) {
        callback(err);
      } else {
        result = result.map(function(r){
          return r.value;
        });
        callback(null, result);
      }
    });
}

function getCount(callback) {
  spectraCollection.count({}, callback);
}
