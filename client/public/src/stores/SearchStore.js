const {BaseStore} = require('@ucd-lib/cork-app-utils');

class SearchStore extends BaseStore {

  constructor() {
    super();

    this.data = {
      currentSearchId : 0,
      search : {},
      suggest : {},
      count : {}
    };
    this.events = {
      PACKAGE_SEARCH_UPDATE : 'package-search-update',
      PACKAGE_COUNT_UPDATE : 'package-count-update',
      KEYWORD_SUGGEST_UPDATE : 'keyword-suggest-update'
    };
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

module.exports = new SearchStore();