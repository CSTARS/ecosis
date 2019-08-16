'use strict';

const mongo = require('../lib/mongo');
const logger = require('../lib/logger');

class PackageKeywordSuggest {


  async suggest(query) {
    query = new RegExp('^'+query, 'i');
    let collection = await mongo.suggestCollection()

    let result = await collection
      .find({'value.value': query})
      .sort({'value.count': -1})
      .limit(25)
      .toArray();

    return result.map(item => item.value);
  }

}

module.exports = new PackageKeywordSuggest();