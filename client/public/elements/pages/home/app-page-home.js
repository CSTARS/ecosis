import { LitElement } from 'lit-element';
import render from "./app-page-home.tpl.js"

import "@polymer/iron-image"
import "@polymer/paper-button"

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
    this.organizations = stats['ecosis.organization'];
    this.keywords = stats.Keywords;
    this.themes = stats.Theme;
  }



}

customElements.define('app-page-home', AppPageHome);
