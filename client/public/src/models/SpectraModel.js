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
    } catch(e) {}

    return this.store.data.count[name];
  }

  /**
   * @method search
   * 
   * @param {*} query 
   * @param {*} name 
   */
  async search(query={}, name='main') {
    try {
      await this.service.search(query, name);
    } catch(e) {}

    return this.store.data.search[name];
  }

  /**
   * @method stats
   * 
   * @param {*} packageId 
   */
  async stats(packageId) {
    try {
      await this.service.stats(packageId);
    } catch(e) {}

    return this.store.data.count[name];
  }

}

module.exports = new SpectraModel();