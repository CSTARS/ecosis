const {BaseModel} = require('@ucd-lib/cork-app-utils');
const PackageService = require('../services/PackageService');
const PackageStore = require('../stores/PackageStore');
const utils = require('../lib/search-utils');

class PackageModel extends BaseModel {

  constructor() {
    super();

    this.store = PackageStore;
    this.service = PackageService;
    this.utils = utils;
      
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

  async search(query={}, name='main') {
    try {
      await this.service.search(query, name);
    } catch(e) {}

    return this.store.data.search[name];
  }

  async count(query={}, name='main') {
    try {
      await this.service.count(query, name);
    } catch(e) {}

    return this.store.data.count[name];
  }

  async suggest(text, name='main') {
    try {
      await this.service.suggest(text, name);
    } catch(e) {}

    return this.store.data.suggest[name];
  }


}

module.exports = new PackageModel();