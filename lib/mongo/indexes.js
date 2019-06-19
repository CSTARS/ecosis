const mongo = require('./index');
const config = require('../config');

class MongoIndexes {

  recreateAll() {
    await this.suggest();
  }

  async package() {
    let collection = await mongo.packagesCollection();
    await collection.dropIndexes();

    // GEO
    await collection.create(
      {[config.mongo.geoFilter]: '2dsphere'},
      {background: true}
    );

    // TEXT
    let idx = {};
    for( let key in config.mongo.textIndexes ) {
      idx[key] = 'text';
    }
    await collection.createIndex(
      idx,
      {
        background: true,
        weights: config.mongo.textIndexes
      }
    );

    // FILTERS
    for( let index of config.mongo.indexedFilters ) {
      await collection.createIndex({[index] : 1}, {background: true});
    }
  }

  async spectra() {
    let collection = await mongo.spectraCollection();
    await collection.dropIndexes();

    // FILTERS
    for( let index of config.mongo.spectra.indexes ) {
      await collection.createIndex({[index] : 1}, {background: true});
    }
  }

  async suggest() {
    let collection = await mongo.suggestCollection();
    await collection.dropIndexes();


    await collection.createIndex(
      {
        value : 1,
        count : -1
      },
      {
        background: true
      }
    );
  }


}

module.exports = new MongoIndexes();