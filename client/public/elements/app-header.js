import { LitElement } from 'lit-element';
import render from "./app-header.tpl.js"

import "@polymer/paper-icon-button"
import "@polymer/paper-progress"

export default class AppHeader extends Mixin(LitElement)
  .with(LitCorkUtils) {

  static get properties() {
    return {
      loading: {type: Boolean}
    }
  }

  constructor() {
    super();

    this.loading = false;
    this.loadingCount = 0;
    this.loadingTimer = -1;

    this._injectModel('PackageModel', 'SpectraModel');

    this.loadingRequests = {
      package : false,
      packageSearch : false,
      spectraSearch : false,
      spectraStats : false
    };

    this.render = render.bind(this);
  }

  _onPackageUpdate(e) {
    this._handleUpdateEvent(e, 'spectra');
  }

  _onPackageSearchUpdate(e) {
    this._handleUpdateEvent(e, 'packageSearch');
  }

  _onSpectraSearchUpdate(e) {
    this._handleUpdateEvent(e, 'spectraSearch');
  }

  _onSpectraStatsUpdate(e) {
    this._handleUpdateEvent(e, 'spectraStats');
  }

  _handleUpdateEvent(e, type) {
    if( e.state === 'loading' ) {
      this.loadingRequests[type] = true;
    } else {
      this.loadingRequests[type] = false;
    }

    if( this.loadingTimer !== -1 ) clearTimeout(this.loadingTimer);
    this.loadingTimer = setTimeout(() => {
      this.loadingTimer = -1;
      this.loading = this._isLoading();
    }, 100);
  }

  _isLoading() {
    return (Object.values(this.loadingRequests).filter(b => b).length > 0);
  }

  _onMenuIconClick() {
    this.dispatchEvent(
      new CustomEvent('open-menu')
    );
  }

}

customElements.define('app-header', AppHeader);
