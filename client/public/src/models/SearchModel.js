const {BaseModel} = require('@ucd-lib/cork-app-utils');
const SearchService = require('../services/SearchService');
const SearchStore = require('../stores/SearchStore');

class SearchModel extends BaseModel {

  constructor() {
    super();

    this.store = SearchStore;
    this.service = SearchService;
    this.service.setModel(this);

    this.HASH_SEARCH_ORDER = ['text','filters','page','itemsPerPage'];
      
    this.register('SearchModel');
  }

  async search(query={}, name='main') {
    try {
      await this.service.search(query, name);
    } catch(e) {}

    return this.store.data.search[name];
  }

  async count(query={}, name='main') {
    try {
      await this.service.count(query, name);
    } catch(e) {}

    return this.store.data.count[name];
  }

  async suggest(text, name='main') {
    try {
      await this.service.suggest(text, name);
    } catch(e) {}

    return this.store.data.suggest[name];
  }

  getDefaultSearch() {
    return {
      text         : '',
      filters      : [],
      page         : 0,
      itemsPerPage : 6
    }
  }

  getRestParams(query) {
    return  {
      text : encodeURIComponent(query.text || ''),
      filters : JSON.stringify(query.filters || []),
      start : query.page*query.itemsPerPage,
      stop : ((query.page+1)*query.itemsPerPage)
    }
  }
  
  getRestParamsStr(query) {
    query = this.getRestParams(query);
    let str = '';
    for( let key in query ) {
      str += key+'='+encodeURIComponent(query[key]);
    }
    return str;
  }

  getQueryFromUrl(path) {
    let search = this.getDefaultSearch();
    if( typeof path === 'string' ) {
      path = path.replace(/^\//, '').replace(/\/$/, '').split('/');
    }

    path.forEach((item, i) => {
      if( !item ) return;
      search[this.HASH_SEARCH_ORDER[i]] = item;
    });

    try {
      if( typeof search.filters === 'string' ) {
        search.filters = JSON.parse(search.filters);
      }
    } catch (e) {
      console.error(e);
    }

    // for( var i = 0; i < DEFAULT_SEARCH.filters.length; i++ ) {
    //   var f = DEFAULT_SEARCH.filters[i];
    //   var key = "";
    //   for( key in f ) break;

    //   var found = false;
    //   for( var j = 0; j < search.filters.length; j++ ) {
    //     if( search.filters[j][key] == f[key] ) {
    //       found = true;
    //       break;
    //     }
    //   }
    //   if( !found ) search.filters.push(f);
    // }

    try {
      if( typeof search.page === 'string' ) {
        search.page = parseInt(search.page);
      }
    } catch(e) {
      console.error(e);
    }

    try {
      if( typeof search.itemsPerPage === 'string' ) {
        search.itemsPerPage = parseInt(search.itemsPerPage);
      }
    } catch(e) {
      console.error(e);
    }

    return search;
  }


}

module.exports = new SearchModel();