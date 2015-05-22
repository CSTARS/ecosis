var mqe = global.mqe;

module.exports.geoPreview = function(collections, req, res) {
    var query = mqe.requestToQuery(req);

    collections.main.count(query.options, function(err, resp){
      if( err ) return res.send({error: true, message: err});
      res.send({count: resp});
    });
};
