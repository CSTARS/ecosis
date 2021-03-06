import { LitElement, html } from 'lit-element';
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
    this.filters = [];
    this.text = '';
    this.suggestTimer = -1;

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
    if( e.which === 27 ) return;
    if( !e.currentTarget.value ) {
      if( this.suggestTimer !== -1 ) clearTimeout(this.suggestTimer);
      this.suggestions = [];
      return;
    }
    this._bufferedSuggest(e.currentTarget.value);
  }

  _bufferedSuggest(text) {
    if( this.suggestTimer !== -1 ) clearTimeout(this.suggestTimer);
    this.suggestTimer = setTimeout(() => {
      this.suggestTimer = -1;
      this.PackageModel.suggest(text);
    }, 100);
  }

  _onKeywordSuggestUpdate(e) {
    if( e.state === 'loading' ) {
      this.currentSuggestId = e.metadata.searchId;
    }
    if( e.state === 'loaded' && this.currentSuggestId === e.metadata.searchId ) {
      this.renderSuggestions(e.payload);
    }
  }

  renderSuggestions(suggestions) {
    this.suggestions = suggestions.map(item => {
      item.label =  html`<span style="font-size: 18px">${item.value}</span> <span style="font-size: 12px; color: #aaa">${this.PackageModel.utils.getFilterLabel(item.key)}</span>`;
      return item;
    });
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
    query.page = 0;
    this._search(query);
  }

  /**
   * @method _onSuggestionSelected
   * @description bound to suggestion selected event in app-search-header
   * 
   * @param {Object} e 
   */
  _onSuggestionSelected(e) {
    this.text = '';
    this.suggestions = [];

    let query = this.PackageModel.getCurrentSearchQuery();
    let filterStr = JSON.stringify({[e.detail.key]: e.detail.value});
    query.page = 0;

    let index = query.filters.findIndex(filter => (JSON.stringify(filter) === filterStr));
    if( index !== -1 ) return console.warn('Filter already in search', e.detail);
    
    query.text = '';
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
    query.page = 0;

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
    this.text = e.metadata.query.text;
    this.filters = e.metadata.query.filters.map(filter => {
      let key = Object.keys(filter);
      if( key.length === 0 ) return filter; // badness

      if( key[0] === APP_CONFIG.geoFilter ) {
        return {
          label: 'Location Filter', 
          noValueLabel : true,
          key: key[0], 
          value: filter[key[0]]
        }
      }

      return {
        label: this.PackageModel.utils.getFilterLabel(key[0]), 
        key: key[0], 
        value: filter[key[0]]
      };
    });
  }


}

customElements.define('ecosis-search-header', EcosisSearchHeader);
