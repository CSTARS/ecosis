'use strict';

var usdaCollection = global.setup.usdaCollection;

module.exports = function() {
    return {
        name: 'usda',
        search : search,
        get : get
    };
};

function search(query, callback) {
  if( !query ) {
    return callback('No query provided.  /usda/search?q=[search text]');
  }

  query = {
      $text : {
          $search : query
      }
  };

  usdaCollection
    .find(query, {score: { $meta: 'textScore' }, _id: 0})
    .sort({ score: { $meta: 'textScore' } })
    .limit(100)
    .toArray(callback);
}

function get(code, callback) {
  if( !code ) {
    return callback('No code provided. /usda/get?code=[usda code]');
  }

  var query = {'Accepted Symbol' : code.toUpperCase()};

  usdaCollection.findOne(query, {_id: 0}, callback);
}

// make sure indexes are good
usdaCollection.ensureIndex(
  {
    Category : 'text',
    'Scientific Name' : 'text',
    'Genus' : 'text',
    'Accepted Symbol' : 'text',
    'Common Name' : 'text'
  },
  {w: 1},
  function(err) {
    if( err ) {
      global.setup.logger.info(err);
    }
  }
);
