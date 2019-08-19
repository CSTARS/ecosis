const {BaseService} = require('@ucd-lib/cork-app-utils');
const GoogleStore = require('../stores/GoogleStore');

class GoogleService extends BaseService {

  constructor() {
    super();
    this.store = GoogleStore;
  }

  loadCharts() {
    if( typeof window === 'undefined' ) throw new Error('You are not in a browser!');
    if( !window.google || !window.google.charts ) {
      throw new Error('The base Google Charts script has not been loaded');
    }

    let p = new Promise((resolve, reject) => {
      google.charts.load('current', {packages: ['corechart']});
      google.charts.setOnLoadCallback(() => {
        this.store.chartsLoaded();
        resolve();
      });
    });
    this.store.chartsLoading(p);

    return p;
  }

}

module.exports = new GoogleService();