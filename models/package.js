const mongo = require('../lib/mongo');

class PackageModel {

  async count(query) {
    let collection = await mongo.packagesCollection();
    return collection.count(query);
  }

  async get(pkgIdOrName) {
    var filters = {};
    if( config.db.blacklist ) {
      for( var i = 0; i < config.db.blacklist.length; i++ ) {
        filters[(config.db.isMapReduce ? 'value.' : '') + config.db.blacklist[i]] = 0;
      }
    }

    let query = { '$or': [
      {'_id': pkgIdOrName},
      {'value.ecosis.package_id': pkgIdOrName}, 
      {'value.ecosis.package_name': pkgIdOrName}
    ]}
  
    logger.info('Querying main collection: '+JSON.stringify(options));
    let collection = await mongo.packagesCollection();
    let result = await collection.findOne(query, filters);
    if( !result ) throw new Error('Unknown package: '+pkgIdOrName);
    
    var item = result[0];
    if( config.db.isMapReduce ) {
      item = { _id : result[0]._id };
      for( var key in result[0].value ) {
        item[key] = result[0].value[key];
      }
    }

    logger.info('Main collection query success');
    return item;
  }

  async export(pkgid, filters, includeMetadata=false) {
    if( pkgid === null ) {
        return ('package_id or package_name parameter is required');
    }

    if( typeof filters === 'string') {
      filters = JSON.parse(filters);
    }


    let result = await collection.findOne(
        { '$or': [
          {'value.ecosis.package_id': pkgid}, 
          {'value.ecosis.package_name': pkgid}
        ]},
        {'value.ecosis': 1}
    );

    if( !result ) throw new Error('Package not found');
    let pkg = result.value;

    let response = {
      packageName : pkg.ecosis.package_name,
      headers : [],
      stream : null
    };

    let sort = pkg.ecosis.sort_on;
    if( sort === '' ) {
      sort = null;
    }

    // get all the 'data'
    let data = pkg.ecosis.spectra_metadata_schema.wavelengths;
    let metadata = pkg.ecosis.spectra_metadata_schema.metadata;
    let units = pkg.ecosis.spectra_metadata_schema.units;
          
    let aliases = pkg.ecosis.spectra_metadata_schema.aliases;
    let metadataRemoveList = [];
    if( aliases ) {
      var tmp = {};
      for( var key in aliases ) {
        if( key === aliases[key] ) continue;
        
        // make sure any mapped units are exported
        if( units[aliases[key]] ) {
          units[key] = units[aliases[key]];
        }

        metadataRemoveList.push(aliases[key]);
      }
    }

    // sort metadata by names
    if( includeMetadata ) {
      metadata.sort(function(a,b){
          if( a > b ) {
            return 1;
          } else if( a < b ) {
            return -1;
          }
          return 0;
      });

      for( var i = 0; i < metadataRemoveList.length; i++ ) {
        var index = metadata.indexOf(metadataRemoveList[i]);
        if( index > -1 ) {
          metadata.splice(index, 1);
        }
      }
    }

    // sort data by wavelength
    var tmp = [], f;
    for( i = data.length-1; i >= 0; i-- ) {
      f = parseFloat(data[i]);
      if( isNaN(f) ) {
        tmp.push(data.splice(i, 1)[0]);
        continue;
      }

      data[i] = [data[i], f] ;
    }

    data.sort(function(a, b){
        if( a[1] > b[1] ) {
          return -1;
        } else if( a[1] < b[1] ) {
          return 1;
        }
        return 0;
    });

    for( i = 0; i < data.length; i++ ) {
        tmp.splice(0, 0, data[i][0]);
    }
    data = tmp;

    // write headers
    if( includeMetadata && metadata.length > 1 ) {
      response.headers = [];
      metadata.forEach(function(header){
        if( metadataRemoveList.indexOf(header) > -1 ) {
          return;
        }

        if( units[header] ) {
          response.headers.push(header+' ('+units[header]+')');
        } else {
          response.headers.push(header);
        }
      });
    }
    response.headers = response.headers.concat(data);

    // now write data keys as stored in mongo
    for( i = 0; i < data.length; i++ ) {
      data[i] = data[i].replace(/\./,',');
    }

    var query = {'ecosis.package_id': pkgid};
    if( filters ) {
      query.$and = filters;
    }

    var cursor = spectraCollection.find(query);
    if( sort ) {
      cursor.sort({'ecosis.sort': 1});
    }

    response.stream = cursor.stream();
    response.data = data;
    response.metadata = metadata;

    return response;
  }


}

module.exports = new PackageModel();