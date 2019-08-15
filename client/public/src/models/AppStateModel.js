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

}

module.exports = new AppStateModelImpl();