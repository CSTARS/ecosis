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

  /**
   * @method get
   * @description get a package by name or id.  This will cache
   * the package info after the first call
   * 
   * @param {String} packageId package name or id
   * 
   * @returns {Promise} resolves to state object
   */
  async get(packageId) {
    let state = this.store.data.package[packageId];

    if( state && state.request ) {
      await state.request;
    } else {
      await this.service.get(packageId);
    }

    return this.store.data.package[packageId];
  }

  /**
   * @method stats
   * @description get stats for all packages in EcoSIS.  This
   * will cache after the first call.
   * 
   * @returns {Promise} resolves to state object
   */
  async stats() {
    let state = this.store.data.stats;

    if( state && state.request ) {
      await state.request;
    } else {
      await this.service.stats();
    }

    return this.store.data.stats;
  }

  /**
   * @method search
   * @description Search packages. see query def below.  Use
   * the name parameter to allow multiple searches at once. 
   * 
   * @param {Object} query main query object
   * @param {String} query.text text string to query on
   * @param {Array} query.filters mongo db filter objects to $and together
   * @param {Number} query.start index to start at (for paging)
   * @param {Number} query.stop index to stop at (for paging)
   * @param {String} name name this query so it doesn't override a different query state.  Only
   * needed if you have multiple, separate query objects.
   * 
   * @returns {Promise} resolves to state object
   */
  async search(query={}, name='main') {
    try {
      await this.service.search(query, name);
    } catch(e) {}

    return this.store.data.search[name];
  }

  /**
   * @method count
   * @description Count for search packages. same as a search but only return the count
   * for the specific query.
   * 
   * @param {Object} query main query object
   * @param {String} query.text text string to query on
   * @param {Array} query.filters mongo db filter objects to $and together
   * @param {Number} query.start index to start at (for paging)
   * @param {Number} query.stop index to stop at (for paging)
   * @param {String} name name this query so it doesn't override a different query state.  Only
   * needed if you have multiple, separate query objects.
   * 
   * @returns {Promise} resolves to state object
   */
  async count(query={}, name='main') {
    try {
      await this.service.count(query, name);
    } catch(e) {}

    return this.store.data.count[name];
  }

  /**
   * @name suggest
   * @description suggest key terms to filter on given input text
   * 
   * @param {String} text text to suggest on
   * @param {String} name name this query so it doesn't override a different suggest state.  Only
   * needed if you have multiple, separate suggest queries.
   * 
   * @returns {Promise} resolves to state object
   */
  async suggest(text, name='main') {
    try {
      await this.service.suggest(text, name);
    } catch(e) {}

    return this.store.data.suggest[name];
  }


}

module.exports = new PackageModel();