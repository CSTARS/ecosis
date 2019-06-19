const {BaseStore} = require('@ucd-lib/cork-app-utils');

class GoogleStore extends BaseStore {

  constructor() {
    super();

    this.data = {
      charts : {
        state : 'init'
      }
    };
    this.events = {
      'GOOGLE_CHARTS_UPDATE' : 'google-charts-update'
    };
  }

  chartsLoading(request) {
    this._setChartState({
      state: this.STATE.LOADING,
      request
    });
  }

  chartsLoaded() {
    this._setChartState({
      state: this.STATE.LOADED
    });
  }

  _setChartState(state) {
    this.data.charts = state;
    this.emit(this.STATE.LOADED, this.data);
  }

}

module.exports = new GoogleStore();