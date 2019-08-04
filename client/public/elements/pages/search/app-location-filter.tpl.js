import { html } from 'lit-element';
import leafletCss from "leaflet/dist/leaflet.css"

export default function render() { 
return html`

<style>${leafletCss}</style>
<style>
  :host {
    display: block;
  }
  #map {
    height: 350px;
  }

  .info {
    display: flex;
    margin: 10px 20px 20px 20px;
    line-height: 26px;
    text-align: center;
    align-items: center;
  }

  .info > div {
    flex: 1;
  }

  .matches {
    text-align: center;
  }

  .count {
    background-color: var(--default-secondary-color);
    color: white;
    font-size: 64px;
    line-height: 76px;
    border-radius: 60px;
    padding: 10px 30px;
    margin-top: 15px;
    display: inline-block;
  }

  .title {
    color: var(--default-secondary-color);
    font-size: 18px;
    margin-top: 15px;
  }

  .warn {
    font-size: 12px;
    color: var(--secondary-text-color);
    margin: 5px 10px;
    text-align: center;
  }

  .btns {
    display: flex;
    margin: 10px;
  }

  .break {
    margin-top: 10px;
    border-top: 1px solid var(--dark-background-color);
  }

  /* paper-button[cancel] {
    border-top: 1px solid var(--extra-dark-background-color);
    border-left: 1px solid var(--extra-dark-background-color);
    border-right: 1px solid var(--extra-dark-background-color);
  } */

  paper-button[locate], paper-button[set] {
    background-color: var(--light-secondary-color);
    color: white;
  }

  /* paper-button[set] {
    background-color: var(--default-primary-color);
  } */
</style>  


<div class="warn">*Datasets without geographic location information will not be included in your search results when the geographic filter is applied.</div>
<div id="map"></div>

<div class="info">
  <div>
    <div style="display: flex">
      <div style="flex: 1">
        <div class="title">Latitude</div>
        <div>${this.latitude}</div>
      </div>
      <div style="flex: 1">
        <div class="title">Longitude</div>
        <div>${this.longitude}</div>
      </div>
    </div>

    <div class="title">Radius</div>
    <div>${this.radius}</div>
  </div>
  <div class="matches">
    <div class="title">Packages</div>
    <div><span class="count">${this.matches}</span></div>
  </div>
</div>

<div class="break"></div>

<div class="btns">
  <div style="flex:1">
    <paper-button cancel @click="${this.close}">Cancel</paper-button>
  </div>
  <div>
    <paper-button locate @click="${this._onLocateClicked}">Locate Me</paper-button>
    <paper-button set @click="${this._onSetFilterClicked}">Set Filter</paper-button>
  </div>
</div>
`;}