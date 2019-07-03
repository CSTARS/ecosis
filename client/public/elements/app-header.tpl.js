import { html } from 'lit-element';
import {litCss, sharedStylesHtml} from 'ecosis-client-commons'

export default function render() { 
return html`

${litCss(sharedStylesHtml)}
<style>
  :host {
    display: block;
  }

  .header {
    background: rgb(0,134,125);
    background: linear-gradient(90deg, rgba(0,134,125,1) 15%, rgba(77,182,179,1) 100%);
  }

  /*.header {
    /* background: rgb(0,134,125);
    background: linear-gradient(90deg, rgba(0,134,125,1) 0%, rgba(77,182,179,1) 50%, rgba(100,181,246,1) 100%);
  } */

  .btns {
    padding-left: 15px;
    display: flex;
    color: white;
  }

  .btns a, .btns a:visited  {
    color: white;
    text-decoration: none;
  }
</style>

<div class="header" sandbox$="[[sandbox]]">
  <div main-title>
    EcoSIS 
    <span id="titleExtra"></span> 
    <small>Ecological Spectral Information System</small>
  </div>
  <div class="btns">
    <paper-icon-button icon="more-vert" @click="${this._onMenuIconClick}"></paper-icon-button>
  </div>
</div>

`;}