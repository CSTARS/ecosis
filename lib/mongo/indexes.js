const mongo = require('./index');
const logger = require('../logger');
const config = require('../config');

class MongoIndexes {

  async recreateAll() {
    await this.suggest();
    await this.package();
    await this.spectra();
  }

  async package() {
    let collection = await mongo.packagesCollection();
    await collection.dropIndexes();

    // GEO
    await collection.createIndex(
      {['value.'+config.mongo.geoFilter]: '2dsphere'},
      {
        background: true,
        name : 'geo'
      }
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
        weights: config.mongo.textIndexes,
        name : 'text'
      }
    );

    // FILTERS
    for( let index of config.mongo.indexedFilters ) {
      await collection.createIndex({[index] : 1}, {background: true});
    }

    logger.info('Recreated package indexes');
  }

  async spectra() {
    let collection = await mongo.spectraCollection();
    await collection.dropIndexes();

    // FILTERS
    for( let index of config.mongo.spectra.indexes ) {
      // we always attempt to sort our spectra queries, so always include in index
      await collection.createIndex({[index] : 1, 'ecosis.sort':1}, {background: true});
    }

    logger.info('Recreated spectra indexes');
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
        background: true,
        name : 'suggest'
      }
    );

    logger.info('Recreated suggest indexes');
  }


}

module.exports = new MongoIndexes();