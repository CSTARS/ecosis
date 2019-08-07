import { LitElement } from 'lit-element';
import render from "./ecosis-search.tpl.js"

// main library
import "../src"
import "ecosis-client-commons"

// polymer
import "@polymer/iron-pages"

import "@ucd-lib/cork-app-state"
import "./styles/custom-properties"
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

    this._injectModel('AppStateModel');
  }

  _onAppStateUpdate(e) {
    this.page = e.page;
    this.openMenu = false;
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
