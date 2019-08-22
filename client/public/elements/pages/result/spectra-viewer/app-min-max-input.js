import { LitElement } from 'lit-element';
import render from "./app-min-max-input.tpl.js"


export default class AppMinMaxInput extends LitElement {

  static get properties() {
    return {
      min : {type: Number},
      max : {type: Number},
      absMin : {
        type: Number,
        attribute: 'abs-min'
      },
      absMax : {
        type: Number,
        attribute: 'abs-max'
      },
      step : {type: Number}
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);
  }

  updated(props) {
    if( (props.has('absMin') || props.has('absMax')) && this.absMin && this.absMax ) {
      this.step = (this.absMax - this.absMin) / 10;
    }
  }

  reset() {
    this.min = this.absMin;
    this.max = this.absMax;
  }

  _onMinChange(e) {
    let val = parseFloat(e.currentTarget.value);
    // if( val < this.absMin ) {
    //   this.min = this.absMin;
    // } else 
    if( val > this.max ) {
      this.min = this.max;
    } else {
      this.min = val;
    }
    this._fireChange();
  }

  _onMaxChange(e) {
    let val = parseFloat(e.currentTarget.value);
    // if( val > this.absMax ) {
    //   this.max = this.absMax;
    // } else 
    if( val < this.min ) {
      this.max = this.min;
    } else {
      this.max = val;
    }
    this._fireChange();
  }

  _fireChange() {
    let e = new CustomEvent('range-value-change', { 
      detail: {min: this.min, max: this.max} 
    });
    this.dispatchEvent(e);
  }

}

customElements.define('app-min-max-input', AppMinMaxInput);
