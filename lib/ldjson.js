'use strict';

const licenses = require('./licenses');

module.exports = function(item, url='https://ecosis.org') {

  var result = {
    title : item.ecosis.package_title,
    description : item.ecosis.description,
    ldjson : null
  };

  console.log(item.ecosis.license);

  var ldjson = {
    '@context': 'http://schema.org',
    '@type': 'Dataset',
    name : item.ecosis.package_title,
    datePublished : item.ecosis.created,
    description : item.ecosis.description,
    url : url+'/api/package/'+item.ecosis.package_name,
    license : getLicense(item.ecosis.license),
    genre : 'spectroscopy',
    provider : {
      '@type' : 'Organization',
      email : 'info@ecosis.org',
      url : url,
      name : 'EcoSIS',
      description : 'Ecosystem Spectral Information System'
    },
    "includedInDataCatalog":{
      '@type':"DataCatalog",
      name:'EcoSIS'
    },
    publisher : {
      '@type' : 'Organization',
      name : item.ecosis.organization
    },
    distribution : {
      '@type': 'DataDownload',
      name : item.ecosis.package_name+'.csv',
      contentUrl : url+'/api/package/'+item.ecosis.package_name+'/export/&metadata=true',
      fileFormat : 'text/csv',
      encodingFormat : 'CSV'
    }
  };

  result.ldjson = ldjson;

  if( item.Website ) {
    ldjson.publisher.url = item.Website[0];
  }
  if( item.Author ) {
    ldjson.author = {
      '@type' : 'Person',
      name : item.Author[0]
    };
    if( item['Author Email'] ) {
      ldjson.author.email = item['Author Email'][0];
    }
  }
  if( item.Keywords ) {
    result.keywords = item.Keywords.join(', ');
    ldjson.keywords = item.Keywords;
  }
  if( item.ecosis.organization_info ) {
    ldjson.publisher.image = item.ecosis.organization_info.image_display_url;
    ldjson.publisher.description = item.ecosis.organization_info.description;
  }

  return result;
};

function getLicense(org='') {
  let license = licenses.find(item => item.label === org);
  if( license ) return license.url;
  return org;
}