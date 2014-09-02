/**
 * This will actually extend the MQE expressjs server
 * 
 * make sure mongo is fired up w/ text search enabled
 * mongod --setParameter textSearchEnabled=true
 * 
 */
var config = require(process.argv[2]);

var ObjectId = require('mongodb').ObjectID;
var async = require('async');

var collection;
var cacheCollection;

var ignoreList = ['_id','lastUpdate','lastRun', 'metadata', 'spectra'];

// express app
exports.bootstrap = function(server) {
	var db = server.mqe.getDatabase();
	
	db.collection(config.db.mainCollection, function(err, coll) { 
		if( err ) return console.log(err);

		collection = coll;
	});

	// takes params format and raw
	server.app.get('/rest/download', function(req, res){
		var format = '\t';
		var includeMetadata = true;

		if( req.query.format ) {
			if( req.query.format == 'spaces' ) format = '    ';
			if( req.query.format == 'comma' ) format = ',';
			delete req.query.format;
		}

		if( req.query.raw ) {
			if( req.query.raw == 'true' ) includeMetadata = false;
			delete req.query.raw;
		}

		server.mqe.getItem(req, function(err, item){
			if( err ) return res.send(err);

			var txt = '';

			if( includeMetadata ) {
				for( var key in item ) {
					if( ignoreList.indexOf(key) > -1 ) continue;
					txt += key+format+item[key]+'\n';
				}
				for( var key in item.metadata ) {
					txt += key+format+item.metadata[key]+'\n';
				}
				txt += '\n';
			}
			

			for( var i = 0; i < item.spectra.length; i++ ) {
				txt += item.spectra[i][0]+format+item.spectra[i][1]+'\n';
			}

			res.set('Content-Disposition', 'attachment; filename="'+item._id+'.txt"');
			res.send(txt);
		});
	});

	server.app.get('/rest/downloadQueryData', function(req, res){
		var q = req.query.q;
		if( typeof q == 'string' ) q = JSON.parse(q);
		if( !q ) q = {};

		var result = {};
		var c = 0;
		var keys = [];
		var docs = [''];

		var cursor = collection.find(q,{spectra_id:1,spectra:1});

		var t = new Date().getTime();

		cursor.each(function(err, doc) {
			console.log(c);
			if( doc == null ) {
				var sorted = Object.keys(result);
				for( var i = 0; i < sorted.length; i++ ) {
					sorted[i] = parseFloat(sorted[i]);
				}

				sorted.sort(function(a, b){
					if( a > b ) return 1;
					if( a < b ) return -1;
					return 0;
				});

				var csv = docs.join(',')+'\n';
				for( var i = 0; i < sorted.length; i++ ) {
					csv += sorted[i]+','+result[sorted[i]]+'\n';
					delete result[sorted[i]];
				}

				res.send(csv);
				console.log((new Date().getTime()-t)+'ms');
				return;
			}

			keys = [];
			docs.push(doc.spectra_id);

			doc.spectra = JSON.parse(doc.spectra);
			for( var i = 0; i < doc.spectra.length; i++ ) {
				_addDownloadRow(result, c, doc.spectra[i]);
				keys.push(doc.spectra[i][0]);
			}

			for( var key in result ) {
				if( keys.indexOf(key) == -1 ) {
					result[key] += ',';
				}
			}

			c++;
		});
	});


	server.app.get('/rest/test', function(req, resp) {
		var cursor = collection.aggregate(
			[
				{
					$limit : 10000
				},
	        	{ 
	        		$project : { 
	        		 	_id : 0, 
	        		 	spectra : 1
	        		} 
	        	},
        		{ $unwind: "$spectra" },
        		{ 
        			$group: { 
            			_id: "$spectra.wavelength", 
            			values : { 
            				$push : "$spectra.values"
            			} 
            		}
            	},
            	{
            		$sort : { _id : 1 } 
            	}
        	], 
	    	{
	      		allowDiskUse: true, 
	      		cursor: { batchSize: 0 }
	    	}
	    );

	    // Use cursor as stream
	    cursor.on('data', function(data) {
	    	var row = data._id+' '+data.values.length;
	    	//for( var i = 0; i < data.values.length; i++ ) {
	    	//	row += ','+data.values[i].join(',');
	    	//}
	        resp.write(row+'\n');
	    });

	    cursor.on('end', function() {
	    	resp.end('');
	        console.log('done');
	        //db.close();
	    });
	});

	server.app.get('/rest/group/getInfo', function(req, resp){
		getGroupInfo(req, resp);
	});

	server.app.get('/rest/import', function(req, resp){
		server.runImport(function(obj){
			server.mqe.clearCache();
			resp.send(obj);
		});
	});
	server.app.use("/", server.express.static(__dirname+"/public"));
	console.log('using: '+__dirname+"/public");
};


function _addDownloadRow(result, c, row) {
	if( result[row[0]] ) {
		result[row[0]] += ','+row[1];
	} else if( c == 0 ) {
		result[row[0]] = row[1];
	} else {
		for( var i = 0; i < c; i++ ) result[row[0]] += ',';
		result[row[0]] += row[1];
	}
}


function getGroupInfo(req, resp) {
	var filters = JSON.parse(req.query.filters);

	var sort = req.query.sort;
	if( !sort ) sort = '';
	sort = sort.replace(/^ecosis\./,'');

	var query = {};
	var options = {
		sort : sort
	};
	var attributes = {
		_id : true
	}

	if( sort != '' ) attributes[sort] = true;
	if( filters.length > 0 ) query["$and"] = filters;


	collection.find(query, attributes, options).limit(1000).toArray(function(err, items) {
		if( err ) return resp.send({error: true, message: err});
		resp.send(items);
	});
}
