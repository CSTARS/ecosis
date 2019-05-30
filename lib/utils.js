const config = require('./config');

class Utils {

  addDatasetLinks(item) {
    if( item && item.ecosis && item.ecosis.package_id ) {
      item.ecosis.dataset_link = config.server.url+'/package/'+item.ecosis.package_id;
      item.ecosis.dataset_rest_link = config.server.url+'/api/package/'+item.ecosis.package_id;
    }
  }

  addSpectraLink (item) {
    if( item && item.ecosis && item.ecosis.package_id ) {
      item.ecosis.dataset_link = config.server.url+'/package/'+item.ecosis.package_id;
      item.ecosis.spectra_rest_link = config.server.url+'/package/spactra/'+item.ecosis.package_id;
    }
  };

}

module.exports = new Utils();