import { LitElement } from 'lit-element';
import render from "./app-spectra-viewer.tpl.js"

import "@polymer/paper-slider"
import "./app-min-max-input"

export default class AppSpectraViewer extends Mixin(LitElement)
  .with(LitCorkUtils) {

  static get properties() {
    return {
      active : {type: Boolean},
      packageId : {type: String},
      currentSearchCount : {type: Number},
      currentIndex : {type: Number},
      mc1 : {type: Array},
      mc2 : {type: Array},
      mobileFiltersOpen : {type: Boolean},
      packageTitle : {type: String},

      // wavelength filter
      minWavelength : {type: Number},
      maxWavelength : {type: Number},
      absMinWavelength : {type: Number},
      absMaxWavelength : {type: Number},

      // species filters
      speciesFilters : {type: Array},
      filterCommonName : {type: Array},
      filterSpecies : {type: Array},
      filterGenus : {type: Array},
      selectedSpeciesFilter : {type: Array}
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);

    this.active = false;
    this.packageId = '';
    this.initTimer = -1;
    this.redrawTimer = -1;
    this.currentIndex = 0;
    this.currentSearchCount = 0;
    this.mc1 = [];
    this.mc2 = [];
    this.mobileFiltersOpen = false;
    
    this.minWavelength = 0;
    this.maxWavelength = 0;
    this.absMinWavelength = 0;
    this.absMaxWavelength = 0;

    this.speciesFilters = [];
    this.filterCommonName = [];
    this.filterSpecies = [];
    this.filterGenus = [];

    window.addEventListener('resize', () => {
      this.windowInnerWidth = window.innerWidth;
      if( this.mobileFiltersOpen && w > 768 ) this.mobileFiltersOpen = false;

      if( !this.active ) return;
      this.redrawBuffered();
    });

    this._injectModel('GoogleModel', 'PackageModel', 'SpectraModel', 'AppStateModel');
  }

  updated(props) {
    if( props.has('active') && this.active ) {
      this.loadPackage();
    }
  }

  firstUpdated() {
    this.chartEle = this.shadowRoot.getElementById('chart');
  }

  /**
   * @method _onAppStateUpdate
   * @description bound to AppStateModel app-state-update event
   * 
   * @param {Object} e 
   */
  _onAppStateUpdate(e) {
    this.packageId = '';
    if( e.page !== 'package' ) return;
    if( e.location.path.length <= 1 ) return;
    this.packageId = e.location.path[1];
    this.loadPackage();
  }

  /**
   * @method loadPackage
   * @description after a package id is set via the state model,
   * call this function to load the package data
   */
  async loadPackage() {
    if( !this.packageId ) return;
    let state = await this.PackageModel.get(this.packageId);
    if( state.state !== 'loaded' ) return;
    this.pkg = state.payload;
    this.packageTitle = this.pkg.ecosis.package_title;

    this.speciesFilters = [];
    this.filterCommonName = this.pkg['Common Name'] || [];
    if( this.filterCommonName.length ) this.speciesFilters.push('Common Name');
    this.filterSpecies = this.pkg['Latin Species'] || [];
    if( this.filterSpecies.length ) this.speciesFilters.push('Latin Species');
    this.filterGenus = this.pkg['Latin Genus'] || [];
    if( this.filterGenus.length ) this.speciesFilters.push('Latin Genus');
    if( this.speciesFilters.length ) this.speciesFilters.unshift('');
    this.selectedSpeciesFilter = '';

    this.currentIndex = 0;
    this.totalSpectraCount = this.pkg.ecosis.spectra_count || 0;
    this.filters = [];
    this.querySpectra();
  }

  /**
   * @method querySpectra
   * @description set the filters and current index, then call
   * this function to load spectra from server of cache
   */
  async querySpectra() {
    let query = {
      filters: this.filters,
      page: this.currentIndex,
      itemsPerPage : 1
    };

    let qstr = JSON.stringify(query);
    if( this.qstr === qstr ) return;
    this.qstr = qstr;

    this.SpectraModel.search(query, this.packageId);
  }

  /**
   * @method _onSpectraSearchUpdate
   * @description bound to SpectraModel spectra-search-update event
   * 
   * @param {Object} e 
   */
  _onSpectraSearchUpdate(e) {
    if( e.state === 'loading' ) {
      return this.loading = true;
    }
    this.loading = false;
    if( e.state === 'error' ) {
      return alert(e.error.message);
    }
    if( e.payload.items.length === 0 ) {
      console.error(e);
      return alert('Failed to load spectra');
    }

    this.currentSearchCount = e.payload.total;
    this.renderSpectra(e.payload.items[0]);
  }

  /**
   * @method renderSpectra
   * @description render a spectra object from the ecosis spectra api
   * 
   * @param {Object} spectra 
   */
  async renderSpectra(spectra) {
    await this.GoogleModel.loadCharts();
    if( !this.chart ) {
      this.chart = new google.visualization.LineChart(this.chartEle);
    }

    this.metadata = [];
    this.ecosisMetadata = [];
    this.wavelengths = [];
    this.allWavelengths = [];

    let absMinW = Number.MAX_VALUE;
    let absMaxW = Number.MIN_VALUE;

    for( let key in spectra ) {
      if( key === 'datapoints' ) {
        for( let w in spectra.datapoints ) {
          let fw = parseFloat(w);
          if( fw < absMinW ) absMinW = fw;
          if( fw > absMaxW ) absMaxW = fw;

          this.allWavelengths.push([parseFloat(w), parseFloat(spectra.datapoints[w])]);
          // this.wavelengths.push([w, parseFloat(spectra.datapoints[w])]);
        }
      } else if( key === 'ecosis' ) {
        for( let k in spectra.ecosis ) {
          this.ecosisMetadata.push({
            key: k, value: spectra.ecosis[k]
          });
        }
      } else {
        if( key === '_id' ) continue;
        this.metadata.push({
          key, value: spectra[key]
        })
      }
    }
    this.allWavelengths.sort((a, b) => {
      if( a[0] > b[0] ) return 1;
      if( a[0] < b[0] ) return -1;
      return 0;
    });

    this.absMaxWavelength = absMaxW;
    this.absMinWavelength = absMinW;
    this.maxWavelength = absMaxW;
    this.minWavelength = absMinW;
    this.filterWavelenths();

    let mc1 = [];
    let mc2 = [];
    this.metadata.forEach((item, i) => {
      if( i % 2 === 0 ) mc1.push(item);
      else mc2.push(item);
    });
    this.mc1 = mc1;
    this.mc2 = mc2;

    this.chartOptions = {
      legend: { position: 'none' },
      series: {
        0: { color: '#4db6ac' }
      }
    };
    
    this.redraw();
  }

  redrawBuffered() {
    if( this.redrawTimer !== -1 ) clearTimeout(this.redrawTimer);
    
    this.redrawTimer = setTimeout(() => {
      this.redrawTimer = -1;
      this.redraw();
    }, 150);
  }

  /**
   * @method redraw
   * @description redraw the google chart.  chart, chartData and chartOptions
   * must already be set
   */
  redraw() {
    if( !this.chart || !this.chartData || !this.chartOptions ) return;

    if( !this.windowInnerWidth ) {
      this.windowInnerWidth = window.innerWidth;
    }

    let chartSize = this.windowInnerWidth > 1400 ? 1400 : this.windowInnerWidth;
    chartSize = chartSize-24;
    if( this.windowInnerWidth > 768 ) chartSize -= 250;
    else chartSize -= 12; // why?
    this.chartEle.style.width = chartSize+'px';

    this.chart.draw(this.chartData, this.chartOptions);
  }

  /**
   * @method filterWavelenths
   * @description update the wavelengths property from allWavelengths filtered
   * by minWavelength and maxWavelength
   */
  filterWavelenths() {
    this.wavelengths = this.allWavelengths
      .filter(row => {
        if( row[0] < this.minWavelength ) return false;
        if( row[0] > this.maxWavelength ) return false;
        return true;
      })
      .map(row => [row[0]+'', row[1]]);

    this.wavelengths.unshift(['Wavelength', 'Reflectance']);
    this.chartData = google.visualization.arrayToDataTable(this.wavelengths);
  }

  /**
   * @method _onWavelengthFilterChange
   * @description bound to wavelengths min-max filter element change event
   */
  _onWavelengthFilterChange(e) {
    this.minWavelength = e.detail.min;
    this.maxWavelength = e.detail.max;
    this.filterWavelenths();
    this.redraw();
  }

  /**
   * @method _onPreviousClicked
   * @description bound to paper-icon-button click event.  Select previous
   * spectra
   */
  _onPreviousClicked() {
    this.currentIndex--;
    if( this.currentIndex < 0 ) {
      this.currentIndex = this.currentSearchCount-1;
    }
    this.querySpectra();
  }

  /**
   * @method _onNextClicked
   * @description bound to paper-icon-button click event.  Select next
   * spectra
   */
  _onNextClicked() {
    this.currentIndex++;
    if( this.currentIndex === this.currentSearchCount-1 ) {
      this.currentIndex = 0;
    }
    this.querySpectra();
  }

  _toggleMobileFilters() {
    this.mobileFiltersOpen = !this.mobileFiltersOpen;
  }

  /**
   * 
   */
  _onSliderValueChange(e) {
    this.currentIndex = e.currentTarget.value-1;
    this.querySpectra();
  }

  /**
   * @method _onSelectSpeciesFilterChange
   * @description bound to species filter select box
   * this controls which species filter is shown
   */
  _onSelectSpeciesFilterChange(e) {
    this.selectedSpeciesFilter = e.currentTarget.value;
  }

}

customElements.define('app-spectra-viewer', AppSpectraViewer);
