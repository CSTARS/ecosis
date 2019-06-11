const {BaseService} = require('@ucd-lib/cork-app-utils');
const GoogleStore = require('../stores/GoogleStore');

class GoogleService extends BaseService {

  constructor() {
    super();
    this.store = GoogleStore;
  }

  loadCharts() {
    let p = new Promise((resolve, reject) => {
      this.store.chartsLoading(p);
      google.charts.load('current', {packages: ['corechart']});
      google.charts.setOnLoadCallback(() => {
        this.store.ChartsLoaded();
        resolve();
      });
    });
    return p;
  }

}

module.exports = new GoogleService();