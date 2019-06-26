import { html } from 'lit-element';

export default function render() { 
return html`

<style>
  :host {
    display: block;
    background-color: white;
    border-bottom: 1px solid #ddd;
  }
  .root {
    display: flex;
    justify-content: center;
  }
  input {
    display: block;
    width: 100%;
    padding: 5px;
    font-size: 26px;
    margin: 15px 0;
    height: 42px;
    background: #eee;
    color: var(--text-primary-color);
    border: none;
    box-sizing: border-box;
  }
  button {
    margin: 15px 0;
    color : white;
    background: var(--default-primary-color);
    height: 42px;
    padding: 0 15px;
    border-left: none;
    border-radius: 0;
  }
</style>

<div class="root">
  <div style="flex:.66">
    <input type="text" id="input" on-keypress="_onKeyPress"/>
  </div>
  <div>
    <button on-click="_onButtonClick">
      <iron-icon icon="search"></iron-icon>
    </button>
  </div>
</div>

<div class="root">
  <app-active-filters-panel style="flex:.66"></app-active-filters-panel>
</div>


`;}