import { html } from 'lit-element';
import {litCss, sharedStylesHtml} from 'ecosis-client-commons'

export default function render() { 
return html`

${litCss(sharedStylesHtml)}
<style>
  :host {
    display: block;
  }
  #chart {
    width: 100%;
    height: 400px;
  }
  .chart-layout {
    display: flex;
    align-items: center;
  }
  .btn-outer {
    position: relative;
  }
  .btn-outer paper-icon-button {
    position: absolute;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 25px;
    color: white;
  }

  .metadata-item {
    word-break: break-all;
    flex: 0.5;
    margin: 8px;
    padding: 8px;
  }

  .layout {
    display: flex;
    position: relative;
  }

  .filters {
    width: 250px;
  }

  .filters-border {
    border-radius: 0 3px 3px 0;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    border-right: 1px solid #ddd;
    background-color: white;
  }

  .filters-title {
    display: flex;
    padding: 16px;
    align-items: center;
    font-weight: bold;
  }

  .filters-title paper-icon-button {
    display: none;
    color: var(--text-primary-color);
  }

  .filters-toggle {
    padding: 10px;
    display: none;
  }

  .package-title {
    padding: 16px;
    font-weight: bold;
    text-align: center;
  }

  iron-icon[icon="filter-list"] {
    vertical-align: text-bottom;
  }

  .chart-main-panel {
    padding-right: 0 !important;
    padding-left: 0 !important;
    margin-top: 1px !important;
  }

  paper-slider {
    width: 100%;
    --paper-slider-active-color : var(--light-primary-color);
    --paper-slider-secondary-color : var(--light-primary-color);
    --paper-slider-knob-color : var(--light-primary-color);
    --paper-slider-pin-color : var(--light-primary-color);
  }

  @media(max-width: 768px) {
    .filters {
      animation: 300ms slidein;
      display: none;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      overflow-y: auto;
      background-color: var(--default-background-color);
      z-index: 1000;
    }

    .filters-border {
      border: none;
      border-radius: 0;
    }

    .filters-background {
      animation: 300ms fadein;
      display: none;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      background-color: rgba(0,0,0,0.5);
      z-index: 999;
    }

    .filters[open] {
      display: block;
    }

    .filters-background[open] {
      display: block;
    }

    .filters-title {
      background-color: white;
    }

    .filters-title paper-icon-button {
      display: inline-block;
    }

    .filters-toggle {
      display: flex;
    }
  }
</style>  

<div class="layout">
  <div class="filters-background" ?open="${this.mobileFiltersOpen}"></div>
  <div class="filters" ?open="${this.mobileFiltersOpen}">
    <div class="filters-title">
      <div style="flex: 1"><iron-icon icon="filter-list"></iron-icon> Filters</div>
      <paper-icon-button @click="${this._toggleMobileFilters}" icon="close"></paper-icon-button>
    </div>

    <div class="filters-border">
      <div>
        <div>Wavelength</div>
        <div>
          <app-min-max-input 
            @range-value-change="${this._onWavelengthFilterChange}"
            abs-max="${this.absMaxWavelength}"
            abs-min="${this.absMinWavelength}">
          </app-min-max-input>
        </div>

        <div ?hidden="${!this.speciesFilters.length}">
          <div>Species</div>
          <div>
            <select @change="${this._onSelectSpeciesFilterChange}">
              ${this.speciesFilters.map(opt => html`<option value="${opt}">${opt}</option>`)}
            </select>
          </div>
          <iron-pages
            attr-for-selected="filter" 
            selected="${this.selectedSpeciesFilter}">
            <div filter="Common Name">
              <select>
                ${this.filterCommonName.map(opt => html`<option value="${opt}">${opt}</option>`)}
              </select>
            </div>
            <div filter="Latin Species">
              <select>
                ${this.filterSpecies.map(opt => html`<option value="${opt}">${opt}</option>`)}
              </select>
            </div>
            <div filter="Latin Genus">
              <select>
                ${this.filterGenus.map(opt => html`<option value="${opt}">${opt}</option>`)}
              </select>
            </div>
          </iron-pages>
        </div>
      </div>
    </div>
  </div>

  <div style="flex: 1; max-width: 1150px;">
    <div class="filters-toggle">
      <a @click="${this._toggleMobileFilters}"><iron-icon icon="filter-list"></iron-icon>  Filters</a>
    </div>
    <div class="package-title">
      ${this.packageTitle}
    </div>
    <div class="root">
      <div class="main-panel chart-main-panel">
        <div style="text-align:center">
          Spectra ${this.currentIndex+1} of ${this.currentSearchCount}
        </div>
        <div class="chart-layout">
          <div class="btn-outer">
            <paper-icon-button 
              icon="arrow-back"
              style="left: 10px;"
              @click="${this._onPreviousClicked}">
            </paper-icon-button>
          </div>
          <div style="flex: 1;">
            <div id="chart"></div>
            <div style="margin: 15px">
              <paper-slider 
                pin 
                min="1" 
                value="${this.currentIndex+1}" 
                max="${this.currentSearchCount}"
                @change="${this._onSliderValueChange}">
              </paper-slider>
            </div>
          </div>
          <div class="btn-outer">
            <paper-icon-button 
              icon="arrow-forward"
              style="right: 10px;"
              @click="${this._onNextClicked}">
            </paper-icon-button>
          </div>
        </div>
      </div>
    </div>

    <div class="root">
      <div class="main-panel">
        <h2 class="uheader lightgreen">Metadata</h2>
        <div class="metadata-layout row">
          <div>
            ${this.mc1.map(item => html`
              <div class="metadata-item">
                <div><b>${item.key}</b></div>
                <div>${item.value}</div>
              </div>
            `)}
          </div>
          <div>
            ${this.mc2.map(item => html`
              <div class="metadata-item">
                <div><b>${item.key}</b></div>
                <div>${item.value}</div>
              </div>
            `)}
          </div>
        </div>
      </div>
    </div>
  
  </div>

</div>

`;}