import { LitElement } from 'lit-element';
import render from "./app-header.tpl.js"

import "@polymer/paper-icon-button"

export default class AppHeader extends LitElement {

  static get properties() {
    return {
      
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);
  }

  _onMenuIconClick() {
    this.dispatchEvent(
      new CustomEvent('open-menu')
    );
  }

}

customElements.define('app-header', AppHeader);
