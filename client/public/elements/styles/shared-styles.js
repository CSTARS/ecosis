import { html } from 'lit-element';

export default html`
<style>
  /* Old bootstrap stuff */
  h1, .h1 {
    font-size: 56px;
  }

  h1, .h1, h2, .h2, h3, .h3 {
    margin-top: 23px;
    margin-bottom: 11.5px;
  }

  h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {
    font-family: inherit;
    font-weight: 400;
    line-height: 1.1;
    color: #444444;
  }

  h3, .h3 {
    font-size: 34px;
  }

  .jumbotron p {
    margin-bottom: 15px;
    font-size: 20px;
    font-weight: 200;
  }

  p {
      margin: 0 0 1em;
  }
  p {
      margin: 0 0 11.5px;
  }
  
  /* EcoSML */
  paper-button {
    color: white;
    background-color : var(--default-primary-color);
    border: 1px solid var(--default-primary-color);
  }

  button, a.btn {
    border-radius: 0;
    border: 1px solid var(--default-primary-color);
    background-color : var(--default-primary-color);
    color: white;
    padding: 15px;
    font-weight: var(--app-font-weight-heavy);
    font-size: 14px;
    text-decoration: none;
  }

  button.inverse, a.btn.inverse {
    border-radius: 0;
    border: 0;
    border: 1px solid var(--app-light-gray);
    background-color : var(--app-extra-light-gray);
    color: var(--app-dark-blue);
    padding: 15px;
    font-weight: var(--app-font-weight-heavy);
    font-size: 14px;
  }

  [hidden] {
    display: none !important;
  }
</style>
`;