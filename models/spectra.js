'use strict';

var helpers = require('../lib/helpers');
var collection = global.setup.collection;
var spectraCollection = global.setup.spectraCollection;

module.exports = function() {
    return {
        name: 'spectra',
        query : querySpectra,
        stats : queryStats,
        random : getRandom,
        count : count
    };
};


function querySpectra(package_id, filters, start, stop, callback) {
  var messages = [];

  if( isNaN(start) ) {
    start = 0;
    messages.push('Parameter \'start\' not provided, starting at index 0');
  }
  if( isNaN(stop) ) {
    stop = start + 100;
    messages.push('Parameter \'stop\' not provided, ending at index '+stop);
  } else if( stop-start > 100 ) {
    stop = start + 100;
    messages.push('Only 100 results will be returned.  Use \'start\' and \'stop\' '+
    'attributes to get entire set');
  }

  filters = applyPackageId(package_id, filters);

  console.log(package_id);
  console.log(filters);

  var query = {};
  if( filters ) {
    query.$and = filters;
  }

  // check for ecosis.package_id parameter.
  if( !hasPackageId(filters) ) {
    messages.push('Warning. No package_id provided, your result set may contain spectra from multiple '+
      'datasets.  To limit to a single dataset, include \'ecosis.package_id\' in your filters parameter.  Ex: '+
      '/spectra/query?filters=[{"ecosis.package_id":"dataset-package-id"}]');
  }


  spectraCollection.count(query, function(err, count){
    if( err ) {
      return callback(err);
    }



    var cursor = spectraCollection.find(query);
    var first = true;
    var stream = cursor.stream();
    stream
      .skip(start)
      .limit(stop-start);

    callback(null, {
      count : count,
      stream : stream,
      messages : messages,
      start : start,
      stop : stop
    });

  });
}



function queryStats(pkgid, filters, callback) {
  if( pkgid === null ) {
      return callback('package_id is required');
  }

  try {
      if( filters ) {
        filters = JSON.parse(filters);
      }
  } catch(e) {
      filters = [];
  }

  var query = {'ecosis.package_id': pkgid};
  if( filters ) {
    query.$and = filters;
  }

  var cursor = spectraCollection.find(query, {'datapoints' : 1});
  var stream = cursor.stream();

  var resp = {}, packet, key, value, delta, weight;

  // map reduce for this was super slow :(
  cursor.on('data', function(item) {
    var tmp = {}, t;
    for( key in item.datapoints ) {
      t = parseFloat(item.datapoints[key]);

      if( isNaN(t) ) {
        continue;
      }

      key = key.replace(/,/g, '.');

      if( resp[key] ) {
        value = resp[key];

        // following: http://en.wikipedia.org/wiki/Algorithms_for_calculating_variance#Parallel_algorithm
        // https://gist.github.com/RedBeard0531/1886960
        value.sum += t;
        value.count += 1;
        value.min = Math.min(value.min, t);
        value.max = Math.max(value.max, t);

        // temp helpers
        delta = value.sum / value.count - t; // a.mean - b.mean
        weight = value.count / value.count + 1;

        // do the reducing
        value.diff += delta * delta * weight;

      } else {
        resp[key] = {
          sum : t,
          count : 1,
          min : t,
          max : t,
          diff : 0
        };
      }
    }
  });

  cursor.on('end', function() {
    for( var key in resp ) {
      resp[key].avg = resp[key].sum / resp[key].count;
      resp[key].variance = resp[key].diff / resp[key].count;
      resp[key].stddev = Math.sqrt(resp[key].variance);

      delete resp[key].diff;
    }

    callback(null, resp);
  });
}

function getRandom(callback) {
  spectraCollection.count({'value.ecosis.spectra_count' : {$gt: 0} }, function(err, count){
     if( err ) {
       return callback(err);
     }

     var index = Math.round(Math.random() * count)-1;
     if( index < 0 ) {
       index = 0;
     }

     collection.find({}, {'value.ecosis.spectra_count': 1})
        .skip(index)
        .limit(1)
        .toArray(function(err, resp){

          if( err ) {
            return callback({message: err, code: 1});
          } else if( resp.length === 0 ) {
            return callback({ message: 'Query Failed', code:  1});
          }

          index = Math.round(Math.random() * resp[0].value.ecosis.spectra_count) - 1;
          if( index < 0 ) {
            index = 0;
          }

          spectraCollection
           .find({'ecosis.package_id': resp[0]._id})
           .skip(index)
           .limit(1)
           .toArray(function(err, resp){

             if( err ) {
               return callback({message: err, code : 2});
             } else if( resp.length === 0 ) {
               return callback({message: 'Query Failed', code: 2});
             }

             callback(null, helpers.cleanDatapoints(resp[0]));
           });
        });
   });
}

function count(callback) {
  spectraCollection.count({}, callback);
}

function applyPackageId(package_id, filters) {
  if( package_id ) {
    if( !filters ) {
      filters = [];
    }

    filters.push({'ecosis.package_id': package_id});
  }
  return filters;
}

function hasPackageId(filters) {
  if( !filters ) {
    return false;
  }

  try {
    for( var i = 0; i < filters.length; i++ ) {
      var keys = Object.keys(filters[i]);
      if( keys.indexOf('ecosis.package_id') > -1 ) {
        return true;
      }
    }
  } catch(e) {}

  return false;
}
