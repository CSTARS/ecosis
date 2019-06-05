'use strict';

const mongo = require('../lib/mongo');

class StatsModel {

  constructor() {
    this.KEYWORDS = ['ecosis.organization', 'Keywords', 'Theme'];
  }

  /**
   * @method home
   * @description get home page stats
   */
  async home() {
    let result = {};

    for( let keyword of this.KEYWORDS ) {
      result[keyword] = await this._getTopKeywords(keyword);
    }
    result.lastAdded = await this._getLastAdded();
    result.spectraCount = await this._getCount()
  }

  async _getTopKeywords(key) {
    let collection = await mongo.suggestCollection();
    let result = await collection.
        find({'value.key': key})
        .sort({'value.count': -1})
        .limit(5)
        .toArray();

    return result.map((r) => {
      return {
        value : r.value.value,
        count :  r.value.count
      };
    });
  }


  async _getLastAdded() {
    let collection = await mongo.packagesCollection();
    let result = collection
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
      .toArray();

    return result.map(r => {
      return r.value;
    });
  }

  async _getCount() {
    let collection = await mongo.spectraCollection();
    return collection.count({});
  }

}

module.exports = new StatsModel();