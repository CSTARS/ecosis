import { LitElement } from 'lit-element';
import render from "./app-location-filter.tpl.js"

import "leaflet"

export default class AppLocationFilter extends Mixin(LitElement)
  .with(LitCorkUtils) {


  static get properties() {
    return {
      latitude : {type: String},
      longitude : {type: String},
      radius : {type: String},
      llmatches : {type: String},
      locateText : {type: String},
      locating : {type: Boolean}
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);

    this.r = 844906; // 525 miles
    this.llmatches = '0';
    this.latitude = '0';
    this.longitude = '0';
    this.queryName = 'geoPreview';
    this.locateText = 'Locate Me';
    this.locating = false;

    this._injectModel('AppStateModel','PackageModel');
  }

  _onOpen() {
    // if( !this.map ) return;
    this._initMap();

    // TODO: if a filter is set, zoom to it here

    this._updateRadius();

    setTimeout(() => {
      this.map.invalidateSize();
    }, 100);
    setTimeout(() => {
      this.map.invalidateSize();
    }, 500);
  }

  firstUpdated() {
    if ( !navigator.geolocation ) {
      this.shadowRoot.querySelector('paper-button[locate]').style.display = 'none';
    }
  }

  _initMap() {
    if( this.map ) return;
    this.map = L
      .map(this.shadowRoot.querySelector("#map"), {
        dragging: !L.Browser.mobile 
      })
      .setView([39.251, -97.850], 4);

    L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    this.circle = L.circle([39.251, -97.850], this.r, {
      fillColor : '#AA0000'
    }).addTo(this.map);

    this.map.on('zoomend', () => this._updateRadius());
    this.map.on('moveend', () => this._updateRadius());
  }

  async _updateRadius() {
    this.ll = this.map.getCenter();
    let ll = this.ll;

    // update radius
    var b = this.map.getBounds();
    if( b ) {
      var ll1 = L.latLng(b.getNorthEast().lat, ll.lng);
      var ll2 = L.latLng(b.getSouthWest().lat, ll.lng);

      var d = ll1.distanceTo(ll2);
      this.r = (d / 2) * .75;
    }

    this.circle.setRadius(this.r);
    this.circle.setLatLng(ll);

    this.latitude = ll.wrap().lat.toFixed(3);
    this.longitude = ll.wrap().lng.toFixed(3);
    this.radius = Math.round(this.r * .000621371)+' miles';

    let query = this.PackageModel.getCurrentSearchQuery();
    query.page = 0;
    query.filters = query.filters.filter(item => !item[APP_CONFIG.geoFilter]);
    query.filters.push(this.PackageModel.utils.getGeoRadiusQuery(ll.wrap().lat, ll.wrap().lng, this.r));
    
    let resp = await this.PackageModel.count(query, this.queryName);
    if( resp.state === 'loaded' ) {
      this.llmatches = resp.payload.count+'';
    }
  }

  _onLocateClicked() {
    this.locateText = 'Locating...';
    this.locating = true;

    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.locateText = 'Locate Me';
        this.locating = false;
        this.map.setView(L.latLng(position.coords.latitude, position.coords.longitude));
      },
      (error) => {
        this.locateText = 'Locate Me';
        this.locating = false;

        switch (error.code) {
          case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.");
            break;
          case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.");
            break;
          case error.TIMEOUT:
            alert("The request to get user location timed out.");
            break;
          case error.UNKNOWN_ERROR:
            alert("An unknown error occurred.");
            break;
        }
      }
    );
  }

  _onSetFilterClicked() {
    let query = this.PackageModel.getCurrentSearchQuery();
    query.page = 0;
    query.filters = query.filters.filter(item => !item[APP_CONFIG.geoFilter]);
    query.filters.push(this.PackageModel.utils.getGeoRadiusQuery(this.ll.wrap().lat, this.ll.wrap().lng, this.r));
    this.AppStateModel.setLocation(
      this.PackageModel.utils.getUrlPathFromQuery(query)
    );
    this.close();
  }

  open() {
    this.dispatchEvent(new CustomEvent('open'));
  }

  close() {
    this.dispatchEvent(new CustomEvent('close'));
  }

}

customElements.define('app-location-filter', AppLocationFilter);
