import { html } from 'lit-element';
import {litCss, sharedStylesHtml} from 'ecosis-client-commons'

export default function render() { 
return html`

${litCss(sharedStylesHtml)}
<style>
  :host {
    display: block;
    margin-bottom: 50px;
  }

  h2 {
    margin: 0;
    line-height: 28px;
  }

  h2 a {
    color: var(--default-primary-color) !important;
  }

  .organization {
    font-style: italic;
    font-size: 18px;
    font-weight: bold;
  }

  .metadata-layout {
    display: flex;
  }

  .metadata-layout .description{
    flex: .666;
    padding-right: 5px;
    line-height: 18px;
  }
  .metadata-layout .filters{
    flex: .333;
    padding-left: 10px;
  }

  .filter-title {
    font-weight: bold;
    line-height: 14px;
  }

  .filter-group {
    margin-bottom: 5px;
    line-height: 22px;
  }

  .filter-filters {
    margin-bottom: 15px;
  }

  .filter {
    font-style: italic;
  }
</style>  

<h2 class="uheader green"><a href="/package/${this.package.ecosis.package_name}">${this.package.ecosis.package_title}</a></h2>
<div class="organization"><a href="${this.organizationLink}">${this.package.ecosis.organization}</a></div>

<div class="metadata-layout">
  <div class="description">
    ${this.shortDescription}
  </div>
  <div class="filters">
    ${this.filters.map(filter => {
      return html`
      <div class="filter-group">
        <div class="filter-title">${filter.title}</div>
        <div class="filter-filters">${filter.items}</div>
      </div>`
    })}
  </div>
</div>

`;}