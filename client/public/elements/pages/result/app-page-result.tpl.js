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
  <app-spectra-viewer view="viewer"></app-spectra-viewer>
</iron-pages>

<div class="root">
  <div style="padding: 75px 15px 40px 15px">
    <div itemtype="http://schema.org/Organization" itemprop="provider">
      <h2 itemprop="name" style="margin-bottom: 0px">EcoSIS</h2>
      <div class="help-block" style="margin-bottom: 0px" itemprop="description">Ecosystem Spectral Information System</div>
      <div>
        <a href="https://ecosis.org" itemprop="url" highlight>https://ecosis.org</a> |
        <a href="http://cstars.github.io/ecosis/" target="_blank" highlight>EcoSIS API Documentation</a> |
        <a href="mailto:info@ecosis.org" itemprop="email" highlight>info@ecosis.org</a> |
        <a href="mailto:help@ecosis.org" highlight>help@ecosis.org</a>

      </div>
    </div>
  </div>
</div>
`;}