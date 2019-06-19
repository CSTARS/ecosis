const {BaseModel} = require('@ucd-lib/cork-app-utils');
const StatsService = require('../services/StatsService');
const StatsStore = require('../stores/StatsStore');

class StatsModel extends BaseModel {

  constructor() {
    super();
    
    this.service = StatsService;
    this.store = StatsStore;
    this.register('StatsModel');
  }

  async get() {
    try {
      if( this.store.data.request ) {
        await this.store.data.request;
      } else {
        await this.service.get();
      }
    } catch(e) {
      console.error(e);
    }

    return this.store.data;
  }

}

module.exports = new StatsModel();