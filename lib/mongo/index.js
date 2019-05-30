const mongodb = require('mongodb');
const logger = require('../logger');
const config = require('../config');

class MongoDB {

  conn() {
    if( this.db ) return this.db

    return new Promise((resolve, reject) => {
      mongodb.connect(config.mongo.url, (error, db) => {
        if( error ) {
          return reject(error);
        }

        db.on('close', e => {
          logger.warn('MongoDB connection closed', e);
          this.db = null;
        });

        this.db = db;
        logger.info('MongoDB connected');
        resolve(db);
      });
    });
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

  async lookupCollection() {
    await this.conn();
    return this.db.collection(config.mongo.collections.lookup);
  }

  async usdaCollection() {
    await this.conn();
    return this.db.collection(config.mongo.collections.usda);
  }

  async getPackageId(pkgIdOrName) {
    let collection = await this.packagesCollection();
    let pkg = collection.findOne(
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
  
    return item;
  }

}

module.exports = new MongoDB();