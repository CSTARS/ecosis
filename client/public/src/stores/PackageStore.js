const {BaseStore} = require('@ucd-lib/cork-app-utils');

class PackageStore extends BaseStore {

  constructor() {
    super();

    this.data = {
      currentSearchId : 0,
      package : {},
      stats : {},
      search : {},
      suggest : {},
      count : {}
    };
    this.events = {
      PACKAGE_UPDATE : 'package-update',
      PACKAGE_STATS_UPDATE : 'package-stats-update',
      PACKAGE_SEARCH_UPDATE : 'package-search-update',
      PACKAGE_COUNT_UPDATE : 'package-count-update',
      KEYWORD_SUGGEST_UPDATE : 'keyword-suggest-update'
    };
  }

  // GET
  setPackageLoading(id, request) {
    this._setPackageState({
      state: this.STATE.LOADING,
      id, request
    });
  }

  setPackageLoaded(id, payload) {
    this._setPackageState({
      state: this.STATE.LOADED,
      id, payload
    });
  }

  setPackageError(id, error) {
    this._setPackageState({
      state: this.STATE.ERROR,
      id, error
    });
  }

  _setPackageState(state) {
    this.data.package[state.id] = state;
    this.emit(this.events.PACKAGE_UPDATE, state);
  }

  // STATS
  setStatsLoading(id, request) {
    this._setStatsState({
      state: this.STATE.LOADING,
      id, request
    });
  }

  setStatsLoaded(payload) {
    this._setStatsState({
      state: this.STATE.LOADED,
      id, payload
    });
  }

  setStatsError(error) {
    this._setStatsState({
      state: this.STATE.ERROR,
      id, error
    });
  }

  _setStatsState(state) {
    this.data.stats[state.id] = state;
    this.emit(this.events.STATS_UPDATE, state);
  }

  // SUGGEST
  setSuggestLoading(request, metadata) {
    this._setSuggestState({
      state : this.STATE.LOADING,
      request, metadata
    });
  }

  setSuggestLoaded(payload, metadata) {
    this._setSuggestState({
      state : this.STATE.LOADED,
      payload, metadata
    });
  }

  setSuggestError(error, metadata) {
    this._setSuggestState({
      state : this.STATE.ERROR,
      error, metadata
    });
  }

  _setSuggestState(state) {
    this.state.suggest[state.metadata.name] = state;
    this.emit(this.events.KEYWORD_SUGGEST_UPDATE, state);
  }

  // SEARCH
  setSearchLoading(request, metadata) {
    this._setSearchState({
      state : this.STATE.LOADING,
      request, metadata
    });
  }

  setSearchLoaded(payload, metadata) {
    this._setSearchState({
      state : this.STATE.LOADED,
      payload, metadata
    });
  }

  setSearchError(error, metadata) {
    this._setSearchState({
      state : this.STATE.ERROR,
      error, metadata
    });
  }

  _setSearchState(state) {
    this.state.search[state.metadata.name] = state;
    this.emit(this.events.PACKAGE_SEARCH_UPDATE, state);
  }

  // COUNT
  setCountLoading(request, metadata) {
    this._setCountState({
      state : this.STATE.LOADING,
      request, metadata
    });
  }

  setCountLoaded(payload, metadata) {
    this._setCountState({
      state : this.STATE.LOADED,
      payload, metadata
    });
  }

  setCountError(error, metadata) {
    this._setCountState({
      state : this.STATE.ERROR,
      error, metadata
    });
  }

  _setCountState(state) {
    this.state.search[state.metadata.name] = state;
    this.emit(this.events.PACKAGE_COUNT_UPDATE, state);
  }


}

module.exports = new PackageStore();