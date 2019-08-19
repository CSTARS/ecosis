const MongoClient = require('mongodb').MongoClient;
const logger = require('../logger');
const config = require('../config');

class MongoDB {

  async conn() {
    if( this.connecting ) {
      await this.connecting;
    }
    if( this.db ) return this.db

    const client = new MongoClient(config.mongo.url);
    this.connecting = client.connect();
    await this.connecting;

    this.db = client.db(config.mongo.database);
    this.connecting = false;

    this.db.on('close', e => {
      logger.warn('MongoDB connection closed', e);
      this.db = null;
    });

    return this.db;
  }

  disconnect() {
    this.db.close();
  }

  async packagesCollection() {
    await this.conn();
    return this.db.collection(config.mongo.collections.package);
  }

  async spectraCollection() {
    await this.conn();
    return this.db.collection(config.mongo.collections.spectra);
  }

  async suggestCollection() {
    await this.conn();
    return this.db.collection(config.mongo.collections.suggest);
  }

  async usdaCollection() {
    await this.conn();
    return this.db.collection(config.mongo.collections.usda);
  }

  async getPackageId(pkgIdOrName) {
    let collection = await this.packagesCollection();
    let pkg = await collection.findOne(
      {
        '$or': [
          {'_id': pkgIdOrName},
          {'value.ecosis.package_name': pkgIdOrName}
        ]
      },
      {'_id': 1 }
    );
    if( !pkg ) return null;
    return pkg._id;
  }

  /**
   * @method cleanDatapoints
   * @description mongodb keys do not allow periods. Since we save wavelengths
   * as keys, we use commas instead.  This function replaces the commons back
   * to periods.
   * 
   * @param {Object} spectra
   * 
   * @returns {Object}
   */
  cleanDatapoints(spectra) {
    // cleanup datapoints
    let points = {};
    for( let key in spectra.datapoints ) {
      points[key.replace(/,/g, '.')] = spectra.datapoints[key];
    }
    spectra.datapoints = points;
  
    return spectra;
  }

}

module.exports = new MongoDB();