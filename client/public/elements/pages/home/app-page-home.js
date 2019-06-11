import { LitElement } from 'lit-element';
import render from "./app-page-home.tpl.js"

import "@polymer/iron-image"

export default class AppPageHome extends Mixin(LitElement)
  .with(LitCorkUtils) {

  static get properties() {
    return {
      
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);
  }

}

customElements.define('app-page-home', AppPageHome);
