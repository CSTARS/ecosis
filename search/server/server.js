/**
 * This will actually extend the MQE expressjs server
 * 
 * make sure mongo is fired up w/ text search enabled
 * mongod --setParameter textSearchEnabled=true
 * 
 */
var config = require(process.argv[2]);

var ObjectId = require('mongodb').ObjectID;
var importer = require('./importV2');
var async = require('async');

var collection;
var cacheCollection;

// express app
exports.bootstrap = function(server) {
	var db = server.mqe.getDatabase();
	

	
	db.collection(config.db.mainCollection, function(err, coll) { 
		if( err ) return console.log(err);

		collection = coll;
	});

	db.collection(config.db.cacheCollection, function(err, coll) { 
		if( err ) return console.log(err);

		cacheCollection = coll;
	});
	
	server.app.get('/update', function(req, res){
		importer.run(config, function(data){
			clearAndAddRecord(data, res);
		});
	});


	server.app.use("/", server.express.static(__dirname+"/public"));
	
};


function clearAndAddRecord(data, res) {
	collection.remove({},function(err, removed){
	    if( err && verbose ) console.log("Failed to remove old records");
		addRecords(data, res);
	});
}

function addRecords(data, res) {
	var records = [];
	for( var i = 0; i < data.length; i++ ) {
		for( var j = 0; j < data[i].length; j++ ) {5
			var d = data[i][j];
			for( var key in d.metadata ) {
				if( key == 'spectra' ) continue;
				d[key] = d.metadata[key];
			}
			delete d.metadata;
			records.push(d);
		}
	}

	async.eachSeries(
		records, 
		function(record, next){
			collection.insert(record, {w :1}, function(err, result) {
				next();
			});
		},
		function(err){
			cacheCollection.remove({},function(err, removed){
				res.send('done with import');
			});
		}
	);
}
