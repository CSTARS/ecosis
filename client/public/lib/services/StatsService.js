const {BaseService} = require('@ucd-lib/cork-app-utils');
const StatsStore = require('../stores/StatsStore');

class StatsService extends BaseService {

  constructor() {
    super();
    this.BASE_URL = '/api/stats';
    this.store = StatsStore;
  }

  get() {
    return this.request({
      url : this.BASE_URL+'/home',
      json : true,
      checkCached: () => this.store.data,
      onLoading : request => this.store.onLoading(request),
      onLoad : resp => this.store.onLoad(resp.body),
      onError : e => this.store.onError(e)
    });
  }

}

module.exports = new StatsService();