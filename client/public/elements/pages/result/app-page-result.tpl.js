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

  h2, h3 {
    margin-top: 0;
  }

  h2.top-pad {
    margin-top: 25px;
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

  .org-large img {
    width: 128px;
    margin-right: 15px;
  }

  .org-small img {
    width: 64px;
    margin-right: 15px;
  }

  .org-small {
    display: none;
  }
  .org-large {
    display: flex;
  }

  .row {
    display: flex;
  }

  .row > div {
    flex: 1;
  }

  .row table {
    width: 100%
  }

  .row table td:nth-child(3) {
    text-align: right;
  }

  .description {
    margin: 15px 0;
  }

  .spectra-count {
    font-weight: bold;
  }


  @media(max-width: 768px) {
    .row {
      display: block;
    }
  }

  @media(max-width: 768px) {
    .org-small {
      display: block;
    }
    .org-large {
      display: none;
    }
  }
</style>

<div class="root">
  <h1>${this.title}</h1>
</div>


<div class="root">
  <div class="main-panel">
    <div class="keywords">${this._createHtmlLinks('Keyword', this.keywords, v => '#'+v)}</div>
    <div class="description">${this.description}</div>
    <div>Spectra Count: <span class="spectra-count">${this.spectraCount} <span>${this.spectraWavelengths}</span></span></div>
  </div>
</div>

<div ?hidden="${!this.organizationName}" class="root">
  <div class="main-panel">
    <h2 class="uheader green" style="margin-bottom: 25px;">Organization</h2>
    <div>
      <div class="org-large">
        <div>
          <img src="${this.organizationImgUrl}" />
        </div>
        <div style="flex:1; padding-left: 15px">
          <h3>${this._createHtmlLink('ecosis.organization_id', this.organizationId, this.organizationName)}</h3>
          <div>${this.organizationDescription}</div>
        </div>
      </div>

      <div class="org-small">
        <div style="display: flex; align-items: center; padding-bottom: 25px;">
          <img src="${this.organizationImgUrl}" />
          <h3 style="margin:0">${this._createHtmlLink('ecosis.organization_id', this.organizationId, this.organizationName)}</h3>
        </div>
        <div>${this.organizationDescription}</div>
      </div>
    </div>
  </div>
</div>

<div ?hidden="${!this.organizationName}" class="root">
  <div class="main-panel">

    <div class="row">
      <div>
        <h2 class="uheader blue">Measurement</h2>
        <table>
          <tr>
            <td>Acquisition Method</td>
            <td>${this._createHtmlLinks('Acquisition Method', this.acquisitionMethod)}</td>
            <td><paper-icon-button icon="info"></paper-icon-button></td>
          </tr>
          <tr>
            <td>Sample Platform</td>
            <td>${this._createHtmlLinks('Sample Platform', this.samplePlatform)}</td>
            <td><paper-icon-button icon="info"></paper-icon-button></td>
          </tr>
          <tr>
            <td>Measurement Venue</td>
            <td>${this._createHtmlLinks('Measurement Venue', this.measurementVenue)}</td>
            <td><paper-icon-button icon="info"></paper-icon-button></td>
          </tr>
          <tr>
            <td>Target Type</td>
            <td>${this._createHtmlLinks('Target Type', this.targetType)}</td>
            <td><paper-icon-button icon="info"></paper-icon-button></td>
          </tr>
          <tr>
            <td>Measurement Quantity</td>
            <td>${this._createHtmlLinks('Measurement Quantity', this.measurementQuantity)}</td>
            <td><paper-icon-button icon="info"></paper-icon-button></td>
          </tr>
          <tr>
            <td>Index Name</td>
            <td>${this._createHtmlLinks('Index Name', this.indexName)}</td>
            <td><paper-icon-button icon="info"></paper-icon-button></td>
          </tr>
          <tr>
            <td>Target Status</td>
            <td>${this._createHtmlLinks('Target Status', this.targetStatus)}</td>
            <td><paper-icon-button icon="info"></paper-icon-button></td>
          </tr>
          <tr>
            <td>Light Source</td>
            <td>${this._createHtmlLinks('Light Source', this.lightSource)}</td>
            <td><paper-icon-button icon="info"></paper-icon-button></td>
          </tr>
          <tr>
            <td>Light Source Specifications</td>
            <td>${this.lightSourceSpecifications}</td>
            <td><paper-icon-button icon="info"></paper-icon-button></td>
          </tr>
          <tr>
            <td>Foreoptic Type</td>
            <td>${this._createHtmlLinks('Foreoptic Type', this.foreopticType)}</td>
            <td><paper-icon-button icon="info"></paper-icon-button></td>
          </tr>
          <tr>
            <td>Foreoptic Field of View</td>
            <td>${this._createHtmlLinks('Foreoptic Field of View', this.foreopticFieldOfView)}</td>
            <td><paper-icon-button icon="info"></paper-icon-button></td>
          </tr>
          <tr>
            <td>Foreoptic Specifications</td>
            <td>${this.foreopticSpecifications}</td>
            <td><paper-icon-button icon="info"></paper-icon-button></td>
          </tr>
        </table>
      </div>
      <div>
        <h2 class="uheader lightblue">Theme</h2>
        <table>
          <tr>
            <td>Theme</td>
            <td>${this._createHtmlLinks('Theme', this.theme)}</td>
            <td><paper-icon-button icon="info"></paper-icon-button></td>
          </tr>
          <tr>
            <td>Ecosystem Type</td>
            <td>${this._createHtmlLinks('Ecosystem Type', this.ecosystemType)}</td>
            <td><paper-icon-button icon="info"></paper-icon-button></td>
          </tr>
        </table>

        <h2 class="uheader lightgreen top-pad">Processing Information</h2>
        <table>
          <tr>
            <td>Processing Averaged</td>
            <td>${this._createHtmlLinks('Processing Averaged', this.processingAveraged)}</td>
            <td><paper-icon-button icon="info"></paper-icon-button></td>
          </tr>
          <tr>
            <td>Processing Interpolated</td>
            <td>${this._createHtmlLinks('Processing Interpolated', this.processingInterpolated)}</td>
            <td><paper-icon-button icon="info"></paper-icon-button></td>
          </tr>
          <tr>
            <td>Processing Resampled</td>
            <td>${this._createHtmlLinks('Processing Resampled', this.processingResampled)}</td>
            <td><paper-icon-button icon="info"></paper-icon-button></td>
          </tr>
          <tr>
            <td>Processing Information Details</td>
            <td>${this._createHtmlLinks('Processing Information Details', this.processingInformationDetails)}</td>
            <td><paper-icon-button icon="info"></paper-icon-button></td>
          </tr>
        </table>

        <h2 class="uheader green top-pad">Instrument</h2>
        <table>
          <tr>
            <td>Instrument Manufacturer</td>
            <td>${this._createHtmlLinks('Instrument Manufacturer', this.instrumentManufacturer)}</td>
            <td><paper-icon-button icon="info"></paper-icon-button></td>
          </tr>
          <tr>
            <td>Instrument Model</td>
            <td>${this._createHtmlLinks('Instrument Model', this.instrumentModel)}</td>
            <td><paper-icon-button icon="info"></paper-icon-button></td>
          </tr>
          <tr>
            <td>Instrument Serial Number</td>
            <td>${this.instrumentSerialNumber}</td>
            <td><paper-icon-button icon="info"></paper-icon-button></td>
          </tr>
        </table>
      </div>
    </div>

  </div>
</div>

`;}