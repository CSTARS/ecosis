var config = global.appConfig;

module.exports.addDatasetLinks = function(item) {
  if( item && item.ecosis && item.ecosis.package_id ) {
    item.ecosis.dataset_link = config.server.url+'/#result/'+item.ecosis.package_id;
    item.ecosis.dataset_rest_link = config.server.url+'/rest/get?_id='+item.ecosis.package_id;
  }
}

// TODO: need to add post process step to MQE on /rest/get request
module.exports.addSpectraLink = function(item) {
  if( item && item.ecosis && item.ecosis.package_id ) {
    var filter = encodeURIComponent(JSON.stringify({'ecosis.package_id':item.ecosis.package_id}));

    item.ecosis.dataset_link = config.server.url+'/#result/'+item.ecosis.package_id;
    item.ecosis.spectra_rest_link = config.server.url+'/rest/getMultipleSpectra?filter='+filter;
  }
}

module.exports.cleanDatapoints = function(item) {
  // cleanup datapoints
  var points = {};
  for( var key in item.datapoints ) {
    points[key.replace(/,/g, '.')] = item.datapoints[key]
  }
  item.datapoints = points;

  return item;
}
