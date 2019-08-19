const {BaseService} = require('@ucd-lib/cork-app-utils');
const SpectraStore = require('../stores/SpectraStore');
const utils = require('../lib/search-utils');


class SpectraService extends BaseService {

  constructor() {
    super();
    this.store = SpectraStore;
  }

  search(query, packageId, name) {
    let searchId = this.store.data.searchId.spectra;
    this.store.data.searchId.spectra++;
    let params = utils.getRestParamsStr(query);


    let path = `/api/spectra/search${packageId ? '/'+packageId : ''}?${params}`;

    let metadata = {
      searchId, query, path, name, packageId
    };

    return this.request({
      url : path,
      json : true,
      onLoading : request => this.store.setSearchLoading(request, metadata),
      onLoad : response => {
        if( searchId !== this.store.data.searchId.spectra-1 ) return;
        this.store.setSearchLoaded(response.body, metadata);
      },
      onError : error => {
        if( searchId !== this.store.data.searchId.spectra-1 ) return;
        this.store.setSearchError(error, metadata);
      }
    });
  }

  count(query, packageId, name) {
    let searchId = this.store.data.searchId.spectraCount;
    this.store.data.searchId.spectraCount++;
    let params = utils.getRestParamsStr(query);
    let path = `/api/spectra/count${packageId ? '/'+packageId : ''}?${params}`;

    let metadata = {
      searchId, query, path, name, packageId
    };

    return this.request({
      url : path,
      json : true,
      onLoading : request => this.store.setCountLoading(request, metadata),
      onLoad : response => {
        if( searchId !== this.store.data.searchId.spectraCount-1 ) return;
        this.store.setCountLoaded(response.body, metadata)
      },
      onError : error => {
        if( searchId !== this.store.data.searchId.spectraCount-1 ) return;
        this.store.setCountError(error, metadata)
      }
    });
  }

  stats(packageId) {
    return this.request({
      url : `/api/spectra/stats/${packageId}`,
      json : true,
      checkCached : () => this.store.data.stats[packageId],
      onLoading : request => this.store.setStatsLoading(packageId, request),
      onLoad : response => this.store.setStatsLoaded(packageId, response.body),
      onError : error => this.store.setStatsError(packageId, error)
    });
  }


}

module.exports = new SpectraService();