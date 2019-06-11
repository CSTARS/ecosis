import { LitElement } from 'lit-element';
import render from "./ecosis-search.tpl.js"

// main library
import "../lib"

export default class EcosisSearch extends LitElement {

  static get properties() {
    return {
      
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);

    // google.charts.load('current', {packages: ['corechart']});
    // google.charts.setOnLoadCallback(drawChart);
  }

}

customElements.define('ecosis-search', EcosisSearch);
