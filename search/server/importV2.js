var async = require('async');
var request = require('request');
var md5 = require('MD5');
var MongoClient = require('mongodb').MongoClient, db, collection;
var importLog, lastRun, config, count;

function run() {
	lastRun = new Date();
	count = {
			error : 0,
			update : 0,
			found : 0,
			remove : 0,
			insert : 0
	}
	importLog = "\n==== Spectra Import @"+lastRun.toLocaleString()+" ====\n";

	connect();
}

function connect() {	
	MongoClient.connect(config.db.url, function(err, database) {
		if(!err) {
			db = database;
			console.log('connected to mongo db: '+config.db.url);
		} else {
			console.log('unable to connect to: '+config.db.url);
			console.log(err);
			return;
		}

		db.collection(config.db.mainCollection, function(err, c) { 
			if( err ) {
				console.log('unable to connect to collection: '+config.db.mainCollection);
				console.log(err);
				return;
			}
			collection = c;

			console.log('found main collection: '+config.db.mainCollection+"\nInserting items into mongo");
					
			getSpectra();
		});
	});
}

function getSpectra() {
	request(config.import.host+'/spectra/all', function (error, response, body) {
		if( error ) return console.log(error);
		if( response.statusCode != 200) return console.log('Server responded with status '+response.statusCode);

		var data = JSON.parse(body);
		download(data.results, function(){
			removeOldSpectra();
		});
	});
}

function download(resources, callback) {

	async.eachSeries(
		resources, 
		function(r, next){
			//console.log('Requesting: '+config.import.host+'/spectra/get?id='+r.id);
			request(config.import.host+'/spectra/get?id='+r.id, function (error, response, body) {
			  	if (!error && response.statusCode == 200) {
			  		addUpdateSpectra(JSON.parse(body), function(){
			  			next();
			  		});
			  	} else {
			  		next();
			  	}
			});
		},
		function(err){
			if( err ) console.log(err);
			callback();
		}
	);
}

function addUpdateSpectra(pkgSpectra, callback) {
	var search, spectra_id;

	var list = pkgSpectra.data;
	if( !Array.isArray(pkgSpectra.data) ) list = list.data;

	async.eachSeries(
		list,
		function(item, next) {
			count.found++;
			search = {
				pkg_id     : pkgSpectra.pkg_id,
				spectra_id : item.spectra_id ? item.spectra_id : md5(JSON.stringify(item.spectra))
			};

			// clean all keys in metadata, mongo doesn't like '.'
			for( var key in item.metadata ) {
				if( key.indexOf('.') != -1 ) {
					var value = item.metadata[key];
					delete item.metadata[key];
					item.metadata[key.replace(/\./g,'')] = value;
				}
			}

			// promote metadata attributes to first class attributes
			for( var i = 0; i < config.import.firstClassMetadata.length; i++ ) {
				var attr = config.import.firstClassMetadata[i];
				if( item.metadata && item.metadata[attr] ) {
					item[attr] = item.metadata[attr];
				}
			}

			// add extras
			item.pkg_id = search.pkg_id;
			item.spectra_id = search.spectra_id;
			item.pkg_name = pkgSpectra.pkg_name;
			item.pkg_title = pkgSpectra.pkg_title;

			collection.find(search).toArray(function(err, items) {
				if( err ) {
					console.log(err);
					return next();
				}

				if( items.length > 0 ) { // update
					update(item, items[0], next);
				} else { // insert
					add(item, next);
				}
			});
		},
		function(err) {
			callback();
		}
	);
}

function update(newItem, oldItem, next) {
	var changed = false;
	if( itemChanged(newItem, oldItem) ) {
		changed = true;
		newItem.lastUpdate = lastRun.toLocaleString();
	} else {
		newItem.lastUpdate = oldItem.lastUpdate;
	}
	newItem.lastRun = lastRun.toLocaleString();

	collection.update({_id: oldItem._id}, newItem, function(err, result) {
		if( err ) {
			count.error++;
			console.log(err);
		} else if( changed ) {
			count.update++;
		}
		next();
	});
}

function add(item, next) {
	item.lastRun = lastRun.toLocaleString();
	item.lastUpdate = lastRun.toLocaleString();

	collection.insert(item, {w :1}, function(err, result) {
		if( err ) {
			count.error++;
			console.log(err);
		} else {
			count.insert++;
		}

		next();
	});
}

function itemChanged(item1, item2) {
	var key, tmp1, tmp2;
	var ignoreList = ['spectra', 'lastRun', '_id', 'lastUpdate'];
	for( key in item1 ) {
		if( ignoreList.indexOf(key) > -1 ) continue;

		if( item2[key] == null ) {
		//	console.log('new item has new key: '+key);
			return true;
		}

		tmp1 = (typeof item1[key] == 'object') ? JSON.stringify(item1[key]) : item1[key];
		tmp2 = (typeof item2[key] == 'object') ? JSON.stringify(item2[key]) : item2[key];
		
		if( tmp1 != tmp2 ) {
		//	console.log('value mismatch: '+tmp1+' '+tmp2);
			return true;
		}
	}
	for( key in item2 ) {
		if( ignoreList.indexOf(key) > -1 ) continue;
		if( item1[key] == null ) {
		//	console.log('new item does not have key: '+key);
			return true;
		}
	}
	return false;
}

function removeOldSpectra() {
	collection.find({lastRun : { $ne : lastRun.toLocaleString() }}).toArray(function(err, items){
		if( err ) {
			console.log('failed to fetch records to remove');
			console.log(err);
			return writeLog();
		}
		
		if( items.length == 0 ) {
			writeLog();
		} else {
			count.remove = items.length;
			collection.remove({lastRun : { $ne : lastRun.toLocaleString() }},function(err, removed){
				if( err ) console.log(err);
				writeLog();
		    });
		}
	});
}

function writeLog() {
	importLog += 
			count.found +" items found\n"+
			count.update +" items required updated\n"+
			count.insert +" items were new\n"+
			count.error+" items error'd on insert/update\n"+
			count.remove+" items removed\n"+
			"Import of ckan finished @"+new Date().toLocaleString()+"\n";
	
	importLog += "==== End Import ====\n";
	console.log(importLog);
	
	count.timestamp = new Date();
	
	// add to mongo stats
	// example day query: db.items_update_stats.find({timestamp: {$gte: new Date(2013, 7, 16), $lt: new Date(2013, 7, 17)}});
	if( config.import.statsCollection ) {
		db.collection(config.import.statsCollection, function(err, collection) { 
			collection.insert(count,function(err, removed){
				if( err ) console.log({error:true,message:"Error error adding stats to collection items_update_stats",errObj:err});
				db.close();
		    });
		});
	} else {
		db.close();
	}
}


// the config file should be the second argument
if( process.argv.length < 3 ) {
    console.log("you must provide the location of your config file");
    process.exit();
}

config = require(process.argv[2]);

run();