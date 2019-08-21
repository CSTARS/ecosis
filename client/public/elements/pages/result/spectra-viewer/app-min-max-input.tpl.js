import { html } from 'lit-element';
import {litCss, sharedStylesHtml} from 'ecosis-client-commons'

export default function render() { 
return html`

${litCss(sharedStylesHtml)}
<style>
  :host {
    display: inline-block;
  }

  .layout {
    display: flex;
  }
  .layout > div {
    flex: 1;
    padding: 3px 6px;
  }

  .label {
    font-size: 14px;
    font-style: italic;
  }

  input {
    box-sizing: border-box;
    width: 100%;
  }
</style>  


<div class="layout">
  <div>
    <div><input type="number" .value="${this.min}" @change="${this._onMinChange}" /></div>
    <div class="label">Min</div>
  </div>
  <div>
    <div><input type="number" .value="${this.max}" @change="${this._onMaxChange}" /></div>
    <div class="label">Max</div>
  </div>
</div>

`;}