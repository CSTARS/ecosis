import { html } from 'lit-element';
import {litCss, sharedStylesHtml} from 'ecosis-client-commons'

export default function render() { 
return html`

${litCss(sharedStylesHtml)}
<style>
  :host {
    display: block;
  }

  h1 {
    margin: 35px 15px 0 15px;
    font-size: 28px;
  }

  .root {
    display: flex;
    justify-content: center;
  }
  .root.column {
    flex-direction: column;
  }
  .root > div {
    width: 100%;
    max-width: 1200px;
  }

  .options {
    display: flex; 
    margin-top: 15px; 
    align-items: center;
  }

  .resource-download {
    padding-top: 5px;
    padding-bottom: 15px;
    word-break: break-all;
  }

  @media(max-width: 768px) {
    h3.no-flex-top-pad {
      margin-top: 30px;
    }

    .row {
      display: block;
    }
    .row > * {
      padding: 0;
    }
  }
</style>

<div class="root">
  <h1>${this.packageTitle}</h1>
</div>

<div class="root">
  <div class="main-panel">
    <div class="row">

      <div>
        <h3 class="uheader green">Download EcoSIS dataset as a single .csv file</h3>
        <div><a href="${this.downloadLink}" target="_blank" highlight><iron-icon icon="file-download"></iron-icon> Download Dataset</a></div>
        <div class="options">
          <div><input type="checkbox" id="include-metadata" @change="${this._onMetadataInputChange}"/></div>
          <div>&nbsp;<label for="include-metadata">Include linked ancillary metadata in download</label></div>
        </div>
      </div>
      
      <div>
        <h3 class="uheader blue no-flex-top-pad">Download original dataset resources</h3>
        ${this.resources.map(resource => html`
          <div class="resource-download">
            <a href="${resource.url}" target="_blank" highlight><iron-icon icon="file-download"></iron-icon> ${resource.name}</a>
          </div>
        `)}
      </div>
    </div>

  </div>
</div>

`;}