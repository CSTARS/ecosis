import { LitElement } from 'lit-element';
import render from "./app-page-search.tpl.js"

import "./app-search-result"
import "./app-location-filter"

export default class AppPageSearch extends Mixin(LitElement)
  .with(LitCorkUtils) {

  static get properties() {
    return {
      results : {type: Array},
      filters : {type: Array},
      showNoResults : {type: Boolean},
      itemsPerPage : {type: Number},
      currentIndex : {type: Number},
      total : {type: Number},
      mobileFiltersOpen : {type: Boolean}
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);

    this._injectModel('PackageModel', 'AppStateModel');

    this.results = [];
    this.filters = [];
    this.showNoResults = false;
    this.mobileFiltersOpen = false;

    window.addEventListener('resize', () => {
      let w = window.innerWidth;
      if( this.mobileFiltersOpen && w > 768 ) this.mobileFiltersOpen = false;
    });
  }

  /**
   * @method _onPackageSearchUpdate
   * @description bound to PackageModel package-search-update event
   * 
   * @param {Object} e 
   */
  _onPackageSearchUpdate(e) {
    if( e.state !== 'loaded' ) return;
    this.results = e.payload.items;
    this.showNoResults = e.payload.total > 0;
    this.total = e.payload.total;
    this.itemsPerPage = e.payload.stop - e.payload.start;
    this.currentIndex = e.payload.start;

    let filters = [];
    for( let name in e.payload.filters ) {
      filters.push({
        name, 
        label : this.PackageModel.utils.getFilterLabel(name),
        values : e.payload.filters[name].map(item => {
          return {
            label : item.filter,
            count : item.count
          }
        })
      })
    }

    this.filters = filters;
  }

  /**
   * @method _onPaginationNav
   * @description bound to app-search-pagination ele nav event
   * 
   * @param {Object} e 
   */
  _onPaginationNav(e) {
    let query = this.PackageModel.getCurrentSearchQuery();
    query.page = e.detail.page-1;
    this.AppStateModel.setLocation(
      this.PackageModel.utils.getUrlPathFromQuery(query)
    );
  }

  /**
   * @method _onOpenLocationClicked
   * @description bound to click event of location filter button
   * 
   * @param {Object} e
   */
  _onOpenLocationClicked(e) {
    document.querySelector('#locationPopup').open();
  }

  _toggleMobileFilters() {
    this.mobileFiltersOpen = !this.mobileFiltersOpen;
  }

  _onItemSelected(e) {
    e = e.detail;
    let query = this.PackageModel.utils.getDefaultSearch();
    query.filters.push({[e.filter]: e.value.label});
    this.AppStateModel.setLocation(this.PackageModel.utils.getUrlPathFromQuery(query));
  }

}

customElements.define('app-page-search', AppPageSearch);
