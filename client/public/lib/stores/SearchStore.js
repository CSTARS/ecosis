const {BaseStore} = require('@ucd-lib/cork-app-utils');

class SearchStore extends BaseStore {

  constructor() {
    super();

    this.data = {};
    this.events = {};
  }

}

module.exports = new SearchStore();