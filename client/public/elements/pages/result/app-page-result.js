import { LitElement, html } from 'lit-element';
import render from "./app-page-result.tpl.js"


export default class AppPageResult extends Mixin(LitElement)
  .with(LitCorkUtils) {

  static get properties() {
    return {
      title : {type: String},
      keywords : {type: Array},
      description : {type: String},
      spectraCount : {type: Number},
      spectraWavelengths : {type: String},
      organizationId : {type: String},
      organizationName : {type: String},
      organizationImgUrl : {type: String},
      organizationDescription : {type: String}
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);

    this.reset();

    this._injectModel('AppStateModel', 'PackageModel', 'OrganizationModel');
  }

  _onAppStateUpdate(e) {
    if( e.page !== 'package' ) return;
    if( e.location.path.length <= 1 ) return;
    this.loadPackage(e.location.path[1]);
  }

  async loadPackage(packageId) {
    this.packageId = packageId;

    this.reset();

    let state = await this.PackageModel.get(packageId);

    if( state.error ) {
      console.error(state);
      return alert(state.error.message);
    }

    this.renderPackage(state.payload);
  }

  renderPackage(pkg) {
    this.reset(pkg);
  }

  _createHtmlLink(filter, value, label) {
    if( !value ) return html`<a></a> `;
    let query = this.PackageModel.utils.getDefaultSearch();
    query.filters.push({[filter]: value});
    query = this.PackageModel.utils.getUrlPathFromQuery(query);
    label = label || value;
    return html`<a href="${query}">${label}</a> `;
  }

  reset(pkg) {
    if( !pkg ) {
      pkg = {ecosis : {
        spectra_metadata_schema : {}
      }};
    }
    this.package = pkg;

    // org info
    this.organizationId = pkg.ecosis.organization_id;
    this.organizationName = '';
    this.organizationImgUrl = '';
    this.organizationDescription = '';
    this.loadOrganization(pkg.ecosis.organization_id);

    // basic info
    this.title = pkg.ecosis.package_title || '';
    this.keywords = pkg.Keywords || [];
    this.description = pkg.ecosis.description;

    // spectra info
    this.spectraCount = pkg.ecosis.spectra_count || 0;
    this.spectraWavelengths = '';
    if( pkg.ecosis.spectra_metadata_schema.units ) {
      let units = pkg.ecosis.spectra_metadata_schema.units.Wavelength || '';
      let wavelengths = pkg.ecosis.spectra_metadata_schema.wavelengths.map(w => parseFloat(w));
      let min = Math.min(...wavelengths);
      let max = Math.max(...wavelengths);
      this.spectraWavelengths = `(${min}${units} to ${max}${units})`;
    }
  }

  async loadOrganization(id) {
    if( !id ) return;

    let state = await this.OrganizationModel.get(id);
    if( state.id !== this.package.ecosis.organization_id ) return;

    if( state.state === 'error' ) {
      return console.error(state);
    }

    this.organizationImgUrl = state.payload.image_display_url || '';
    this.organizationName = state.payload.display_name || '';
    this.organizationDescription = state.payload.description || '';
  }



}

customElements.define('app-page-result', AppPageResult);
