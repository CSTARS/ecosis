module.exports = function(item, url) {
  if( url === undefined ) {
    url = '';
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
        url : url+'#result/'+item.ecosis.package_id,
        provider : {
          '@type' : 'Organization',
          email : 'info@ecospectra.org',
          url : 'http://ecospectra.org',
          name : 'EcoSIS',
          description : 'Ecosystem Spectral Information System'
        },
        publisher : {
          '@type' : 'Organization',
          name : item.ecosis.organization
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

  return result;
}
