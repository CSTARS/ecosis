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

  paper-icon-button[chart-nav] {
    background-color: var(--light-primary-color);
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

  .filter-header {
    font-size: 18px;
    padding: 15px 0 0 5px;
    color: var(--default-primary-color);
    font-weight: bold;
  }

  .filter-panel {
    padding: 0 10px 15px 10px;
    border-bottom: 1px solid #ddd;
  }

  .filter-panel:last-child {
    border-bottom: none;
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

  select {
    box-sizing: border-box;
    width: 100%;
    display: block;
  }

  .help {
    font-size: 14px;
    font-style: italic;
    color: var(--text-primary-color);
  }

  paper-button[reset] {
    margin: 8px;
    display: block;
    color: var(--light-primary-color);
    text-align: center;
    font-weight: bold;
    border: 1px solid var(--light-primary-color);
  }

  @keyframes slidein {
    from {
      left: -260px;
    }
    to {
      left: 0px;
    }
  }

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
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
        <div>
          <paper-button reset @click="${this._onResetClicked}">Reset</paper-button>
        </div>
        
        <div class="filter-panel">
          <div class="filter-header">
            <input id="freeze" type="checkbox" @click="${this._toggleFreezeAxis}" .checked="${this.freezeAxis}" />
            <label for="freeze">Freeze Axis</label>
          </div>
          <div class="help" style="padding-left: 5px">
            Keep X/Y axis filters as you navigate spectra.
          </div>
        </div>

        <div class="filter-panel">
          <div class="filter-header">Wavelength</div>
          <app-min-max-input 
            @range-value-change="${this._onWavelengthFilterChange}"
            .min=${this.minWavelength}
            .max=${this.maxWavelength}
            abs-max="${this.absMaxWavelength}"
            abs-min="${this.absMinWavelength}">
          </app-min-max-input>
        </div>

        <div class="filter-panel">
          <div class="filter-header">${this.yAxisLabel}</div>
          <app-min-max-input 
            @range-value-change="${this._onReflectanceFilterChange}"
            .min=${this.minReflectance}
            .max=${this.maxReflectance}
            abs-max="${this.absMaxReflectance}"
            abs-min="${this.absMinReflectance}">
          </app-min-max-input>
        </div>

        <div ?hidden="${!this.speciesFilters.length}" class="filter-panel" style="margin-right: 5px">
          <div class="filter-header">Species</div>
          <div>
            <select @change="${this._onSelectSpeciesFilterChange}" .value="${this.selectedSpeciesFilter}">
              ${this.speciesFilters.map(opt => html`<option value="${opt}">${opt}</option>`)}
            </select>
          </div>
          <iron-pages
            attr-for-selected="filter" 
            selected="${this.selectedSpeciesFilter}">
            <div filter="Common Name">
              <select @change="${this._onSelectSpeciesValueChange}">
                ${this.filterCommonName.map(opt => html`<option value="${opt}">${opt}</option>`)}
              </select>
            </div>
            <div filter="Latin Species">
              <select @change="${this._onSelectSpeciesValueChange}">
                ${this.filterSpecies.map(opt => html`<option value="${opt}">${opt}</option>`)}
              </select>
            </div>
            <div filter="Latin Genus">
              <select @change="${this._onSelectSpeciesValueChange}">
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

        <div style="display: flex; align-items: center">
          <paper-icon-button chart-nav
            icon="arrow-back"
            style="left: 10px;"
            @click="${this._onPreviousClicked}">
          </paper-icon-button>
          <div style="text-align:center; flex: 1">
            Spectra ${this.currentIndex+1} of ${this.currentSearchCount}
          </div>
          <paper-icon-button chart-nav
            icon="arrow-forward"
            style="right: 10px;"
            @click="${this._onNextClicked}">
          </paper-icon-button>
        </div>

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
    </div>

    <div class="root">
      <div class="main-panel">
        <h2 class="uheader lightblue">Metadata</h2>
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