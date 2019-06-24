import { html } from 'lit-element';
import {litCss, sharedStylesHtml} from 'ecosis-client-commons'


export default function render() { 
return html`

${litCss(sharedStylesHtml)}
<style>
  :host {
    display: block;
  }

  .root {
    display: flex;
    justify-content: center;
  }
  .root.column {
    flex-direction: column;
  }
  .root > div {
    width: 100%;
    max-width: 1200px;
  }

  .row {
    display: flex;
    margin-bottom: 35px;
  }

  .row > * {
    flex : 1;
    padding: 10px;
  }

  .count-label {
    background: #eee;
    border-radius: 20px;
    padding: 1px 5px;
    font-size: 13px;
  }

  .stat-row {
    padding: 3px;
    display: flex;
  }

  .stat-row > div:first-child {
    flex: 1;
  }

  .splash {
    margin-top: 0px;
    padding: 60px 0;
    text-align: center;
    min-height: 400px;
    width: 100%;
  }
  .splash h1 {
    color: white;
    letter-spacing: 10px;
    text-shadow: 0 0 15px #333;
    padding-left: 30px;
    padding-right: 30px;
  }
  .splash h1 div {
    font-size:2em;
  }
  .splash h3 {
    color: white;
    letter-spacing: 5px;
    text-shadow: 0 0 15px #333;
  }
  .splash-url {
    letter-spacing: 5px;
    color:white;
    margin: 20px 0;
    padding: 20px 0;
    border-top: 3px solid white;
    border-bottom: 3px solid white;
  }

  @media(max-width: 680px) {
    .splash h1 {
      letter-spacing: 5px;
      padding-left: 15px;
      padding-right: 15px;
    }
    .splash h1 div {
      font-size:1.5em;
    }
    .splash h3 {
      letter-spacing: 2px;
    }
    .splash-url {
      letter-spacing: 2px;
      margin: 10px 0;
      padding: 10px 0;
    }
  }

  .splash-text {
    position: absolute; 
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .jumbotron {
    margin-bottom : 0; 
    text-align : center;
    padding: 100px 0 50px 0;
  }

  .stats-container {
    background: #f8f8f8; 
    padding: 25px 0;
    display: flex;
    justify-content: center;
  }

  .max-width {
    max-width: 750px;
    width: 100%;
    box-sizing: border-box;
  }

  .stats-container-inner {
    display: flex;
  }

  @media(max-width: 678px) {
    .stats-container-inner {
      display: block;
    }
  }

  .stat-container {
    flex: 1;
    margin: 5px;
  }

  .stat-container > div {
    background-color: white;
    border-left: 1px solid #eee;
    border-top: 1px solid #eee;
    border-right: 1px solid #eee;
  }

  .stat-container > div > div {
    padding: 10px;
    border-bottom: 1px solid #eee;
  }

</style>  

<!-- <div class="splash">
  <iron-image 
    style="height:470px; width:100%; position:absolute; top: 0; left: 0"  
    placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAJCAYAAAAsCDz7AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AYDAAcsOvwRSAAAAtNJREFUKM8FwctuG1UAgOH/nLl4bNce2/E11CFtUjVtCaqgCgUJ2IBAYod4A4TEA/AAfRcWSOy6ohISd4mCCFUpDW3TNFGcxLEb2+OJ7bmfw/eJm1/c1M3ibdySIFff4+HfHoWuYnaQI++YrG+UsKtQLjnc3z5k43KFiacZDmbc2qryYiemdUmSsw2iMGMyjjkdBoz8kLeutkAVSBddROuT69pyJNMdB7uaEmWaaAJZolGJJl8y+fLOJs8Oj8jHFwnMPufTgLe3uhjZBVLh83j3jEcPpoSxws4Lyi3Jye8xi4Hi9gcrvHi6QLQ/u6brTYtn3+V49UYDaY/Z/y9AKABBNM24/lGeSMHVWyaDA8W773Wo2Sv8+tMTZmlAfzKjUrPpLOf59/uQUS9k4aUgFUhovwOm39P4uxlOscDG+zkWMqW0YWJkJo/vRTh2nufbER9/XsMfpzS7Bne/OULFfXIVxeg0QRmaKIgxHUXvYQAAloAUKpcl9SaY0UuNcDQqDKlVQiZjiRclzLyQrU9rdHiNf/b+YuJlpL7i0S8BxbqBUU5JDHhl06JYhtXlIocnAR9+lSc9s/nx6ykgsF3N8DjDLHcljTWL0bZLmDQYeydEkYAE/vzZp5EeoSoZe3dDltYs1q64DOfnVJs2wshQWjPoKbyzc5aaErck6T3PAIFVgouvw7RvYpZXob3ksH/us/MbjKuK6MBFJopMz5lMBkx7IcISTI4jglnC/ASOt+e0Ny2soka6mkwIHEcSTQ0e/DADAStvWshIkM8HGBj1O+VGmSV3jUEvprueIN0MPw7RC0F0HtN+I4dwFelMkMWwGChUAgkKWYWZp7l0RXD6JOP+tyFpALUbErdr4A8jfC9DttZN3PoCz3iKPxrS/8PCLSg6DZNgX2O0BfMZVJdNCh1B+FKDBAQER5pgV7N8wWD3HlTSa6gMrDY0Vg3iSUyaaqJA8z/OiGDYFjeVWQAAAABJRU5ErkJggg=="
    sizing="cover" 
    preload 
    fade 
    src="/assets/banner-slim.png">
  </iron-image>
  <div class="splash-text">
    <div class="self-center">
      <h1><div>EcoSIS</div></h1>
      <h1 class="splash-url">
        ecosis.org
      </h1>
      <h3>Spectral Library</h3>
    </div>
  </div>
</div> -->

<div class="jumbotron" style="">
  <p>Welcome to the EcoSIS Spectral Library<span class="sandbox" style="font-weight:bold">&nbsp;Sandbox</span>, a useful tool for finding spectral data. <br />
    <p id="count" class="tlt" data-in-effect="fadeInDown" data-in-shuffle="true"></p>
  </p>

  <p><a href="/search" class="btn" role="button"><i class="fa fa-search"></i>  Find Spectra</a></p>

  <div style="margin-top:30px; text-align:center; padding: 25px 5% 5px 5%">
    Data maintainers, add or edit spectra <a id="mainainerLink" href="http://data.ecosis.org">here.</a>
  </div>
  <div style="text-align:center; padding: 0 5%">
    Looking for spectra data models? Check out <a href="http://ecosml.org">EcoSML.</a>
  </div>

</div>

<div class="root">
  <div class="main-panel">

    <div class="row">
      <div>
        <h2 class="uheader blue">Top Organizations</h2>
        <div id="organization">
          ${this.organizations.map(item => html`
            <div class="stat-row">
              <div>${item.value}</div> 
              <div><span class="count-label">${item.count}</span></div>
            </div>
          `)}
        </div>
      </div>
      <div>
        <h2 class="uheader green">Top Keywords</h2>
        <div id="Keywords">
          ${this.keywords.map(item => html`
            <div class="stat-row">
              <div>${item.value}</div>
              <div><span class="count-label">${item.count}</span></div>
            </div>
          `)}
        </div>
      </div>
      <div>
        <h2 class="uheader lightblue">Top Themes</h2>
        <div id="Theme">
          ${this.themes.map(item => html`
            <div class="stat-row">
              <div>${item.value}</div> 
              <div><span class="count-label">${item.count}</span></div>
            </div>
          `)}
        </div>
      </div>
    </div>

  </div>
</div>

`;}