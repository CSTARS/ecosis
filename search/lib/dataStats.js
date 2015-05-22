module.exports.get = function(collections, req, res) {
  var pkgid = req.query.package_id;
  var filters = req.query.filters;

  if( pkgid == null ) {
      return sendError(res, 'package_id is required');
  }

  try {
      if( filters ) filters = JSON.parse(filters);
  } catch(e) {
      return sendError(res, e);
  }

  var query = {'ecosis.package_id': pkgid};
  if( filters ) query['$and'] = filters;

  var cursor = collections.spectra.find(query, {'datapoints' : 1});
  cursor = cursor.stream();

  var resp = {}, packet, key, value, delta, weight;

  // map reduce for this was super slow :(
  cursor.on('data', function(item) {
    var tmp = {}, t;
    for( key in item.datapoints ) {
      t = parseFloat(item.datapoints[key]);

      if( isNaN(t) ) continue;

      key = key.replace(/,/g, '.');

      if( resp[key] ) {
        value = resp[key];

        // following: http://en.wikipedia.org/wiki/Algorithms_for_calculating_variance#Parallel_algorithm
        // https://gist.github.com/RedBeard0531/1886960
        value.sum += t;
        value.count += 1;
        value.min = Math.min(value.min, t);
        value.max = Math.max(value.max, t);

        // temp helpers
        delta = value.sum / value.count - t; // a.mean - b.mean
        weight = value.count / value.count + 1;

        // do the reducing
        value.diff += delta * delta * weight;

      } else {
        resp[key] = {
          sum : t,
          count : 1,
          min : t,
          max : t,
          diff : 0
        }
      }
    }
  });

  cursor.on('end', function() {
    for( var key in resp ) {
      resp[key].avg = resp[key].sum / resp[key].count;
      resp[key].variance = resp[key].diff / resp[key].count;
      resp[key].stddev = Math.sqrt(resp[key].variance);

      delete resp[key].diff;
    }

    res.send(resp);
  });
}
