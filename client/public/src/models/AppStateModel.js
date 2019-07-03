const {AppStateModel} = require('@ucd-lib/cork-app-state');
const AppStateStore = require('../stores/AppStateStore');

class AppStateModelImpl extends AppStateModel {

  constructor() {
    super();

    this.store = AppStateStore;
  }

  set(state={}) {
    if( state.location &&
        state.location.path ) {
      state.page = state.location.path.length ? state.location.path[0] : 'home'; 
    }

    super.set(state);
  }

}

module.exports = new AppStateModelImpl();