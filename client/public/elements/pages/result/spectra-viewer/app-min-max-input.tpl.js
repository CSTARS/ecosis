import { html } from 'lit-element';

export default function render() { 
return html`

<style>
  :host {
    display: inline-block;
  }

  .layout {
    display: flex;
  }
  .layout > div {
    flex: 1;
  }

  input {
    box-sizing: border-box;
    width: 100%;
  }
</style>  


<div class="layout">
  <div>
    <div><input type="number" .value="${this.min}" @change="${this._onMinChange}" /></div>
    <div>Min</div>
  </div>
  <div>
    <div><input type="number" .value="${this.max}" @change="${this._onMaxChange}" /></div>
    <div>Max</div>
  </div>
</div>

`;}