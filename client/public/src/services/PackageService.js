const {BaseService} = require('@ucd-lib/cork-app-utils');
const PackageStore = require('../stores/PackageStore');

class PackageService extends BaseService {

  constructor() {
    super();
    this.store = PackageStore;
  }

  get(packageId) {
    return this.request({
      url : `/api/package/${packageId}`,
      json : true,
      checkCached : () => this.store.data.package[packageId],
      onLoading : request => this.store.setPackageLoading(packageId, request),
      onLoad : response => this.store.setPackageLoaded(packageId, response.body),
      onError : error => this.store.setPackageError(packageId, error)
    });
  }

  stats() {
    return this.request({
      url : `/api/package/stats`,
      json : true,
      checkCached : () => this.store.data.stats,
      onLoading : request => this.store.setStatsLoading(request),
      onLoad : response => this.store.setStatsLoaded(response.body),
      onError : error => this.store.setStatsError(error)
    });
  }

}

module.exports = new PackageService();