import { html } from 'lit-element';

export default function render() { 
return html`

<style>
  :host {
    display: block;
  }

  iron-pages {
    will-change: transition;
    transform: translate(0px, 0px);
    transition: transform 250ms ease-out;
  }

  iron-pages[open-menu] {
    transform: translate(-150px, 0px);
  }

  .menu {
    will-change: transition;
    transition: transform 250ms ease-out;
    transform: translate(150px, 0px);
    z-index: 0;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 150px;
    background: white;
    box-shadow: 0 0 5px #ccc inset;
    display: flex;
    flex-direction: column;
    align-items: center;
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

<app-header @open-menu="${this._onOpenMenu}"></app-header>
<div style="position: relative">
  <div class="menu" ?open-menu="${this.openMenu}">
    <a href="/">
      <div>
        <iron-icon icon="home"></iron-icon> 
      </div>
      <span>Home</span>
    </a>
    <a href="/search" >
      <iron-icon icon="search"></iron-icon> 
      <span>Search</span>
    </a>
    <a href="https://data.ecosis.org" target="_blank" hidden$="[[!loggedIn]]">
      <iron-icon icon="create"></iron-icon> 
      <span>Create/Edit</span>
    </a>
    <a href="https://ecosml.org" target="_blank" hidden$="[[!loggedIn]]">
      <iron-icon icon="code"></iron-icon> 
      <span>Models</span>
    </a>
    <a href="https://github.com/EcoSIS/ecosml-webapp/issues/new/choose" target="_blank">
      <iron-icon icon="bug-report"></iron-icon> 
      <span>Report Issue</span>
    </a>
  </div>
  <iron-pages 
    ?open-menu="${this.openMenu}"
    selected-attribute="active"
    attr-for-selected="page" 
    selected="${this.page}">
    <app-page-home page="home"></app-page-home>
  </iron-pages>
</div>



`;}