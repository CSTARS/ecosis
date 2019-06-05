const mongo = require('../lib/mongo');

class UsdaModel {

  constructor() {
    this.init();
  }

  async init() {
    // make sure indexes are good
    let collection = await mongo.usdaCollection();
    collection.ensureIndex(
      {
        Category : 'text',
        'Scientific Name' : 'text',
        'Genus' : 'text',
        'Accepted Symbol' : 'text',
        'Common Name' : 'text'
      },
      {w: 1},
      function(err) {
        // TODO
        // if( err ) {
        //   global.setup.logger.info(err);
        // }
      }
    );
  }

  async get(code) {
    if( !code ) throw new Error('No code provided');
    var code = {'Accepted Symbol' : code.trim().toUpperCase()};
  
    let collection = await mongo.usdaCollection();
    return collection.findOne(query, {_id: 0});
  }
  
  async search(query={}) {
    query = {
      $text : {
        $search : query
      }
    };
    
    let collection = await mongo.usdaCollection();
    return collection
      .find(query, {score: { $meta: 'textScore' }, _id: 0})
      .sort({ score: { $meta: 'textScore' } })
      .limit(100)
      .toArray();
  }

}

module.exports = new UsdaModel();