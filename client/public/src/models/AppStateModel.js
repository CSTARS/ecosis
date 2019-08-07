const {AppStateModel} = require('@ucd-lib/cork-app-state');
const AppStateStore = require('../stores/AppStateStore');

class AppStateModelImpl extends AppStateModel {

  constructor() {
    super();

    this.store = AppStateStore;
  }

  set(state={}) {
    if( state.location &&
        state.location.path &&
        state.location.path.length ) {
      state.page = state.location.path[0]; 
    }

    if( !state.page ) state.page = 'home';
    if( state.page === 'package' && state.location.path.length <= 1) {
      return this.setWindowLocation('');
    }

    super.set(state);
  }

}

module.exports = new AppStateModelImpl();