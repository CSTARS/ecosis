const {BaseModel} = require('@ucd-lib/cork-app-utils');
const PackageService = require('../services/PackageService');
const PackageStore = require('../stores/PackageStore');

class PackageModel extends BaseModel {

  constructor() {
    super();

    this.store = PackageStore;
    this.service = PackageService;
      
    this.register('PackageModel');
  }

  async get(packageId) {
    let state = this.store.data.package[packageId];

    if( state && state.request ) {
      await state.request;
    } else {
      await this.service.get(packageId);
    }

    return this.store.data.package[packageId];
  }

  async stats() {
    let state = this.store.data.stats;

    if( state && state.request ) {
      await state.request;
    } else {
      await this.service.stats();
    }

    return this.store.data.stats;
  }

}

module.exports = new PackageModel();