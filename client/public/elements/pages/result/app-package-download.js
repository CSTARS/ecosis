import { LitElement } from 'lit-element';
import render from "./app-package-download.tpl.js"


export default class AppPackageDownload extends Mixin(LitElement)
  .with(LitCorkUtils) {

  static get properties() {
    return {
      packageName : {type: String},
      packageTitle : {type: String},
      includeMetadata : {type: Boolean},
      resources : {type: Array},
      downloadLink : {type: String}
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);

    this.reset();

    this._injectModel('AppStateModel', 'PackageModel');
  }

  _onAppStateUpdate(e) {
    if( e.page !== 'package' ) return;
    if( e.location.path.length <= 1 ) return;
    this.loadPackage(e.location.path[1]);
  }

  async loadPackage(packageId) {
    this.packageId = packageId;

    this.reset();

    let state = await this.PackageModel.get(packageId);
    this.renderPackage(state.payload);
  }

  reset() {
    this.packageName = '';
    this.includeMetadata = false;
    this.resources = [];
  }

  renderPackage(pkg) {
    this.includeMetadata = false;
    this.packageName = pkg.ecosis.package_name;
    this.packageTitle = pkg.ecosis.package_title;
    this.resources = pkg.ecosis.resources;
    this.updateDownloadLink();
  }

  _onMetadataInputChange(e) {
    this.includeMetadata = e.currentTarget.checked ? true : false;
    this.updateDownloadLink();
  }

  updateDownloadLink() {
    let url = '/api/package/'+this.packageId+'/export';
    if( this.includeMetadata ) url += '?metadata=true';
    this.downloadLink = url;
  }

}

customElements.define('app-package-download', AppPackageDownload);
