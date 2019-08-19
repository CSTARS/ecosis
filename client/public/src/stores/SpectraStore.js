const {BaseStore} = require('@ucd-lib/cork-app-utils');

class SpectraStore extends BaseStore {

  constructor() {
    super();

    this.data = {
      searchId : {
        spectra: 0,
        spectraCount: 0
      },
      stats : {},
      search : {},
      count : {}
    };
    this.events = {
      SPECTRA_STATS_UPDATE : 'spectra-stats-update',
      SPECTRA_SEARCH_UPDATE : 'spectra-search-update',
      SPECTRA_COUNT_UPDATE : 'spectra-count-update',
    };
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
    this.emit(this.events.SPECTRA_STATS_UPDATE, state);
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
    this.data.search[state.metadata.name] = state;
    this.emit(this.events.SPECTRA_SEARCH_UPDATE, state);
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
    this.data.search[state.metadata.name] = state;
    this.emit(this.events.SPECTRA_COUNT_UPDATE, state);
  }

}

module.exports = new SpectraStore();