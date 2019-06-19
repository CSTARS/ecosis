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

  async search(query={}, name='main') {
    try {
      await this.service.search(query, name);
    } catch(e) {}

    return this.store.data.search[name];
  }

}

module.exports = new SpectraModel();