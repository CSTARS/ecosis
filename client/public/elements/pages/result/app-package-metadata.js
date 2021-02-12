import { LitElement, html } from 'lit-element'
import render from "./app-package-metadata.tpl.js"
import clone from 'clone'
import 'leaflet'

import './app-attr-info-popup'
import openDataDef from '../../../src/lib/open-data'

export default class AppPackageMetadata extends Mixin(LitElement)
  .with(LitCorkUtils) {

  static get properties() {
    return {
      active : {type: Boolean},
      lastSearchUrl : {type: String},
      title : {type: String},
      license : {type: String},
      licenseUrl : {type: String},
      openData : {type: Boolean},
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
      instrumentSerialNumber : {type: Array},
      commonName : {type: Array},
      latinGenus : {type: Array},
      latinSpecies : {type: Array},
      usdaSymbol : {type: Array},
      vegetationType : {type: Array},
      citation : {type: String},
      datasetDoi : {type: String},
      website : {type: String},
      author : {type : Array},
      authorEmail : {type: Array},
      maintainer : {type : Array},
      maintainerEmail : {type: Array},
      fundingSource : {type : Array},
      fundingSourceGrantNumber : {type: Array},
      linkedResources : {type: Array},
      hasGeometry : {type: Boolean},
      apiLink : {type: String}
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);

    this.reset();
    this.lastSearchUrl = '';

    this._injectModel('AppStateModel', 'PackageModel', 'OrganizationModel');
  }

  _onAppStateUpdate(e) {
    if( e.page === 'search' ) {
      this.lastSearchUrl = e.location.fullpath;
    }
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

  updated(props) {
    if( props.has('hasGeometry') && this.hasGeometry ) {
      this._renderMap();
    }
    if( props.has('active') && this.active ) {
      this._updateMapSize();
    }
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
    if( !value ) return this._createNotProvidedLabel();
    let query = this.PackageModel.utils.getDefaultSearch();
    query.filters.push({[filter]: value});
    query = this.PackageModel.utils.getUrlPathFromQuery(query);
    label = label || value;
    return html`<a href="${query}" title="Filter by ${filter} = ${value}" highlight>${label}</a> `;
  }

  _createHtmlLinks(filter, values, labelFn) {
    if( !values ) return this._createNotProvidedLabel();
    if( !Array.isArray(values) ) values = [values];
    if( !labelFn ) labelFn = v => v;

    let query = this.PackageModel.utils.getDefaultSearch();

    values = values.map(value => {
      let q = clone(query);
      q.filters.push({[filter]: value});
      q = this.PackageModel.utils.getUrlPathFromQuery(q);
      return {query: q, value: labelFn(value)};
    });

    return html`<div class="links-list">${values.map((item, i) => {
      if( i < values.length-1 ) {
        return html`<a href="${item.query}" title="Filter by ${filter} = ${item.value}" highlight>${item.value}</a>, `;
      }
      return html`<a href="${item.query}" title="Filter by ${filter} = ${item.value}" highlight>${item.value}</a>`;
    })}</div> `;
  }

  _createExternalLink(urls) {
    if( !urls ) return this._createNotProvidedLabel();

    return html`<div class="links-list">${urls.map((url, i) => {
      if( !url.match(/^http/) ) {
        url = 'http://'+url;
      }

      if( i < urls.length-1 ) {
        return html`<a href="${url}" style="word-break: break-all;" target="_blank" highlight>${url}</a>, `;
      }
      return html`<a href="${url}" style="word-break: break-all;" target="_blank" highlight>${url}</a>`;
    })}</div> `;
  }

  _createEmailLink(emails) {
    if( !emails ) return this._createNotProvidedLabel();

    return html`<div class="links-list">${emails.map((email, i) => {
      if( i < emails.length-1 ) {
        return html`<a href="mailto:${email}" highlight>${email}</a>, `;
      }
      return html`<a href="mailto:${email}" highlight>${email}</a>`;
    })}</div> `;
  }

  _createHTMLText(text) {
    if( !text ) return this._createNotProvidedLabel();
    return text;
  }

  _createNotProvidedLabel() {
    return html`<span class="not-provided">Not Provided</span> `;
  }

  reset(pkg) {
    if( !pkg ) {
      pkg = {ecosis : {
        spectra_metadata_schema : {},
        linked_data : []
      }};
    }

    // clean duplicates... bug where some get through from data editor
    for( let key in pkg ) {
      if( !Array.isArray(pkg[key]) ) continue;
      pkg[key] = pkg[key].filter((item, index) => pkg[key].indexOf(item) === index);
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

    // license
    this.license = pkg.ecosis.license;
    this.openData = false;
    this.licenseUrl = '';
    debugger;
    let def = openDataDef.find(item => item.label === this.license);
    if( def ) {
      this.openData = (def.open !== false);
      this.licenseUrl = def.url;
    }
    

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

    // Species
    this.commonName = pkg['Common Name'];
    this.latinGenus = pkg['Latin Genus'];
    this.latinSpecies = pkg['Latin Species'];
    this.usdaSymbol = pkg['USDA Symbol'];
    this.vegetationType = pkg['Vegetation Type'];

    // Citation
    this.citation = pkg['Citation'];
    this._renderDatasetDoi(pkg);
    this.website = pkg['Website'];
    this.author = pkg['Author'];
    this.authorEmail = pkg['Author Email'];
    this.maintainer = pkg['Maintainer'];
    this.maintainerEmail = pkg['Maintainer Email'];
    this.fundingSource = pkg['Funding Source'];
    this.fundingSourceGrantNumber = pkg['Funding Source Grant Number'];

    // Linked Resources
    pkg.ecosis.linked_data = pkg.ecosis.linked_data.map(item => {
      if( item.url.match(/^10\./) ) item.url = 'https://doi.org/'+item.url;
      return item;
    });

    this.linkedResources = pkg.ecosis.linked_data.map(item => {
      if( !item.url.match(/^(http|ftp)/) ) {
        item.url = 'http://'+item.url;
      }
      return item;
    });

    this.hasGeometry = pkg.ecosis.geojson || pkg.ecosis.spectra_bbox_geojson ? true : false;

    this.apiLink = window.location.protocol+'//'+window.location.host+'/api/package/'+encodeURI(pkg.ecosis.package_name);
  }

  _renderDatasetDoi(pkg) {
    this.datasetDoiLabel = 'Dataset DOI';
    if( pkg.ecosis.doi ) {
      this.datasetDoiLabel = 'EcoSIS DOI';
      this.datasetDoi = html`<a href="https://doi.org/${pkg.ecosis.doi}" target="_blank">${pkg.ecosis.doi}</a>`;
    } else if( pkg['Citation DOI'] ) {
      this.datasetDoi = html`<a href="https://doi.org/${pkg['Citation DOI'][0]}" target="_blank">${pkg['Citation DOI'][0]}</a>`;
    } else {
      this.datasetDoi = this._createNotProvidedLabel();
    }
  }

  _initMap() {
    this.layers = [];
    // L.Icon.Default.imagePath = '/images';

    
    this.mapEle = this.shadowRoot.querySelector('#map');
    this.map = L.map(this.mapEle, {
      scrollWheelZoom : false,
      dragging: !L.Browser.mobile
    }).setView([42.065, -111.821], 13);
    // add an OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
  }

  _renderMap() {
    if( !this.map ) {
      this._initMap();
    } else {
      this.layers.forEach(function(layer){
        if( !layer ) return;
        this.map.removeLayer(layer);
      }.bind(this));
    }

    this.layers = [];
    if( this.package.ecosis.geojson ) {
      this.layers.push(L.geoJson(this.package.ecosis.geojson).addTo(this.map));
    }
    if( this.package.ecosis.spectra_bbox_geojson ) {
      this.layers.push(L.geoJson(this.package.ecosis.spectra_bbox_geojson).addTo(this.map));
    }

    this._updateMapSize();
  }

  _updateMapSize() {
    if( !this.map ) return;
    this.map.invalidateSize();
    setTimeout(() => {
      this.map.invalidateSize();
      if( !this.layers.length ) return;
      this.map.fitBounds(this.layers[this.layers.length-1].getBounds());
    }, 100);
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

customElements.define('app-package-metadata', AppPackageMetadata);
