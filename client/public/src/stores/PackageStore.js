const {BaseStore} = require('@ucd-lib/cork-app-utils');

class PackageStore extends BaseStore {

  constructor() {
    super();

    this.data = {
      package : {}
    };
    this.events = {
      PACKAGE_UPDATE : 'package-update',
      STATS_UPDATE : 'stats-update'
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
  setStatsLoading(request) {
    this._setStatsState({
      state: this.STATE.LOADING,
      request
    });
  }

  setStatsLoaded(payload) {
    this._setStatsState({
      state: this.STATE.LOADED,
      payload
    });
  }

  setStatsError(error) {
    this._setStatsState({
      state: this.STATE.ERROR,
      error
    });
  }

  _setStatsState(state) {
    this.data.stats = state;
    this.emit(this.events.STATS_UPDATE, state);
  }


}

module.exports = new PackageStore();