import { html } from 'lit-element';
import {litCss, sharedStylesHtml} from 'ecosis-client-commons'

export default function render() { 
return html`

${litCss(sharedStylesHtml)}
<style>
  :host {
    display: block;
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
    padding: 10px;
    align-items: center;
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

  .location-label {
    cursor: pointer;
    display: flex;
    color: var(--default-primary-color);
    padding: 10px 0;
    font-weight: bold;
    position: relative;
    background-color: white;
    padding-left: 5px;
    border-radius: 0 0 3px 0;
  }

  @media(max-width: 768px) {
    .filters {
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

<app-popup id="locationPopup" title="Filter by Location">
  <app-location-filter></app-location-filter>
</app-popup>

<div class="layout">
  <div class="filters-background" ?open="${this.mobileFiltersOpen}"></div>
  <div class="filters" ?open="${this.mobileFiltersOpen}">
    <div class="filters-title">
      <div style="flex: 1"><iron-icon icon="filter-list"></iron-icon> Filters</div>
      <paper-icon-button @click="${this._toggleMobileFilters}" icon="close"></paper-icon-button>
    </div>

    <div class="filters-border">
      ${this.filters.map((item, index) => 
        html`<app-filter-panel 
          radius=${index === 0 ? "0 3px 0 0" : ""}
          .filter="${item.name}" 
          .values="${item.values}">
          </app-filter-panel>`
      )}
      <div>
        <div class="location-label" tabindex="2" @click="${this._onOpenLocationClicked}">Location</div>
      </div>
    </div>
  </div>

  <div style="flex: 1; max-width: 1150px;">
    <div class="filters-toggle">
      <a @click="${this._toggleMobileFilters}"><iron-icon icon="filter-list"></iron-icon>  Filters</a>
    </div>
    <div style="text-align:center">
      <app-search-pagination 
      text-mode 
      items-per-page="${this.itemsPerPage}"
      current-index="${this.currentIndex}"
      total-results="${this.total}"
      @nav="${this._onPaginationNav}">

      </app-search-pagination>
    </div>
    <div class="main-panel" ?hidden="${!this.results.length}">

      ${this.results.map(result => {
        return html`<app-search-result .package="${result}"></app-search-result>`;
      })}
    </div>
    <div ?hidden="${this.showNoResults}">
      No Search Results Found
    </div>
    <div style="text-align:center">
      <app-search-pagination
        items-per-page="${this.itemsPerPage}"
        current-index="${this.currentIndex}"
        total-results="${this.total}"
        @nav="${this._onPaginationNav}">
      </app-search-pagination>
    </div>
  </div>
</div>

`;}