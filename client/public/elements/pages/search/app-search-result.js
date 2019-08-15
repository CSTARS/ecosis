import { LitElement, html } from 'lit-element';
import render from "./app-search-result.tpl.js"
import clone from "clone"

const DISPLAY_FILTERS = ['Theme', 'Target Type', 'Common Name'];

export default class AppSearchResult extends Mixin(LitElement)
  .with(LitCorkUtils) {

  static get properties() {
    return {
      package : {type: Object},
      organizationLink : {type: String},
      filters : {type: Array},
      shortDescription : {type: String}
    }
  }

  constructor() {
    super();

    this.render = render.bind(this);
    this._injectModel('PackageModel');

    this.package = {};
    this.organizationLink = '';
    this.filters = [];
    this.shortDescription = '';
  }

  createRenderRoot() {
    return super.createRenderRoot();
  }

  updated(oldValues) {
    if( oldValues.has('package') ) {
      this._renderOrgLink();
      this._renderFilters();
      this._renderDescription();
    }
  }

  _renderDescription() {
    if( this.package.ecosis.description < 300) {
      this.shortDescription = this.package.ecosis.description;
    } else {
      this.shortDescription = this.package.ecosis.description.substr(0, 297)+'...';
    }
  }

  _renderOrgLink() {
    let q = this.PackageModel.utils.getDefaultSearch();
    q.filters.push({'ecosis.organization': this.package.ecosis.organization});
    this.organizationLink = this.PackageModel.utils.getUrlPathFromQuery(q);
  }

  _renderFilters() {
    this.filters = DISPLAY_FILTERS.map(filterName => {
      if( !this.package[filterName] ) return null;

      let len = this.package[filterName].length;
      if( len > 5 ) len = 5;

      let filter = {
        title : filterName,
        items : clone(this.package[filterName])
          .splice(0, 5)
          .map((filter, i) => {
            let q = this.PackageModel.utils.getDefaultSearch();
            q.filters.push({[filterName]: filter});
            let link = this.PackageModel.utils.getUrlPathFromQuery(q);
            return html`<a href="${link}" class="filter">${filter}</a>${i < len-1 ? ',' : ''} `;
          })
      }
      if( len > 5 ) {
        filter.items.push(html`<span>...</span>`);
      }

      return filter;
    })
    .filter(filter => filter !== null);
  }

}

customElements.define('app-search-result', AppSearchResult);
