const {BaseService} = require('@ucd-lib/cork-app-utils');
const PackageStore = require('../stores/PackageStore');
const utils = require('../lib/search-utils');

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

  search(query, name) {
    let searchId = this.store.data.currentSearchId;
    this.store.data.currentSearchId++;
    let params = utils.getRestParamsStr(query);
    let path = `/api/package/search?${params}`;

    let metadata = {
      searchId, query, path, name
    };

    return this.request({
      url : path,
      json : true,
      onLoading : request => this.store.setSearchLoading(request, metadata),
      onLoad : response => this.store.setSearchLoaded(response.body, metadata),
      onError : error => this.store.setSearchError(error, metadata)
    });
  }

  count(query, name) {
    let searchId = this.store.data.currentSearchId;
    this.store.data.currentSearchId++;
    let params = utils.getRestParamsStr(query);
    let path = `/api/package/count?${params}`;

    let metadata = {
      searchId, query, path, name
    };

    return this.request({
      url : path,
      json : true,
      onLoading : request => this.store.setCountLoading(request, metadata),
      onLoad : response => this.store.setCountLoaded(response.body, metadata),
      onError : error => this.store.setCountError(error, metadata)
    });
  }

  suggest(text, name) {
    let searchId = this.store.data.currentSearchId;
    this.store.data.currentSearchId++;

    let path = `/api/suggest/${text}`;

    let metadata = {
      searchId, text, path, name
    };

    return this.request({
      url : path,
      json : true,
      onLoading : request => this.store.setSuggestLoading(request, metadata),
      onLoad : response => this.store.setSuggestLoaded(response.body, metadata),
      onError : error => this.store.setSuggestError(error, metadata)
    });
  }

}

module.exports = new PackageService();