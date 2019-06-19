const {BaseStore} = require('@ucd-lib/cork-app-utils');

class SpectraStore extends BaseStore {

  constructor() {
    super();

    this.data = {};
    this.events = {};
  }

}

module.exports = new SpectraStore();