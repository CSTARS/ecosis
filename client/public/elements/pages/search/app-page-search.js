import { LitElement } from 'lit-element';
import render from "./app-page-search.tpl.js"

import "./app-search-result"

export default class AppPageSearch extends Mixin(LitElement)
  .with(LitCorkUtils) {

  static get properties() {
    return {
      results : {type: Array},
      showNoResults : {type: Boolean},
      itemsPerPage : {type: Number},
      currentIndex : {type: Number},
      total : {type: Number}
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);

    this._injectModel('PackageModel', 'AppStateModel');

    this.results = [];
    this.showNoResults = false;
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

}

customElements.define('app-page-search', AppPageSearch);
