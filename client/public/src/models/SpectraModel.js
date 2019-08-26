const {BaseModel} = require('@ucd-lib/cork-app-utils');
const SpectraService = require('../services/SpectraService');
const SpectraStore = require('../stores/SpectraStore');

class SpectraModel extends BaseModel {

  constructor() {
    super();

    this.store = SpectraStore;
    this.service = SpectraService;
      
    this.register('SpectraModel');
  }

  /**
   * @method count
   */
  async count(query={}, name='main') {
    try {
      await this.service.count(query, name);
    } catch(e) {
      console.error(e);
    }

    return this.store.data.count[name];
  }

  /**
   * @method search
   * 
   * @param {*} query 
   * @param {*} name 
   */
  async search(query={}, packageId, name='main') {
    try {
      await this.service.search(query, packageId, name);
    } catch(e) {
      console.error(e);
    }

    return this.store.data.search[name];
  }

  /**
   * @method stats
   * 
   * @param {*} packageId 
   */
  async stats(filters, packageId) {
    try {
      await this.service.stats(filters, packageId);
    } catch(e) {
      console.error(e);
    }

    return this.store.data.stats;
  }

}

module.exports = new SpectraModel();