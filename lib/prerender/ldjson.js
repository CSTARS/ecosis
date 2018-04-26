'use strict';

module.exports = function(item, url) {
  if( url === undefined ) {
    url = 'http://ecosis.org';
  }

  var result = {
    title : item.ecosis.package_title,
    description : item.ecosis.description,
    ldjson : null
  };

  var ldjson = {
    '@context': 'http://schema.org',
    '@type': 'Dataset',
    name : item.ecosis.package_title,
    datePublished : item.ecosis.created,
    description : item.ecosis.description,
    url : url+'#result/'+item.ecosis.package_id,
    genre : 'spectroscopy',
    provider : {
      '@type' : 'Organization',
      email : 'info@ecosis.org',
      url : 'http://ecosis.org',
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
      contentUrl : url+'/package/export?package_id='+item.ecosis.package_id+'&metadata=true',
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
    ldjson.publisher.image = item.ecosis.organization_info.logo;
    ldjson.publisher.description = item.ecosis.organization_info.description;
  }

  return result;
};
