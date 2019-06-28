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
  <div style="position:relative; padding-left: 15px">
    <paper-icon-button inverse icon="more-vert" on-click="_onMenuIconClicked"></paper-icon-button>
    
    <div id="menu" hidden="[[!menuActive]]">
      <a href="/" >
        <iron-icon icon="home"></iron-icon> 
        <span>Home</span>
      </a>
      <a href="/search" >
        <iron-icon icon="search"></iron-icon> 
        <span>Search</span>
      </a>
      <a href="https://data.ecosis.org" target="_blank" hidden$="[[!loggedIn]]">
        <iron-icon icon="add"></iron-icon> 
        <span>Create/Edit Package</span>
      </a>
      <a href="https://ecosml.org" target="_blank" hidden$="[[!loggedIn]]">
        <iron-icon icon="add"></iron-icon> 
        <span>Spectral Models</span>
      </a>
      <a href="https://github.com/EcoSIS/ecosml-webapp/issues/new/choose" target="_blank">
        <iron-icon icon="bug-report"></iron-icon> 
        <span>Report Issue</span>
      </a>
      <a href="/about" >
        <iron-icon icon="info"></iron-icon> 
        <span>About</span>
      </a>
    </div>
  </div>
  <div class="btns">
    <a href="/">
      <iron-icon icon="home"></iron-icon> 
      <span>Home</span>
    </a>
    <a href="/search" >
      <iron-icon icon="search"></iron-icon> 
      <span>Search</span>
    </a>
  </div>
</div>

`;}