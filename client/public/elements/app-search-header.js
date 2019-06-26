import { LitElement } from 'lit-element';
import render from "./app-search-header.tpl.js"

import "@polymer/iron-icons"

export default class AppSearchHeader extends LitElement {

  static get properties() {
    return {
      
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);
  }

}

customElements.define('app-search-header', AppSearchHeader);
