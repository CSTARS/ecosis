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

// express app
exports.bootstrap = function(server) {
	var db = server.mqe.getDatabase();
	

	
	/*db.collection(config.db.mainCollection, function(err, coll) { 
		if( err ) return console.log(err);

		collection = coll;
	});

	db.collection(config.db.cacheCollection, function(err, coll) { 
		if( err ) return console.log(err);

		cacheCollection = coll;
	});*/

	server.app.use("/", server.express.static(__dirname+"/public"));
	
};