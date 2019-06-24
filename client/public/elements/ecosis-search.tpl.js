import { html } from 'lit-element';

export default function render() { 
return html`

<style>
  :host {
    display: block;
  }
</style>  

<app-header></app-header>
<iron-pages 
  selected-attribute="active"
  attr-for-selected="page" 
  selected="${this.page}">
  <app-page-home page="home"></app-page-home>
</iron-pages>

`;}