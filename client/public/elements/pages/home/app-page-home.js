import { LitElement } from 'lit-element';
import render from "./app-page-home.tpl.js"

import "@polymer/iron-image"
import "@polymer/paper-button"
import "../../app-search-header"

export default class AppPageHome extends Mixin(LitElement)
  .with(LitCorkUtils) {

  static get properties() {
    return {
      active : {type: Boolean},
      lastAdded : {type: Array},
      organizations : {type: Array},
      keywords : {type: Array},
      themes : {type : Array}
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);

    this.active = false;
    this.organizations = [];
    this.keywords = [];
    this.themes = [];
    this.lastAdded = [];

    this._injectModel('PackageModel');
  }


  updated(changedProperties) {
    if( changedProperties.has('active') ) {
      this._onActiveChanged();
    }
  }

  async _onActiveChanged() {
    if( !this.active ) return;

    let stats = await this.PackageModel.stats();
    stats = stats.payload;
    this.lastAdded = stats.lastAdded;

    this.organizations = stats['ecosis.organization']
      .map(item => this._appendLink(item, 'ecosis.organization'));
    this.keywords = stats.Keywords
      .map(item => this._appendLink(item, 'Keywords'));
    this.themes = stats.Theme
      .map(item => this._appendLink(item, 'Theme'));
  }

  _appendLink(item, category) {
    let q = this.PackageModel.utils.getDefaultSearch();
    q.filters.push({[category]: item.value});
    item.link = this.PackageModel.utils.getUrlPathFromQuery(q);
    return item;
  }



}

customElements.define('app-page-home', AppPageHome);
