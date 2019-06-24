const mongo = require('../lib/mongo');

class UsdaModel {

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