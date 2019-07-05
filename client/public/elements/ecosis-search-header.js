import { LitElement } from 'lit-element';
import render from "./ecosis-search-header.tpl.js"


export default class EcosisSearchHeader extends Mixin(LitElement)
  .with(LitCorkUtils) {

  static get properties() {
    return {
      suggestions : {type : Array},
      filters : {type: Array},
      text : {type: String}
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);

    this.page = 'home';
    this.suggestions = [];

    this._injectModel('AppStateModel', 'PackageModel');
  }

  _onAppStateUpdate(e) {
    this.page = e.page;
    let visible = (e.page === 'home' || e.page === 'search');
    this.style.display = visible ? 'block' : 'none';
  }

  /**
   * @method _onInputKeyup
   * @description bound to app-search-headers input keyup event.  Used
   * to power suggest
   * 
   * @param {Object} e 
   */
  _onInputKeyup(e) {
    
  }

  /**
   * @method _onTextSearch
   * @description bound to text search event in app-search-header
   * 
   * @param {Object} e 
   */
  _onTextSearch(e) {
    let query = this.PackageModel.getCurrentSearchQuery();
    query.text = e.detail;
    this._search(query);
  }

  /**
   * @method _onSuggestionSelected
   * @description bound to suggestion selected event in app-search-header
   * 
   * @param {Object} e 
   */
  _onSuggestionSelected(e) {
    let query = this.PackageModel.getCurrentSearchQuery();
    let filterStr = JSON.stringify({[e.detail.key]: e.detail.value});
    
    let index = query.filters.findIndex(filter => (JSON.stringify(filter) === filterStr));
    if( index !== -1 ) return console.warn('Filter already in search', e.detail);
    
    query.filters.push({[e.detail.key]: e.detail.value});
    this._search(query);
  }

  /**
   * @method _onRemoveFilter
   * @description bound to remove-filter event in app-search-header
   */
  _onRemoveFilter(e) {
    let query = this.PackageModel.getCurrentSearchQuery();
    let filterStr = JSON.stringify({[e.detail.key]: e.detail.value});

    let index = query.filters.findIndex(filter => (JSON.stringify(filter) === filterStr));
    if( index === -1 ) return console.warn('Unable to find filter to remove: ', e.detail);
    
    query.filters.splice(index, 1);
    this._search(query);
  }

  /**
   * @method _search
   * @description given a query object set the current window path to 
   * trigger a search
   * 
   * @param {Object} query 
   */
  _search(query) {
    this.AppStateModel.setLocation(
      this.PackageModel.utils.getUrlPathFromQuery(query)
    );
  }

  /**
   * @method _onPackageSearchUpdate
   * @description bound to PackageModel package-search-update event
   * 
   * @param {Object} e 
   */
  _onPackageSearchUpdate(e) {
    this.text = e.metadata.text;
    this.filters = e.metadata.filters;
  }


}

customElements.define('ecosis-search-header', EcosisSearchHeader);
