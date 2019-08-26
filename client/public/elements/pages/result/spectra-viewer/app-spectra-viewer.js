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
      googleChartStyles : {type: Array},
      packageTitle : {type: String},
      loading : {type: Boolean},

      freezeAxis : {type: Boolean},

      // wavelength filter
      minWavelength : {type: Number},
      maxWavelength : {type: Number},
      absMinWavelength : {type: Number},
      absMaxWavelength : {type: Number},

      // reflectance filter
      minReflectance : {type: Number},
      maxReflectance : {type: Number},
      absMinReflectance : {type: Number},
      absMaxReflectance : {type: Number},
      yAxisLabel : {type: Boolean},

      // species filters
      speciesFilters : {type: Array},
      filterCommonName : {type: Array},
      filterSpecies : {type: Array},
      filterGenus : {type: Array},
      selectedSpeciesFilter : {type: Array},

      // stats
      statsMode : {type: Boolean}
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
    this.googleChartStyles = [];
    
    this.minWavelength = 0;
    this.maxWavelength = 0;
    this.absMinWavelength = 0;
    this.absMaxWavelength = 0;

    this.speciesFilters = [];
    this.filterCommonName = [];
    this.filterSpecies = [];
    this.filterGenus = [];

    this.yAxisLabel = 'Y Axis';
    this.minReflectance = 0;
    this.maxReflectance = 0;
    this.absMinReflectance = 0;
    this.absMaxReflectance = 0;
    this.freezeAxis = false;

    this.statsMode = false;

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
    this.chartEles = Array.from(this.shadowRoot.querySelectorAll('.chart'));
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
    this.filterCommonName.sort();
    if( this.filterCommonName.length ) this.speciesFilters.push('Common Name');
    this.filterSpecies = this.pkg['Latin Species'] || [];
    this.filterSpecies.sort();
    if( this.filterSpecies.length ) this.speciesFilters.push('Latin Species');
    this.filterGenus = this.pkg['Latin Genus'] || [];
    this.filterGenus.sort();
    if( this.filterGenus.length ) this.speciesFilters.push('Latin Genus');
    if( this.speciesFilters.length ) this.speciesFilters.unshift('');
    this.selectedSpeciesFilter = '';

    this.freezeAxis = false;
    this.currentIndex = 0;
    this.totalSpectraCount = this.pkg.ecosis.spectra_count || 0;
    this.filters = [];
    this.statsMode = false;

    await this.querySpectra();
  }

  querySpectra() {
    if( this.statsMode ) return this._queryStats();
    else this._querySpectra()
  }

  /**
   * @method queryStats
   * @description set the filters and current index, then call
   * this function to load spectra from server of cache
   */
  async _queryStats() {
    let query = {
      filters: this.filters
    };

    let qstr = JSON.stringify(query);
    if( this.smqstr === qstr ) {
      this.redraw();
      return;
    }
    this.smqstr = qstr;

    this.loading = true;
    let e = await this.SpectraModel.stats(query, this.packageId);
    console.log(e);
    this.loading = false;
    console.log(this.loading);

    if( e.state === 'error' ) {
      return alert(e.error.message);
    }
    if( e.state !== 'loaded' ) return;

    let stats = [], v, tooltip, type;
    for( let ref in e.payload ) {
      v = e.payload[ref];
      tooltip = '<div style="padding:5px">';
      for( let type in v ) tooltip += '<b>'+type+'</b>: '+v[type].toFixed(5)+'<br />';
      tooltip += '</div>';

      stats.push([parseFloat(ref), v.avg, tooltip, v.min, v.max]);
    } 

    this.renderStats(stats);
  }

  /**
   * @method _querySpectra
   * @description set the filters and current index, then call
   * this function to load spectra from server of cache
   */
  async _querySpectra() {
    let query = {
      filters: this.filters,
      page: this.currentIndex,
      itemsPerPage : 1
    };

    let qstr = JSON.stringify(query);
    if( this.qstr === qstr ) {
      this.redraw();
      return;
    }
    this.qstr = qstr;

    this.loading = true;
    let e = await this.SpectraModel.search(query, this.packageId);
    this.loading = false;

    if( e.state === 'error' ) {
      return alert(e.error.message);
    }
    if( e.state !== 'loaded' ) return;

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

    if( !this._googleCssInjected ) {
      this.googleChartStyles = Array.from(document.querySelectorAll('head link[rel="stylesheet"]'))
        .filter(ele => ele.href.match(/www.gstatic.com\/charts/))
        .map(ele => ele.href);
      this._googleCssInjected = true;
    }

    if( !this.chart ) {
      this.chart = new google.visualization.LineChart(this.chartEle);
    }

    this.metadata = [];
    this.ecosisMetadata = [];
    this.wavelengths = [];
    this.allWavelengths = [];

    let absMinW = Number.MAX_VALUE;
    let absMaxW = Number.MIN_VALUE;
    let absMinR = Number.MAX_VALUE;
    let absMaxR = Number.MIN_VALUE;

    for( let key in spectra ) {
      if( key === 'datapoints' ) {
        for( let w in spectra.datapoints ) {
          let fw = parseFloat(w);
          let fv = parseFloat(spectra.datapoints[w]);

          if( fw < absMinW ) absMinW = fw;
          if( fw > absMaxW ) absMaxW = fw;

          if( fv < absMinR ) absMinR = fv;
          if( fv > absMaxR ) absMaxR = fv;

          this.allWavelengths.push([fw, fv]);
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

    if( !this.freezeAxis ) {
      this.minReflectance = absMinR;
      this.maxReflectance = absMaxR;
    }
    this.absMinReflectance = absMinR;
    this.absMaxReflectance = absMaxR;
    this.updateChartOptions();

    if( !this.freezeAxis ) {
      this.maxWavelength = absMaxW;
      this.minWavelength = absMinW;
    }
    this.absMaxWavelength = absMaxW;
    this.absMinWavelength = absMinW;
    this.filterWavelenths();

    let mc1 = [];
    let mc2 = [];
    this.metadata.forEach((item, i) => {
      if( i % 2 === 0 ) mc1.push(item);
      else mc2.push(item);
    });
    this.mc1 = mc1;
    this.mc2 = mc2;
    
    this.redraw();
  }

  renderStats(data) {
    console.log(data);
    this.allWavelengths = data;
    this.allWavelengths.sort((a, b) => {
      if( a[0] > b[0] ) return 1;
      if( a[0] < b[0] ) return -1;
      return 0;
    });

    let absMinW = Number.MAX_VALUE;
    let absMaxW = Number.MIN_VALUE;
    let absMinR = Number.MAX_VALUE;
    let absMaxR = Number.MIN_VALUE;

    for( let row of data ) {
      if( row[0] < absMinW ) absMinW = row[0];
      if( row[0] > absMaxW ) absMaxW = row[0];

      if( row[3] < absMinR ) absMinR = row[3];
      if( row[4] > absMaxR ) absMaxR = row[4];
    }

    if( !this.freezeAxis ) {
      this.minReflectance = absMinR;
      this.maxReflectance = absMaxR;
    }
    this.absMinReflectance = absMinR;
    this.absMaxReflectance = absMaxR;
    this.updateChartOptions();

    if( !this.freezeAxis ) {
      this.maxWavelength = absMaxW;
      this.minWavelength = absMinW;
    }
    this.absMaxWavelength = absMaxW;
    this.absMinWavelength = absMinW;
    this.filterWavelenths();
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
    this.chartEles.forEach(ele => ele.style.width = chartSize+'px');

    requestAnimationFrame(() => this.chart.draw(this.chartData, this.chartOptions));
  }

  /**
   * @method updateChartOptions
   * @description update the chart options object.  Mostly used to change 
   * froozen y-axis values;
   */
  updateChartOptions() {
    let opts = {
      legend: { position: 'none' },
      series: {
        0: { color: '#4db6ac' },
        1: { color: '#64b5f6' },
        2: { color: '#2286c3' }
      },
      vAxis : {},
      hAxis : {},
      tooltip: {isHtml: true}
    };

    if( this.minReflectance !== this.absMinReflectance || this.maxReflectance !== this.absMaxReflectance ) {
      opts.vAxis.viewWindow = {
        min : this.minReflectance,
        max : this.maxReflectance
      }
    }

    let label = '';
    if( this.pkg['Measurement Quantity'] && this.pkg['Measurement Quantity'].length === 1  ) {
      label = this.pkg['Measurement Quantity'][0];
    }
    if( this.pkg['Measurement Units'] && this.pkg['Measurement Units'].length === 1 ) {
      label += ' ('+this.pkg['Measurement Units'][0]+')';
    }
    opts.vAxis.title = label;
    this.yAxisLabel = label || 'Y Axis';

    if( this.pkg['Wavelength Units'] && this.pkg['Wavelength Units'].length === 1  ) {
      label = this.pkg['Wavelength Units'][0];
      if( label !== 'other' ) {
        opts.hAxis.title = 'Wavelength ('+label+')';
      } else if( this.pkg['Wavelength Units Other'] && this.pkg['Wavelength Units Other'].length === 1  ) {
        opts.hAxis.title = 'Wavelength ('+this.pkg['Wavelength Units Other'][0]+')';
      }
    }

    this.chartOptions = opts;
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
      .map(row => {
        row = row.slice(0);
        row[0] = row[0]+'';
        return row;
      });
    
    if( this.statsMode ) {
      // this.wavelengths.unshift(['Wavelength', 'Reflectance']);
      this.chartData = new google.visualization.DataTable();
      this.chartData.addColumn('string', 'Wavelength');
      this.chartData.addColumn('number', 'Average');
      // A column for custom tooltip content
      this.chartData.addColumn({id: 'tooltip', type: 'string', role: 'tooltip','p': {'html': true}});
      this.chartData.addColumn('number', 'Min');
      this.chartData.addColumn('number', 'Max');
      this.chartData.addRows(this.wavelengths);
    } else {
      this.wavelengths.unshift(['Wavelength', 'Reflectance']);
      this.chartData = google.visualization.arrayToDataTable(this.wavelengths);
    }
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
    if( this.selectedSpeciesFilter ) {
      let value = '/^'+this.pkg[this.selectedSpeciesFilter][0]+'$/';
      this.filters = [{[this.selectedSpeciesFilter]: value}];
    } else {
      this.filters = [];
    }
    this.currentIndex = 0;
    this.querySpectra();
  }

  /**
   * @method _onSelectSpeciesValueChange
   * @description bound to specific species filter value input
   */
  _onSelectSpeciesValueChange(e) {
    let value = e.currentTarget.value;
    this.filters = [{[this.selectedSpeciesFilter]: '/^'+value+'$/'}];
    this.currentIndex = 0;
    this.querySpectra();
  }

  /**
   * @method _onReflectanceFilterChange
   * @description bound to wavelengths min-max filter element change event
   */
  _onReflectanceFilterChange(e) {
    this.minReflectance = e.detail.min;
    this.maxReflectance = e.detail.max;
    this.updateChartOptions();
    this.redraw();
  }

  /**
   * @method _toggleFreezeAxis
   * @description bound to checkbox click event.  toggle the freezing of the axis
   */
  _toggleFreezeAxis() {
    this.freezeAxis = !this.freezeAxis;
    if( !this.freezeAxis ) {
      this.minReflectance = this.absMinReflectance;
      this.maxReflectance = this.absMaxReflectance;
      this.minWavelength = this.absMinWavelength;
      this.maxWavelength = this.absMaxWavelength;
    }
    this.filterWavelenths();
    this.updateChartOptions();
    this.redraw();
  }

  _toggleStatsMode() {
    this.statsMode = !this.statsMode;
    this.qstr = '';
    this.smqstr = '';
    this.querySpectra();
  }

  _onResetClicked() {
    this.freezeAxis = false;
    this.minReflectance = this.absMinReflectance;
    this.maxReflectance = this.absMaxReflectance;
    this.minWavelength = this.absMinWavelength;
    this.maxWavelength = this.absMaxWavelength;
    this.currentIndex = 0;
    this.selectedSpeciesFilter = '';
    this.filters = [];
    this.statsMode = [];
    this.querySpectra();
  }

}

customElements.define('app-spectra-viewer', AppSpectraViewer);
