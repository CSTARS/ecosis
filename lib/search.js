
class SearchUtils {

  reqQueryParser(reqQuery) {

    // set default parameters
    let query = {
      text : '',
      filters : [],
      start : 0,
      stop : 10,
      includeFilters : false,
      projection : {},
    };

    for( var i in query ) {
      if( reqQuery[i] ) query[i] = reqQuery[i];
    }

    try {
      if( typeof query.start == 'string' ) {
        query.start = parseInt(query.start);
      }
      if( typeof query.stop == 'string' ) {
        query.stop = parseInt(query.stop);
      }
    } catch(e) {}


    if( query.start < 0 ) query.start = 0;
    if( query.stop < query.start ) query.stop = query.start;

    // parse out json from filter
    try {
      query.filters = JSON.parse(query.filters);
    } catch (e) {
      // TODO: how do we want to handle this
      query.filters = [];
    }

    // parse out json from projection
    try {
      query.projection = JSON.parse(query.projection);
    } catch (e) {
      // TODO: how do we want to handle this
      delete query.projection;
    }

    return query;
  }

  
}

module.exports = new SearchUtils();