import { html } from 'lit-element';

export default function render() { 
return html`

<style>
  :host {
    display: block;
  }

  img {
    width: 250px;
    margin-right: 15px;
  }
</style>

<h1>${this.title}</h1>
<div>${this.keywords.map(keyword => 
  this._createHtmlLink('Keyword', keyword)
)}</div>
<div>${this.description}</div>
<div>Spectra Count: ${this.spectraCount} <span>${this.spectraWavelengths}</span></div>

<div ?hidden="${!this.organizationName}">
  <h2>Organization</h2>
  <div style="display:flex">
    <div>
      <img src="${this.organizationImgUrl}" />
    </div>
    <div style="flex:1">
      <h2>${this._createHtmlLink('ecosis.organization_id', this.organizationId, this.organizationName)}</h2>
      <div>${this.organizationDescription}</div>
    </div>
  </div>
</div>

`;}