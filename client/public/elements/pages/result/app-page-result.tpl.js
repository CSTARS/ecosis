import { html } from 'lit-element';

export default function render() { 
return html`

<style>
  :host {
    display: block;
  }

  .tabs {
    display: flex;
  }

  .tabs > div {
    flex: 1;
    padding: 15px 15px 13px 15px;
    text-align: center;
    cursor: pointer;
    background-color: white;
    border-bottom: 2px solid white;
  }

  .tabs > div[active] {
    border-bottom: 2px solid var(--default-primary-color);
    color: var(--default-primary-color);
    font-weight: bold;
  }

</style>  

<div class="tabs">
  <div 
    ?active="${this.view === 'metadata'}" 
    @click="${this._onTabClicked}" 
    @keyup="${this._onTabKeyup}" 
    view="metadata"
    tabindex="1">
    Metadata
  </div>
  <div 
    ?active="${this.view === 'download'}" 
    @click="${this._onTabClicked}" 
    @keyup="${this._onTabKeyup}" 
    view="download"
    tabindex="1">
    Download
  </div>
  <div 
    ?active="${this.view === 'viewer'}" 
    @click="${this._onTabClicked}"
    @keyup="${this._onTabKeyup}" 
    view="viewer"
    tabindex="1">
    Spectra Viewer
  </div>
</div>

<iron-pages 
  selected-attribute="active"
  attr-for-selected="view" 
  selected="${this.view}">
  <app-package-metadata view="metadata"></app-package-metadata>
  <app-package-download view="download"></app-package-download>
  <div view="viewer">
    Viewer
  </div>
</iron-pages>
`;}