const {BaseModel} = require('@ucd-lib/cork-app-utils');
const GoogleService = require('../services/GoogleService');
const GoogleStore = require('../stores/GoogleStore');

class GoogleModel extends BaseModel {

  constructor() {
    super();

    this.store = GoogleStore;
    this.service = GoogleService;
      
    this.register('GoogleModel');
  }

  /**
   * @method loadCharts
   * @description load google charts corechart
   * 
   * @returns {Promise} resolves to state object
   */
  async loadCharts() {
    let state = this.store.data.charts;

    if( state === 'loading' ) {
      await state.request;
    } else if( state === 'init' ) {
      await this.service.loadCharts();
    }
    
    return this.store.data.charts;
  }

}

module.exports = new GoogleModel();