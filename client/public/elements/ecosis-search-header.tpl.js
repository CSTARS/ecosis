import { html } from 'lit-element';

export default function render() { 
return html`

<style>
  :host {
    display: block;
  }
</style>

<app-search-header
  .text="${this.text}"
  .filters="${this.filters}"
  .suggestions="${this.suggestions}"
  @keyup="${this._onInputKeyup}"
  @text-search="${this._onTextSearch}"
  @suggestion-selected="${this._onSuggestionSelected}"
  @remove-filter="${this._onRemoveFilter}">
</app-search-header>

`;}