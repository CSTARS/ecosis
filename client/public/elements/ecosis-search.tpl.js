import { html } from 'lit-element';
import {litCss, sharedStylesHtml} from 'ecosis-client-commons'

export default function render() { 
return html`

${litCss(sharedStylesHtml)}
<style>
  :host {
    display: block;
  }

  .menu-root {
    min-height: 100%;
    padding-top: 61px;
    box-sizing: border-box;
  }

  .main-content {
    will-change: transition;
    transform: translate(0px, 0px);
    transition: transform 250ms ease-out;
  }

  .main-content[open-menu] {
    transform: translate(-150px, 0px);
  }

  .menu {
    will-change: transition;
    transition: transform 250ms ease-out;
    transform: translate(150px, 0px);
    z-index: 0;
    position: absolute;
    top: 61px;
    right: 0;
    bottom: 0;
    width: 150px;
    background: white;
    box-shadow: 0 0 5px #ccc inset;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
  }

  .menu[open-menu] {
    transform: translate(0px, 0px);
  }

  .menu a {
    display: block;
    text-align: center;
    font-size: 17px;
    margin-top: 20px;
  }

  .menu iron-icon {
    --iron-icon-width: 32px;
    --iron-icon-height: 32px;
  }

  .menu a span {
    display: block;
  }
</style>  

<app-route .appRoutes="${this.appRoutes}"></app-route>
<app-header @open-menu="${this._onOpenMenu}"></app-header>
<div class="menu-root">
  <div class="menu" ?open-menu="${this.openMenu}">
    <a href="/" tabindex="${this.anchorTabIndex}">
      <div>
        <iron-icon icon="home"></iron-icon> 
      </div>
      <span>Home</span>
    </a>
    <a href="/search" tabindex="${this.anchorTabIndex}">
      <iron-icon icon="search"></iron-icon> 
      <span>Search</span>
    </a>
    <a href="https://data.ecosis.org" target="_blank" tabindex="${this.anchorTabIndex}">
      <iron-icon icon="create"></iron-icon> 
      <span>Create/Edit</span>
    </a>
    <a href="https://ecosml.org" target="_blank" tabindex="${this.anchorTabIndex}">
      <iron-icon icon="code"></iron-icon> 
      <span>Models</span>
    </a>
    <a href="https://github.com/EcoSIS/ecosml-webapp/issues/new/choose" target="_blank" tabindex="${this.anchorTabIndex}">
      <iron-icon icon="bug-report"></iron-icon> 
      <span>Report Issue</span>
    </a>
  </div>
  <div class="main-content" ?open-menu="${this.openMenu}">
    <ecosis-search-header></ecosis-search-header>
    <iron-pages 
      selected-attribute="active"
      attr-for-selected="page" 
      selected="${this.page}">
      <app-page-home page="home"></app-page-home>
      <app-page-search page="search"></app-page-search>
    </iron-pages>
  </div>
</div>



`;}