import { html } from 'lit-element';
import {litCss, sharedStylesHtml} from 'ecosis-client-commons'
import leafletCss from "leaflet/dist/leaflet.css"

export default function render() { 
return html`

<style>${leafletCss}</style>
${litCss(sharedStylesHtml)}
<style>
  :host {
    display: block;
  }

  h1 {
    margin: 30px 15px 0 15px;
    font-size: 28px;
  }

  h2, h3 {
    margin-top: 0;
  }

  h2.top-pad {
    margin-top: 30px;
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

  .row table {
    width: 100%
  }

  .row table td:first-child {
    font-weight: bold;
    white-space: nowrap;
    padding-right: 5px;
  }

  .row table td:nth-child(2) {
    font-size: 14px;
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

  .links-list {
    max-height: 68px;
    overflow-y: auto;
  }

  .not-provided {
    color: var(--secondary-text-color);
  }

  .linked-resource {
    margin-bottom: 20px;
  }
  .linked-resource:last-child {
    margin-bottom: 0px;
  }
  .linked-resource > div:first-child {
    font-weight: bold;
  }

  #map {
    height: 350px;
  }

  @media(max-width: 768px) {
    h2.no-flex-top-pad {
      margin-top: 30px;
    }

    .row {
      display: block;
    }
    .row > * {
      padding: 0;
    }

    .org-small {
      display: block;
    }
    .org-large {
      display: none;
    }
  }
</style>

<div ?hidden="${!this.lastSearchUrl}" style="padding: 20px 0 0 15px;">
  <a href="${this.lastSearchUrl}">
    <iron-icon icon="arrow-back" style="vertical-align: bottom"></iron-icon>
    Back to Search
  </a>
</div>

<div class="root">
  <h1>${this.title}</h1>
</div>


<div class="root">
  <div class="main-panel">
    <div class="keywords">${this._createHtmlLinks('Keywords', this.keywords, v => '#'+v)}</div>
    <div class="description">${this.description}</div>

    <div ?hidden="${!this.openData}"><a href="https://opendefinition.org/od/2.1/en/"><img src="/assets/od_blue.png" /></a></div>
    <div>
      License: <span class="spectra-count" ?hidden="${this.licenseUrl}">${this.license}</span>
      <a class="spectra-count" ?hidden="${!this.licenseUrl}" href="${this.licenseUrl}">
        ${this.license}
      </a>
    </div>
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

<div class="root">
  <div class="main-panel">

    <div class="row">
      <div>
        <h2 class="uheader blue">Measurement</h2>
        <table>
          <tr>
            <td>Acquisition Method</td>
            <td>${this._createHtmlLinks('Acquisition Method', this.acquisitionMethod)}</td>
            <td><app-attr-info-popup filter="Acquisition Method"></app-attr-info-popup></td>
          </tr>
          <tr>
            <td>Sample Platform</td>
            <td>${this._createHtmlLinks('Sample Platform', this.samplePlatform)}</td>
            <td><app-attr-info-popup filter="Sample Platform"></app-attr-info-popup></td>
          </tr>
          <tr>
            <td>Measurement Venue</td>
            <td>${this._createHtmlLinks('Measurement Venue', this.measurementVenue)}</td>
            <td><app-attr-info-popup filter="Measurement Venue"></app-attr-info-popup></td>
          </tr>
          <tr>
            <td>Target Type</td>
            <td>${this._createHtmlLinks('Target Type', this.targetType)}</td>
            <td><app-attr-info-popup filter="Target Type"></app-attr-info-popup></td>
          </tr>
          <tr>
            <td>Measurement Quantity</td>
            <td>${this._createHtmlLinks('Measurement Quantity', this.measurementQuantity)}</td>
            <td><app-attr-info-popup filter="Measurement Quantity"></app-attr-info-popup></td>
          </tr>
          <tr>
            <td>Index Name</td>
            <td>${this._createHtmlLinks('Index Name', this.indexName)}</td>
            <td><app-attr-info-popup filter="Index Name"></app-attr-info-popup></td>
          </tr>
          <tr>
            <td>Target Status</td>
            <td>${this._createHtmlLinks('Target Status', this.targetStatus)}</td>
            <td><app-attr-info-popup filter="Target Status"></app-attr-info-popup></td>
          </tr>
          <tr>
            <td>Light Source</td>
            <td>${this._createHtmlLinks('Light Source', this.lightSource)}</td>
            <td><app-attr-info-popup filter="Light Source"></app-attr-info-popup></td>
          </tr>
          <tr>
            <td>Light Source Specifications</td>
            <td>${this._createHTMLText(this.lightSourceSpecifications)}</td>
            <td><app-attr-info-popup filter="Light Source Specifications"></app-attr-info-popup></td>
          </tr>
          <tr>
            <td>Foreoptic Type</td>
            <td>${this._createHtmlLinks('Foreoptic Type', this.foreopticType)}</td>
            <td><app-attr-info-popup filter="Foreoptic Type"></app-attr-info-popup></td>
          </tr>
          <tr>
            <td>Foreoptic Field of View</td>
            <td>${this._createHtmlLinks('Foreoptic Field of View', this.foreopticFieldOfView)}</td>
            <td><app-attr-info-popup filter=""></app-attr-info-popup></td>
          </tr>
          <tr>
            <td>Foreoptic Specifications</td>
            <td>${this._createHTMLText(this.foreopticSpecifications)}</td>
            <td><app-attr-info-popup filter="Foreoptic Specifications"></app-attr-info-popup></td>
          </tr>
        </table>
      </div>
      <div>
        <h2 class="uheader lightblue no-flex-top-pad">Theme</h2>
        <table>
          <tr>
            <td>Theme</td>
            <td>${this._createHtmlLinks('Theme', this.theme)}</td>
            <td><app-attr-info-popup filter="Theme"></app-attr-info-popup></td>
          </tr>
          <tr>
            <td>Ecosystem Type</td>
            <td>${this._createHtmlLinks('Ecosystem Type', this.ecosystemType)}</td>
            <td><app-attr-info-popup filter="Ecosystem Type"></app-attr-info-popup></td>
          </tr>
        </table>

        <h2 class="uheader lightgreen top-pad">Processing Information</h2>
        <table>
          <tr>
            <td>Processing Averaged</td>
            <td>${this._createHtmlLinks('Processing Averaged', this.processingAveraged)}</td>
            <td><app-attr-info-popup filter="Processing Averaged"></app-attr-info-popup></td>
          </tr>
          <tr>
            <td>Processing Interpolated</td>
            <td>${this._createHtmlLinks('Processing Interpolated', this.processingInterpolated)}</td>
            <td><app-attr-info-popup filter="Processing Interpolated"></app-attr-info-popup></td>
          </tr>
          <tr>
            <td>Processing Resampled</td>
            <td>${this._createHtmlLinks('Processing Resampled', this.processingResampled)}</td>
            <td><app-attr-info-popup filter="Processing Resampled"></app-attr-info-popup></td>
          </tr>
          <tr>
            <td>Processing Information Details</td>
            <td>${this._createHtmlLinks('Processing Information Details', this.processingInformationDetails)}</td>
            <td><app-attr-info-popup filter="Processing Information Details"></app-attr-info-popup></td>
          </tr>
        </table>

        <h2 class="uheader green top-pad">Instrument</h2>
        <table>
          <tr>
            <td>Instrument Manufacturer</td>
            <td>${this._createHtmlLinks('Instrument Manufacturer', this.instrumentManufacturer)}</td>
            <td><app-attr-info-popup filter="Instrument Manufacturer"></app-attr-info-popup></td>
          </tr>
          <tr>
            <td>Instrument Model</td>
            <td>${this._createHtmlLinks('Instrument Model', this.instrumentModel)}</td>
            <td><app-attr-info-popup filter="Instrument Model"></app-attr-info-popup></td>
          </tr>
          <tr>
            <td>Instrument Serial Number</td>
            <td>${this._createHTMLText(this.instrumentSerialNumber)}</td>
            <td><app-attr-info-popup filter="Instrument Serial Number"></app-attr-info-popup></td>
          </tr>
        </table>
      </div>
    </div>

  </div>
</div>

<div class="root">
  <div class="main-panel">

    <div class="row">
      <div>
        <h2 class="uheader blue">Species</h2>
        <table>
          <tr>
            <td>Common Name</td>
            <td>${this._createHtmlLinks('Common Name', this.commonName)}</td>
            <td><app-attr-info-popup filter="Common Name"></app-attr-info-popup></td>
          </tr>
          <tr>
            <td>Latin Genus</td>
            <td>${this._createHtmlLinks('Latin Genus', this.latinGenus)}</td>
            <td><app-attr-info-popup filter="Latin Genus"></app-attr-info-popup></td>
          </tr>
          <tr>
            <td>Latin Species</td>
            <td>${this._createHtmlLinks('Latin Species', this.latinSpecies)}</td>
            <td><app-attr-info-popup filter="Latin Species"></app-attr-info-popup></td>
          </tr>
          <tr>
            <td>USDA Symbol</td>
            <td>${this._createHtmlLinks('USDA Symbol', this.usdaSymbol)}</td>
            <td><app-attr-info-popup filter="USDA Symbol"></app-attr-info-popup></td>
          </tr>
          <tr>
            <td>Vegetation Type</td>
            <td>${this._createHtmlLinks('Vegetation Type', this.vegetationType)}</td>
            <td><app-attr-info-popup filter="Vegetation Type"></app-attr-info-popup></td>
          </tr>
        </table>

      </div>
      <div>

        <h2 class="uheader lightblue no-flex-top-pad">Citation</h2>
          <table>
            <tr>
              <td>Citation</td>
              <td>${this._createHTMLText(this.citation)}</td>
              <td><app-attr-info-popup filter="Citation"></app-attr-info-popup></td>
            </tr>
            <tr>
              <td>${this.datasetDoiLabel}</td>
              <td>${this.datasetDoi}</td>
              <td><app-attr-info-popup filter=""></app-attr-info-popup></td>
            </tr>
            <tr>
              <td>Website</td>
              <td>${this._createExternalLink(this.website)}</td>
              <td><app-attr-info-popup filter="Citation DOI"></app-attr-info-popup></td>
            </tr>
            <tr>
              <td>Author</td>
              <td>${this._createHtmlLinks('Author', this.author)}</td>
              <td><app-attr-info-popup filter="Author"></app-attr-info-popup></td>
            </tr>
            <tr>
              <td>Author Email</td>
              <td>${this._createEmailLink(this.authorEmail)}</td>
              <td><app-attr-info-popup filter="Author Email"></app-attr-info-popup></td>
            </tr>
            <tr>
              <td>Maintainer</td>
              <td>${this._createHtmlLinks('Maintainer', this.maintainer)}</td>
              <td><app-attr-info-popup filter="Maintainer"></app-attr-info-popup></td>
            </tr>
            <tr>
              <td>Maintainer Email</td>
              <td>${this._createEmailLink(this.maintainerEmail)}</td>
              <td><app-attr-info-popup filter="Maintainer Email"></app-attr-info-popup></td>
            </tr>
            <tr>
              <td>Funding Source</td>
              <td>${this._createHtmlLinks('Funding Source', this.fundingSource)}</td>
              <td><app-attr-info-popup filter="Funding Source"></app-attr-info-popup></td>
            </tr>
            <tr>
              <td style="white-space:normal">Funding Source Grant Number</td>
              <td>${this._createHTMLText(this.fundingSourceGrantNumber)}</td>
              <td><app-attr-info-popup filter="Funding Source Grant Number"></app-attr-info-popup></td>
            </tr>
          </table>
        </h2>

      </div>
    </div>

  </div>
</div>


<div class="root">
  <div class="main-panel">
    <h2 class="uheader lightgreen">Linked Resources</h2>
    <div ?hidden="${this.linkedResources.length}">
      ${this._createNotProvidedLabel()}
    </div>
    <div ?hidden="${!this.linkedResources.length}">
      ${this.linkedResources.map(item => html`
        <div class="linked-resource">
          <div>${item.label}</div>
          <div><a href="${item.url}" style="word-break: break-all;" target="_blank" highlight>${item.url}</a></div>
        </div>
      `)}
    </div>
  </div>
</div>


<div class="root">
  <div class="main-panel">
    <h2 class="uheader lightblue">Location</h2>
    <div ?hidden="${this.hasGeometry}">
      ${this._createNotProvidedLabel()}
    </div>
    <div ?hidden="${!this.hasGeometry}" id="map"></div>
    <div ?hidden="${!L.Browser.mobile}" class="help">
      *Use two fingers to pan
    </div>
  </div>
</div>

<div class="root">
  <div class="main-panel">
    <h2 class="uheader blue">API Link</h2>
    <div><a href="${this.apiLink}" target="_blank" highlight>${this.apiLink}</a></div>
  </div>
</div>
`;}