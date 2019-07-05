import { LitElement } from 'lit-element';
import render from "./app-page-search.tpl.js"

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

    this._injectModel('PackageModel');

    this.results = [];
    this.showNoResults = false;
  }

  _onPackageSearchUpdate(e) {
    if( e.state !== 'loaded' ) return;
    this.results = e.payload.items;
    this.showNoResults = e.payload.total > 0;
    this.total = e.payload.total;
    this.itemsPerPage = e.payload.stop - e.payload.start;
    this.currentIndex = e.payload.start;
  }

  _onPaginationNav(e) {
    console.log(e);
  }

}

customElements.define('app-page-search', AppPageSearch);
