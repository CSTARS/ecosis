import { LitElement, html } from 'lit-element'
import render from "./app-page-result.tpl.js"
import clone from "clone"


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
      organizationDescription : {type: String},
      acquisitionMethod : {type: Array},
      samplePlatform : {type: Array},
      measurementVenue : {type: Array},
      targetType : {type: Array},
      targetSource : {type: Array},
      lightSource : {type: Array},
      lightSourceSpecifications : {type: Array},
      foreopticType : {type: Array},
      foreopticFieldOfView : {type: Array},
      foreopticSpecifications : {type: Array},
      theme : {type: Array},
      processingAveraged : {type: Array},
      processingInterpolated : {type: Array},
      processingResampled : {type: Array},
      processingInformationDetails : {type: Array},
      instrumentManufacturer : {type: Array},
      instrumentModel : {type: Array},
      instrumentSerialNumber : {type: Array}
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

  /**
   * @method _createHtmlLink
   * @description render for values.  Link will be a filtered search filtering
   * by given filter/value combo.  A optional label can be based instead
   * 
   * @param {String} filter name of filter attribute
   * @param {String} value value of filter attribute
   * @param {String} label optional label for link
   * 
   * @returns {Object} lit-html template
   */
  _createHtmlLink(filter, value, label) {
    if( !value ) return html`<span>Not Provided</span> `;
    let query = this.PackageModel.utils.getDefaultSearch();
    query.filters.push({[filter]: value});
    query = this.PackageModel.utils.getUrlPathFromQuery(query);
    label = label || value;
    return html`<a href="${query}" highlight>${label}</a> `;
  }

  _createHtmlLinks(filter, values, labelFn) {
    if( !values ) return html`<span class="not-provided">Not Provided</span> `;
    if( !Array.isArray(values) ) values = [values];
    if( !labelFn ) labelFn = v => v;

    let query = this.PackageModel.utils.getDefaultSearch();

    values = values.map(value => {
      let q = clone(query);
      q.filters.push({[filter]: value});
      q = this.PackageModel.utils.getUrlPathFromQuery(q);
      return {query: q, value: labelFn(value)};
    });

    return html`${values.map((item, i) => {
      if( i < values.length-1 ) {
        return html`<a href="${item.query}" highlight>${item.value}</a>, `;
      }
      return html`<a href="${item.query}" highlight>${item.value}</a>`;
    })} `;
  }

  reset(pkg) {
    if( !pkg ) {
      pkg = {ecosis : {
        spectra_metadata_schema : {}
      }};
    }
    this.package = pkg;
    console.log(this.package);

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

    // measurement
    this.acquisitionMethod = pkg['Acquisition Method'];
    this.samplePlatform = pkg['Sample Platform'];
    this.measurementVenue = pkg['Measurement Venue'];
    this.targetType = pkg['Target Type'];
    this.measurementQuantity = pkg['Measurement Quantity'];
    this.indexName = pkg['Index Name'];
    this.measurementUnits = pkg['Measurement Units'];
    this.wavelengthUnits = pkg['Wavelength Units'];
    this.targetStatus = pkg['Target Status'];
    this.lightSource = pkg['Light Source'];
    this.lightSourceSpecifications = pkg['Light Source Specifications'];
    this.foreopticType = pkg['Foreoptic Type'];
    this.foreopticFieldOfView = pkg['Foreoptic Field of View'];
    this.foreopticSpecifications = pkg['Foreoptic Specifications'];

    // Theme
    this.theme = pkg['Theme'];
    this.ecosystemType = pkg['Ecosystem Type'];

    // Processing Information
    this.processingAveraged = pkg['Processing Averaged'];
    this.processingInterpolated = pkg['Processing Interpolated'];
    this.processingResampled = pkg['Processing Resampled'];
    this.processingInformationDetails = pkg['Processing Information Details'];

    // Instrument
    this.instrumentManufacturer = pkg['Instrument Manufacturer'];
    this.instrumentModel = pkg['Instrument Model'];
    this.instrumentSerialNumber = pkg['Instrument Serial Number'];
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
