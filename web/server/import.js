var sys = require('sys');
var MongoClient = require('mongodb').MongoClient, db;
var parsejpl = require('../../import/speclib-jpl/parse');
var ObjectId = require('mongodb').ObjectID;

exports.importData = function(database, callback) {
	console.log("at import data");
	
	db = database;
    console.log("We are connected to Mongo, all systems go.");
    
    console.log("Parsing text files");
    
    
    onDataLoad(parsejpl.getData(), callback);
}

var onDataLoad = function(data, callback) {
	
	var collection = db.collection('spectral', function(err, collection) { 
		if( err ) return callback(err);
		
		
		var count = data.length;
		for( var i = 0; i < data.length; i++ ) {
			updateRecord(collection, data[i], function(){
				count--;
				if( count == 0 ) {
					console.log("Done.  Mongo is set to go :)");
					callback(null);
				}
			})
		}

	});
}


function updateRecord(collection, record, callback) {
	collection.insert(record, {w :1}, function(err, result) {
		if( err ) console.log(err);
		callback();
	});
}

