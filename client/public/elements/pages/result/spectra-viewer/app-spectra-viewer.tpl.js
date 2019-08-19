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
    height: 400px;
    flex: 1;
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

  .metadata-layout {
    display: flex;
    justify-content: center;
  }
  .metadata-layout div {
    max-width: 800px;
    width: 100%;
  }

  .metadata-item {
    display: flex;
  }
  .metadata-item div {
    flex: 0.5;
  }

  .layout {
    display: flex;
    position: relative;
  }

  .filters-border {
    border-radius: 0 3px 3px 0;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    border-right: 1px solid #ddd;
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

  iron-icon[icon="filter-list"] {
    vertical-align: text-bottom;
  }

  .chart-main-panel {
    padding-right: 0 !important;
    padding-left: 0 !important;
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

Spectra Viewers

<div class="layout">
  <div class="filters-background" ?open="${this.mobileFiltersOpen}"></div>
  <div class="filters" ?open="${this.mobileFiltersOpen}">
    <div class="filters-title">
      <div style="flex: 1"><iron-icon icon="filter-list"></iron-icon> Filters</div>
      <paper-icon-button @click="${this._toggleMobileFilters}" icon="close"></paper-icon-button>
    </div>

    <div class="filters-border">
      <div>
        filters
      </div>
    </div>
  </div>

  <div style="flex: 1">

    <div class="root">
      <div class="main-panel chart-main-panel">
        <div style="text-align:center">
          ${this.currentIndex+1} of ${this.currentSearchCount}
        </div>
        <div class="chart-layout">
          <div class="btn-outer">
            <paper-icon-button 
              icon="arrow-back"
              style="left: 10px;"
              @click="${this._onPreviousClicked}">
            </paper-icon-button>
          </div>
          <div id="chart"></div>
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
        <h2>Metadata</h2>
        <div class="metadata-layout">
          <div>
            ${this.metadata.map(item => html`
              <div class="metadata-item">
                <div>${item.key}</div>
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