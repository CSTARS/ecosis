import { LitElement } from 'lit-element';
import render from "./ecosis-search.tpl.js"

// main library
import "../lib"

// polymer
import "@polymer/iron-pages"

import "./pages/home/app-page-home"

export default class EcosisSearch extends Mixin(LitElement)
  .with(LitCorkUtils) {

  static get properties() {
    return {
      page : {type: String}
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);

    this.page = 'home';
  }

}

customElements.define('ecosis-search', EcosisSearch);
