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

	server.app.get('/rest/group/getInfo', function(req, resp){
		getGroupInfo(req, resp);
	});

	server.app.get('/rest/import', function(req, resp){
		server.runImport(function(obj){
			resp.send(obj);
		});
	});

	server.app.use("/", server.express.static(__dirname+"/public"));
};


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
