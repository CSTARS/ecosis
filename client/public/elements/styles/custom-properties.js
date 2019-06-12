let style = document.createElement('style');
document.head.appendChild(style);
style.innerHTML = `
html {
  --default-primary-color : #00867d;
  --primary-color         : var(--default-primary-color); /* alt name */
  --light-primary-color   : #4db6ac;
  --default-secondary-color : #2286c3;
  --light-secondary-color   : #64b5f6;
  --default-background-color : #F5F5F6;
  --dark-background-color    : #E1E2E1;
  --extra-dark-background-color : #616161;
  
  --text-primary-color      : #313534;
  --primary-text-color      : var(--text-primary-color);
  --secondary-text-color    : #8c9794;
  --disabled-text-color     : #aaa;
  --inverse-text-color      : var(--default-background-color);
  --max-width               : 1200px;
  --max-text-width          : 650px;
  --font-size               : 16px;
  --font-weight             : 400;
  --font-weight-heavy       : 700;
  --form-break-margin       : 75px;
  --color-red               : #d32f2f;
  --color-orange            : #ff9800;
  --color-green             : #388e3c;
  /**
   * Global Element Styles
   */
  /* paper-input */
  --paper-input-container-color: var(--secondary-text-color);
}
`;