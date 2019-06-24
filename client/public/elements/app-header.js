import { LitElement } from 'lit-element';
import render from "./app-header.tpl.js"


export default class AppHeader extends LitElement {

  static get properties() {
    return {
      
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);
  }

}

customElements.define('app-header', AppHeader);
