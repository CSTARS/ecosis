'use strict';

const mongo = require('../lib/mongo');
const logger = require('../lib/logger');

class PackageKeywordSuggest {


  async suggest(query) {
    query = new RegExp('^'+query, 'i');
    let collection = await mongo.packagesCollection()

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

}

module.exports = new PackageKeywordSuggest();