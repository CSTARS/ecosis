const {BaseService} = require('@ucd-lib/cork-app-utils');
const SearchStore = require('../stores/SearchStore');

class SearchService extends BaseService {

  constructor() {
    super();
    this.store = SearchStore;
  }

  setModel(model) {
    this.model = model;
  }

  search(query, name) {
    let searchId = this.store.data.currentSearchId;
    this.store.data.currentSearchId++;
    let params = this.model.getRestParamsStr(query);
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
    let params = this.model.getRestParamsStr(query);
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

module.exports = new SearchService();