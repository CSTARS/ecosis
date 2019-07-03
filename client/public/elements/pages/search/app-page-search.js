import { LitElement } from 'lit-element';
import render from "./app-page-search.tpl.js"


export default class AppPageSearch extends LitElement {

  static get properties() {
    return {
      
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);
  }

}

customElements.define('app-page-search', AppPageSearch);
