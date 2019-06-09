import { LitElement } from 'lit-element';
import render from "./ecosis-search.tpl.js"


export default class EcosisSearch extends LitElement {

  static get properties() {
    return {
      
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);
  }

}

customElements.define('ecosis-search', EcosisSearch);
