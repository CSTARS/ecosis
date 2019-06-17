const {BaseModel} = require('@ucd-lib/cork-app-utils');
const SearchService = require('../services/SearchService');
const SearchStore = require('../stores/SearchStore');
const clone = require('clone');

class SearchModel extends BaseModel {

  constructor() {
    super();

    this.store = SearchStore;
    this.service = SearchService;
      
    this.register('SearchModel');
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
      text : encodeURIComponent(query.text),
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
    return query;
  }

  getQueryFromUrl(path) {
		var search = this.getDefaultSearch();

		for( var i = 1; i < hash.length; i++ ) {
			if( hash[i].length > 0 ) {
				search[HASH_SEARCH_ORDER[i-1]] = hash[i];
			}
		}

		try {
			if( typeof search.filters == 'string' ) {
				search.filters = JSON.parse(search.filters);
			}
		} catch (e) {
			console.log(e);
		}

		for( var i = 0; i < DEFAULT_SEARCH.filters.length; i++ ) {
			var f = DEFAULT_SEARCH.filters[i];
			var key = "";
			for( key in f ) break;

			var found = false;
			for( var j = 0; j < search.filters.length; j++ ) {
				if( search.filters[j][key] == f[key] ) {
					found = true;
					break;
				}
			}
			if( !found ) search.filters.push(f);
		}

		try {
			if( typeof search.page == 'string' ) {
				search.page = parseInt(search.page);
			}
			if( typeof search.itemsPerPage == 'string' ) {
				search.itemsPerPage = parseInt(search.itemsPerPage);
			}
		} catch(e) {
			console.log(e);
		}

		return search;
	}


}

module.exports = new SearchModel();