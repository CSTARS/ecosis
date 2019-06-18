const {BaseStore} = require('@ucd-lib/cork-app-utils');

class SearchStore extends BaseStore {

  constructor() {
    super();

    this.data = {
      currentSearchId : 0,
      search : {},
      suggest : {}
    };
    this.events = {
      SEARCH_UPDATE : 'search-update',
      SUGGEST_UPDATE : 'suggest-update'
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
    this.emit(this.events.SUGGEST_UPDATE, state);
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
    this.emit(this.events.SEARCH_UPDATE, state);
  }

}

module.exports = new SearchStore();