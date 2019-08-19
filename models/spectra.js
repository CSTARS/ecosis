'use strict';

const mongo = require('../lib/mongo');
class SpectraModel {

  /**
   * @method getSpatialLocations
   * @description given a package name or id, get all geojson
   * for spectra in package
   *
   * @param {String} pkgNameOrId 
   * 
   * @returns {Promise} resolves to Array
   */
  async getSpatialLocations(pkgNameOrId) {
    let pkgId = await mongo.getPackageId(pkgNameOrId);
    let collection = await mongo.spectraCollection();

    let results = collection.find(
      {
        'ecosis.package_id': pkgId,
        'ecosis.geojson' : {
          '$exists' : true
        }
      },{
        'ecosis.geojson': 1
      }).toArray();
    
    return results.map(result => result.ecosis.geojson);
  }

  async query(pkgNameOrId, filters, start, stop) {
    let pkgId = await mongo.getPackageId(pkgNameOrId);
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
  
    filters = this._applyPackageId(pkgId, filters);
  
    var query = {};
    if( filters ) {
      query.$and = filters;
    }
  
    // check for ecosis.package_id parameter.
    if( !this._hasPackageId(filters) ) {
      messages.push('Warning. No package_id provided, your result set may contain spectra from multiple '+
        'datasets.  To limit to a single dataset, include \'ecosis.package_id\' in your filters parameter.  Ex: '+
        '/spectra/query?filters=[{"ecosis.package_id":"dataset-package-id"}]');
    }

    let collection = await mongo.spectraCollection();
    let count = await collection.count(query);
  
    let cursor = collection.find(query);
    let stream = cursor.stream();
    stream
      .skip(start)
      .sort({'ecosis.sort': 1 })
      .limit(stop-start);

    return {count, stream, messages, start, stop};
  }

  async _stats(pkgid, filters, resolve, reject) {
    if( pkgid === null ) {
      return reject(new Error('package_id is required'));
    }
  
    try {
      if( filters ) {
        filters = JSON.parse(filters);
      }
    } catch(e) {
      filters = [];
    }
  
    let query = {'ecosis.package_id': pkgid};
    if( filters ) {
      query.$and = filters;
    }
  
    let collection = await mongo.spectraCollection();
    let cursor = collection.find(query, {'datapoints' : 1});
    cursor.stream();
  
    let resp = {}, key, value, delta, weight;
  
    // map reduce for this was super slow :(
    cursor.on('data', (item) => {
      let t;
      for( key in item.datapoints ) {
        t = parseFloat(item.datapoints[key]);
  
        if( isNaN(t) ) continue;
  
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
  
    cursor.on('end', () => {
      for( var key in resp ) {
        resp[key].avg = resp[key].sum / resp[key].count;
        resp[key].variance = resp[key].diff / resp[key].count;
        resp[key].stddev = Math.sqrt(resp[key].variance);
  
        delete resp[key].diff;
      }
  
      resolve(resp);
    });

    cursor.stream();
  }

  stats(pkgid, filters) {
    return new Promise((resolve, reject) => {
      this._stats(pkgid, filters, resolve, reject);
    });
  }

  async count(filter={}) {
    let collection = await mongo.spectraCollection();
    return collection.count(filter);
  }

  _applyPackageId(package_id, filters) {
    if( package_id ) {
      if( !filters ) {
        filters = [];
      }
  
      filters.push({'ecosis.package_id': package_id});
    }
    return filters;
  }

  _hasPackageId(filters) {
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

}

module.exports = new SpectraModel();