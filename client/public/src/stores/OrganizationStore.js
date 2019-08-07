const {BaseStore} = require('@ucd-lib/cork-app-utils');

class OrganizationStore extends BaseStore {

  constructor() {
    super();

    this.data = {};
    this.events = {
      ORGANIZATION_UPDATE : 'organization-update'
    };
  }

  setOrganizationLoading(id, request) {
    this._setState({state: this.STATE.LOADING, id, request});
  }

  setOrganizationLoaded(id, payload) {
    this._setState({state: this.STATE.LOADED, id, payload});
  }

  setOrganizationError(id, error) {
    this._setState({state: this.STATE.ERROR, id, error});
  }

  _setState(state) {
    this.data[state.id] = state;
    this.emit(this.events.ORGANIZATION_UPDATE, state);
  }

}

module.exports = new OrganizationStore();