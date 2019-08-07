const {BaseService} = require('@ucd-lib/cork-app-utils');
const OrganizationStore = require('../stores/OrganizationStore');

class OrganizationService extends BaseService {

  constructor() {
    super();
    this.store = OrganizationStore;
  }

  get(orgId) {
    return this.request({
      url : `/api/organization/${orgId}`,
      json : true,
      checkCached : () => this.store.data[orgId],
      onLoading : request => this.store.setOrganizationLoading(orgId, request),
      onLoad : response => this.store.setOrganizationLoaded(orgId, response.body),
      onError : error => this.store.setOrganizationError(orgId, error)
    });
  }

}

module.exports = new OrganizationService();