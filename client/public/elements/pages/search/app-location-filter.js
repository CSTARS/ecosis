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
      matches : {type: String}
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);

    this.r = 844906; // 525 miles
    this.matches = '0';

    this.queryName = 'geoPreview';

    this._injectModel('PackageModel');
  }

  _onOpen() {
    if( !this.map ) return;
    this.map.setView([39.251, -97.850], 4);
    this._updateRadius();

    setTimeout(() => {
      this.map.invalidateSize();
    }, 100);
    setTimeout(() => {
      this.map.invalidateSize();
    }, 500);
  }

  firstUpdated() {
    if( this.map ) return;
    this.map = L
      .map(this.shadowRoot.querySelector("#map"))
      .setView([39.251, -97.850], 4);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    this.circle = L.circle([39.251, -97.850], this.r, {
      fillColor : '#AA0000'
    }).addTo(this.map);

    this.map.on('zoomend', () => this._updateRadius());
    this.map.on('moveend', () => this._updateRadius());
  }

  async _updateRadius() {
    let ll = this.map.getCenter();

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
    query.filters = query.filters.filter(item => !item[APP_CONFIG.geoFilter]);
    query.filters.push(this.PackageModel.utils.getGeoRadiusQuery(ll.wrap().lat, ll.wrap().lng, this.r));
    
    let resp = await this.PackageModel.count(query, this.queryName);
    if( resp.state === 'loaded' ) {
      this.matches = resp.payload.count+'';
    }
  }


  open() {
    this.dispatchEvent(new CustomEvent('open'));
  }

  close() {
    this.dispatchEvent(new CustomEvent('open'));
  }

}

customElements.define('app-location-filter', AppLocationFilter);
