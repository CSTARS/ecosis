'use strict';

var helpers = require('../../lib/helpers');

module.exports = function(model, req, res) {
  var filters = req.query.filters;
  var package_id = req.query.package_id; // optional
  var start = parseInt(req.query.start);
  var stop = parseInt(req.query.stop);

  try {
      if( filters ) {
        filters = JSON.parse(filters);
      }
  } catch(e) {
      return res.send({error: true, message: 'Failed to parse filters parameter as JSON'});
  }

  /**
   * Response will contain a stream, count, start, end and messages array
   */
  model.query(package_id, filters, start, stop, function(err, result){
    if( err ) {
      return res.send({error: true, message: err});
    }

    res.write('{"total":' + result.count +
      ',"start":' + result.start +
      ',"stop":' + result.stop +
      ', "messages": '+JSON.stringify(result.messages) +
      ', "items":[');

    // map reduce for this was super slow :(
    var first = true;
    result.stream.on('data', function(item) {
      helpers.cleanDatapoints(item);
      helpers.addDatasetLinks(item);

      res.write((first ? '' : ',') + JSON.stringify(item));
      first = false;
    });

    result.stream.on('end', function() {
      res.end(']}');
    });
  });
};
