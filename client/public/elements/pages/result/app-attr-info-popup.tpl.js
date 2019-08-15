import { html } from 'lit-element';

export default function render() { 
return html`

<style>
  :host {
    display: inline-block;
  }

  .popup-anchor {
    position : relative;
  }

  .popup {
    display: none;
    position: absolute;
    z-index: 1000;
    top: 10px;
    right: 0px;
    border: 1px solid #ccc;
    background-color: white;
    padding: 10px;
    max-width: 150px;
    font-size: 14px;
  }
  .popup[showing] {
    display: block;
  }
</style>  

<paper-icon-button @click="${this._onClick}" icon="info"></paper-icon-button>
<div class="popup-anchor">
  <div class="popup" ?showing="${this.showing}">${this.description}</div>
<div>
`;}