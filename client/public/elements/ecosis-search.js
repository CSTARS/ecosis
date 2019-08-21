import { LitElement } from 'lit-element';
import render from "./ecosis-search.tpl.js"

// main library
import "../src"
import "ecosis-client-commons"
import {jsonldTransform} from "../src"

// polymer
import "@polymer/iron-pages"

import "@ucd-lib/cork-app-state"
import "./pages/home/app-page-home"
import "./pages/search/app-page-search"
import "./pages/result/app-page-result"
import "./app-header"
import "./ecosis-search-header"

export default class EcosisSearch extends Mixin(LitElement)
  .with(LitCorkUtils) {

  static get properties() {
    return {
      page : {type: String},
      openMenu : {type: Boolean},
      anchorTabIndex : {type: Number},
      appRoutes : {type: Array}
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);

    this.appRoutes = APP_CONFIG.appRoutes;
    this.openMenu = false;
    this.page = '';

    window.addEventListener('click', e => {
      if( !this.openMenu ) return;
      if( !e.composedPath ) {
        return console.warn('Browser does not support event.path');
      }
      if( e.composedPath().indexOf(this.menuEle) > -1) return;
      if( e.composedPath().indexOf(this.appHeaderEle) > -1) return;
      this.openMenu = false;
    });

    this._injectModel('AppStateModel', 'PackageModel', 'OrganizationModel');
  }

  firstUpdated() {
    this.menuEle = this.shadowRoot.querySelector('.menu');
    this.appHeaderEle = this.shadowRoot.querySelector('app-header');
    this.mainEle = this.shadowRoot.querySelector('.main-content');
    this.seo = document.querySelector('#seo-jsonld');
  }

  async _onAppStateUpdate(e) {
    this.page = e.page;
    this.openMenu = false;

    this.mainEle.scrollTo(0, 0);

    try {
      if( this.page !== 'package' ) {
        this.seo.innerHTML = '';
      } else {
        let pkg = await this.PackageModel.get(e.location.path[1]);
        pkg = pkg.payload;
        let org = await this.OrganizationModel.get(pkg.ecosis.organization_id);
        pkg.organization_info = org.payload;
        this.seo.innerHTML = JSON.stringify(jsonldTransform(pkg), '  ', '  ');
      }
    } catch(e) {
      console.error('Failed to set jsonld seo tag', e);
    }
  }

  _onOpenMenu() {
    this.openMenu = !this.openMenu;
  }

  updated(props) {
    if( props.has('openMenu') ) {
      this.anchorTabIndex = this.openMenu ? 1 : -1;
    }
  }

}

customElements.define('ecosis-search', EcosisSearch);
