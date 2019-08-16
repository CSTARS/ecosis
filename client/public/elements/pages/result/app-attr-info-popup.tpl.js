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
    top: 2px;
    right: 0px;
    border: 1px solid white;
    color: white;
    background-color: rgba(0,0,0,.9);
    padding: 8px;
    width: 250px;
    border-radius: 3px;
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