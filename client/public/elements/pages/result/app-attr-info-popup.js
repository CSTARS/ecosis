import { LitElement } from 'lit-element';
import render from "./app-attr-info-popup.tpl.js"


export default class AppAttrInfoPopup extends LitElement {

  static get properties() {
    return {
      filter : {type: String},
      description : {type: String},
      showing : {type: Boolean}
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.showing = false;

    window.addEventListener('click', e => {
      if( !this.showing ) return;
      if( this.justClicked ) {
        this.justClicked = false;
        return;
      }
      if( e.composedPath().indexOf(this.popup) > -1 ) return;
      this.showing = false;
    });
  }

  firstUpdated() {
    this.popup = this.shadowRoot.querySelector('.popup');

    if( !APP_CONFIG ) return this.hide();
    if( !APP_CONFIG.schema ) return this.hide();

    for( let key in APP_CONFIG.schema ) {
      let info = APP_CONFIG.schema[key].find(item => item.name === this.filter);
      if( !info ) continue;
      if( !info.description ) return this.hide();
      this.description = info.description;
      return;
    }

    this.hide();
  }

  _onClick() {
    if( this.showing ) return;
    this.justClicked = true;
    this.showing = true;
  }

  hide() {
    this.style.display = 'none';
  }

}

customElements.define('app-attr-info-popup', AppAttrInfoPopup);
