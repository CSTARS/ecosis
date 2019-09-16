const {AppStateModel} = require('@ucd-lib/cork-app-state');
const AppStateStore = require('../stores/AppStateStore');

class AppStateModelImpl extends AppStateModel {

  constructor() {
    super();

    this.store = AppStateStore;
  }

  set(state={}) {
    // redirect old ecosis hash paths
    if( window.location.hash ) {
      let hashParts = window.location.hash.replace(/^#?/, '').split('/');
      if( hashParts[0] === 'result' ) hashParts[0] = 'package'
      if( hashParts[0] === 'home' ) hashParts = [];
      return this.setLocation('/'+hashParts.join('/'));
    }

    if( this.getParameterByName('result') !== null ) {
      return this.setLocation('/package/'+this.getParameterByName('result'))
    }

    this._sendGA();

    if( state.location &&
        state.location.path &&
        state.location.path.length ) {
      state.page = state.location.path[0]; 
    }

    if( !state.page ) state.page = 'home';
    if( state.page === 'package' && state.location.path.length <= 1) {
      return this.setLocation('');
    }

    super.set(state);
  }

  /**
   * @method _sendGA
   * @description send a google analytics event if pathname has changed
   */
  _sendGA() {
    if( !APP_CONFIG.gaCode ) return;
    if( !gtag ) console.warn('No global gtag variable set for analytics events');
    if( this.lastGaLocation === window.location.pathname ) return;
    this.lastGaLocation = window.location.pathname;

    gtag('config', APP_CONFIG.gaCode, {
      page_path: window.location.pathname
    });
  }

  getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

}

module.exports = new AppStateModelImpl();