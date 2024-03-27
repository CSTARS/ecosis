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

  @media(max-width: 768px) {
    .stats-container-inner {
      display: block;
    }
    .top-margin-sm {
      margin-top: 25px !important;
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

  #recently-added h3 {
    font-weight: bold;
    margin-top: 30px;
    margin-bottom: 2px;
    line-height: 26px;
  }

  .footer h3 {
    font-weight: bold;
    margin-top: 0;
  }

</style>  

<div class="root">
  <div style="margin: 15px; text-align: center">
    <h1 style="margin-bottom: 0; line-height: 36px">Ecological Spectral Information System</h1>

    <div>
      Welcome to the EcoSIS<span class="sandbox" ?hidden="${!this.sandbox}" style="font-weight:bold">&nbsp;Sandbox</span>, a useful tool for finding spectral data. <br />
      <p id="count" class="tlt" data-in-effect="fadeInDown" data-in-shuffle="true"></p>
    </div>

    <div>${this.spectraCount} and counting.</div>
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
              <div><a href="${item.link}">${item.value}</a></div> 
              <div><span class="count-label">${item.count}</span></div>
            </div>
          `)}
        </div>
      </div>
      <div>
        <h2 class="uheader green top-margin-sm">Top Keywords</h2>
        <div id="Keywords">
          ${this.keywords.map(item => html`
            <div class="stat-row">
              <div><a href="${item.link}">${item.value}</a></div>
              <div><span class="count-label">${item.count}</span></div>
            </div>
          `)}
        </div>
      </div>
      <div>
        <h2 class="uheader lightblue top-margin-sm">Top Themes</h2>
        <div id="Theme">
          ${this.themes.map(item => html`
            <div class="stat-row">
              <div><a href="${item.link}">${item.value}</a></div> 
              <div><span class="count-label">${item.count}</span></div>
            </div>
          `)}
        </div>
      </div>
    </div>

  </div>
</div>

<div class="root">
  <div class="main-panel">

    <div>
      <h2 class="uheader lightgreen">Recently Added</h2>
      <div id="recently-added">
        ${this.lastAdded.map(pkg => html`
          <div>
            <h3><a href="/package/${pkg.ecosis.package_name}">${pkg.ecosis.package_title}</a></h3> 
            <div style="font-style:italic"><a href="${pkg.ecosis.organization_link}">${pkg.ecosis.organization}</a></div>
            <div style="color: var(--text-light-color)">${pkg.ecosis.short_description}</div>
          </div>
        `)}
      </div>
    </div>

  </div>
</div>

<div class="root footer">
  <div class="main-panel">
    <div class="row">
      <div style="flex: 1">
        <h3 class="uheader blue">Contribute!</h3>
        <div>Data maintainers, add or edit spectra at <a id="mainainerLink" highlight href="http://data.ecosis.org">data.ecosis.org</a>.</div>
      
        <h3 class="uheader lightblue" style="margin-top: 35px;">Data Models</h3>
        <div>
          Looking for spectra data models? Check out <a highlight href="http://ecosml.org">ecosml.org</a>.
        </div>
      </div>
      <div style="flex: 1">
        <h3 class="uheader green top-margin-sm">Need Help?</h3>
        <div style="margin-bottom: 15px;">Visit the <a href="http://tutorial.ecosis.org/" highlight>EcoSIS Tutorials</a>. Or Contact:</div>
        <div style="margin-bottom: 10px; line-height: 22px;">
          <div><a href="mailto:ecosis-admins@googlegroups.com" highlight>ecosis-admins@googlegroups.com</a></div>
          <div>General EcoSIS questions and program information or Technical help questions for EcoSIS applications and tools.</div>
        </div>
        <!-- <div style="line-height: 22px">
          <div><a href="" highlight>help</a></div>
          <div>.</div>
        </div> -->

      </div>
    </div>
  </div>
</div>

<div class="root footer">
  <div class="main-panel">
    <div class="row">
      <div style="flex: 1">

        <h3>Sponsor</h3>

        <div style="display:flex; align-items: center">
          <div style="padding-right: 10px;">
            <a href="https://www.nasa.gov/">
              <img class="media-object" src="/assets/NASA_logo.png" style="max-width: 96px" alt="NASA Logo">
            </a>
          </div>
          <div>
            <h2 style="margin:0"><a href="https://www.nasa.gov/" target="_blank">NASA</a></h2>
            <b>Program:</b> Research Opportunities in Space and Earth Sciences<br />
            <b>Grant Number:</b> NNX13AK85A
          </div>
        </div>
      </div>
      <div style="width:25px; flex: 0"></div>
      <div style="flex: 1">

        <h3 class="top-margin-sm">Executive Team</h3>
        <div>
          <a href="http://labs.russell.wisc.edu/townsend/" target="_blanl">University of Wisconsin - Madison, EnSpec</a><br />
          <a href="http://www.cstars.ucdavis.edu/" target="_blanl">University of California - Davis, CSTARS</a><br />
          <a href="https://sites.google.com/site/ucsbviperlab/" target="_blanl">University of California - Santa Barabara, VIPER Lab</a><br />
          <a href="http://ursa.utah.edu/index.php" target="_blanl">University of Utah, URSA</a><br />
          <a href="http://www.calmit.unl.edu/" target="_blanl">University of Nebraska - Lincoln, CALMIT</a><br />
          <a href="http://www.jpl.nasa.gov/" target="_blanl">NASA, JPL</a><br />
          <a href="http://www.neonscience.org/science-design/collection-methods/airborne-remote-sensing" target="_blanl">NEON</a>
        </div>
      </div>
    </div>
  </div>
</div>

`;}