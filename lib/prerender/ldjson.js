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
    '@type': 'WebPage',
    'mainEntity':{
        '@type': 'Dataset',
        name : item.ecosis.package_title,
        datePublished : item.ecosis.created,
        description : item.ecosis.description,
        url : url+'/#result/'+item.ecosis.package_id,
        genre : 'spectroscopy',
        provider : {
          '@type' : 'Organization',
          email : 'info@ecosis.org',
          url : 'http://ecosis.org',
          name : 'EcoSIS',
          description : 'Ecosystem Spectral Information System'
        },
        publisher : {
          '@type' : 'Organization',
          name : item.ecosis.organization
        },
        distribution : {
          '@type': 'DataDownload',
          name : item.ecosis.package_name+'.csv',
          url : url+'/package/export?package_id='+item.ecosis.package_id+'&metadata=true',
          fileFormat : 'text/csv'
        }
      }
  };

  result.ldjson = ldjson;

  if( item.Website ) {
    ldjson.mainEntity.publisher.url = item.Website[0];
  }
  if( item.Author ) {
    ldjson.mainEntity.author = {
      '@type' : 'Person',
      name : item.Author[0]
    };
    if( item['Author Email'] ) {
      ldjson.mainEntity.author.email = item['Author Email'][0];
    }
  }
  if( item.Keywords ) {
    result.keywords = item.Keywords.join(', ');
    ldjson.mainEntity.keywords = item.Keywords.join(', ');
  }
  if( item.ecosis.organization_info ) {
    ldjson.mainEntity.publisher.image = item.ecosis.organization_info.logo;
    ldjson.mainEntity.publisher.description = item.ecosis.organization_info.description;
  }

  return result;
};
