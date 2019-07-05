import { html } from 'lit-element';

export default function render() { 
return html`

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
    <div ?hidden="${!this.results.length}">
      ${this.results.map(result => {
        return html`<div>${result.ecosis.package_title}</div>`;
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