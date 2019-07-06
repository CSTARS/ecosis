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
  }
</style>  

<div class="layout">
  <div>
    <div>Filters</div>
  </div>

  <div style="flex: 1">
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