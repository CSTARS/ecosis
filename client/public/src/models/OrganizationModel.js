const {BaseModel} = require('@ucd-lib/cork-app-utils');
const OrganizationService = require('../services/OrganizationService');
const OrganizationStore = require('../stores/OrganizationStore');

class OrganizationModel extends BaseModel {

  constructor() {
    super();

    this.store = OrganizationStore;
    this.service = OrganizationService;
      
    this.register('OrganizationModel');
  }

  async get(id) {
    let state = this.store.data[id];

    if( state && state.state === 'loading' ) {
      await state.request;
    } else {
      await this.service.get(id);
    }

    return this.store.data[id];
  }

}

module.exports = new OrganizationModel();