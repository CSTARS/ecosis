'use strict';

var csvStringify = require('csv-stringify');

module.exports = function(model, req, res) {

  var pkgid = null;
  if( req.query.package_id ) {
    pkgid = req.query.package_id;
  } else if( req.query.id ) {
    pkgid = req.query.id;
  } else if( req.query.package_name ) {
    pkgid = req.query.package_name;
  }

  var filters = req.query.filters;
  var includeMetadata = req.query.metadata ? (req.query.metadata.toLowerCase() === 'true') : false;

  /**
   * result contains packageName and stream
   */
  model.export(pkgid, filters, includeMetadata, function(err, result){
    res.set('Content-Disposition', 'attachment; filename="'+result.packageName+'.csv"');
    
    csvStringify([result.headers], function(err, output){
      res.write(output);
    });

    var dataLength = result.data.length;
    var metadataLength = result.metadata.length;
    var line, i;

    if( includeMetadata && result.metadata.length > 1 ) {
      includeMetadata = true;
    } else {
      includeMetadata = false;
    }

    var finished = false;
    var count = 0;
    var writeCount = 0;

    // check function to make sure all is good to end response
    function done() {
      if( finished && count === writeCount ) {
        res.end('');
      }
    }

    result.stream.on('data', function(item) {
        count++;
        line = [];

        if( includeMetadata ) {
            for( i = 0; i < metadataLength; i++ ) {
                line.push(item[result.metadata[i]] === undefined ? '' : item[result.metadata[i]]);
            }
        }

        for( i = 0; i < dataLength; i++ ) {
            line.push(item.datapoints[result.data[i]] === undefined ? '' : item.datapoints[result.data[i]]);
        }

        csvStringify([line], function(err, output){
          res.write(output);
          writeCount++;
          done();
        });
    });

    result.stream.on('end', function() {
      finished = true;
      done();
    });

  });
};
