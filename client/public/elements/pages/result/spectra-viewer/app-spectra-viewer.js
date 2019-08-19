import { LitElement } from 'lit-element';
import render from "./app-spectra-viewer.tpl.js"


export default class AppSpectraViewer extends Mixin(LitElement)
  .with(LitCorkUtils) {

  static get properties() {
    return {
      active : {type: Boolean},
      packageId : {type: String},
      currentSearchCount : {type: Number},
      currentIndex : {type: Number},
      metadata : {type: Array},
      mobileFiltersOpen : {type: Boolean}
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
    this.metadata = [];
    this.mobileFiltersOpen = false;

    window.addEventListener('resize', () => {
      let w = window.innerWidth;
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
      this.chart = new google.visualization.LineChart(this.shadowRoot.getElementById('chart'));
    }

    this.metadata = [];
    this.ecosisMetadata = [];
    this.wavelengths = [];

    for( let key in spectra ) {
      if( key === 'datapoints' ) {
        for( let w in spectra.datapoints ) {
          this.wavelengths.push([w, parseFloat(spectra.datapoints[w])]);
        }
      } else if( key === 'ecosis' ) {
        for( let k in spectra.ecosis ) {
          this.ecosisMetadata.push({
            key: k, value: spectra.ecosis[k]
          });
        }
      } else {
        this.metadata.push({
          key, value: spectra[key]
        })
      }
    }
    this.wavelengths.sort((a, b) => {
      if( a[0] > b[0] ) return 1;
      if( a[0] < b[0] ) return -1;
      return 0;
    });
    this.wavelengths.unshift(['Wavelength', 'Reflectance']);

    console.log(this.ecosisMetadata);
    // console.log(this.wavelengths);
    console.log(this.metadata);

    this.chartData = google.visualization.arrayToDataTable(this.wavelengths);
    this.chartOptions = {
      legend: { position: 'none' }
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
    this.chart.draw(this.chartData, this.chartOptions);
  }

  /**
   * @method _onPreviousClicked
   * @description bound to paper-icon-button click event.  Select previous
   * spectra
   */
  _onPreviousClicked() {
    this.currentIndex--;
    if( this.currentIndex === 0 ) {
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


}

customElements.define('app-spectra-viewer', AppSpectraViewer);
