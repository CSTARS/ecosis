const {BaseStore} = require('@ucd-lib/cork-app-utils');

class StatsStore extends BaseStore {

  constructor() {
    super();

    this.data = {};
    this.events = {
      STATS_UPDATE : 'stats-update'
    }
  }

  onLoading(request) {
    this._setState({
      state : this.STATE.LOADING,
      request
    });
  }

  onLoad(payload) {
    this._setState({
      state : this.STATE.LOADED,
      payload
    });
  }

  onError(error) {
    this._setState({
      state: this.STATE.ERROR, 
      error
    });
  }

  _setState(state) {
    this.data = state;
    this.emit(this.events.STATS_UPDATE, state);
  }

}

module.exports = new StatsStore();