import { LitElement } from 'lit-element';
import render from "./app-page-result.tpl.js"

import "@polymer/iron-pages"

import './app-package-metadata'
import './app-package-download'
import './spectra-viewer/app-spectra-viewer'

export default class AppPageResult extends Mixin(LitElement)
  .with(LitCorkUtils) {

  static get properties() {
    return {
      view : {type: String}
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);
    // this.view = 'viewer';

    this._injectModel('AppStateModel');
  }

  _onAppStateUpdate(e) {
    if( e.page === this.page ) return;
    this.view = 'viewer';
    this.page = e.page;
  }

  /**
   * @method _onTabClicked
   * @description bound to click event on tab
   * 
   * @param {Object} e 
   */
  _onTabClicked(e) {
    this.view = e.currentTarget.getAttribute('view');
  }

  _onTabKeyup(e) {
    if( e.which !== 13 ) return;
    this._onTabClicked(e);
  }

}

customElements.define('app-page-result', AppPageResult);
