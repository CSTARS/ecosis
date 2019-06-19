const {BaseService} = require('@ucd-lib/cork-app-utils');
const SpectraStore = require('../stores/SpectraStore');

class SpectraService extends BaseService {

  constructor() {
    super();
    this.store = SpectraStore;
  }

  search(query, name) {
    let searchId = this.store.data.currentSearchId;
    this.store.data.currentSearchId++;
    let params = this.model.getRestParamsStr(query);
    let path = `/api/spectra/search?${params}`;

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
    let params = this.model.getRestParamsStr(query);
    let path = `/api/spectra/count?${params}`;

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

  stats() {
    return this.request({
      url : `/api/spectra/stats`,
      json : true,
      checkCached : () => this.store.data.stats,
      onLoading : request => this.store.setStatsLoading(request),
      onLoad : response => this.store.setStatsLoaded(response.body),
      onError : error => this.store.setStatsError(error)
    });
  }


}

module.exports = new SpectraService();