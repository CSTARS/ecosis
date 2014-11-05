
exports.debug = true;

exports.node = 'node';

exports.dev = true;

exports.db = {
	//initd           : "mongod --port 27017",

	// connection string for the database, includes database name
	url             : "mongodb://localhost:27017/esis",
	//url             : "mongodb://192.168.1.6:27018/esis",
	
	// collection where the queryable items are stored
	mainCollection  : "search",
	spectraCollection : "spectra",
	packageCollection : "package",

	isMapReduce     : true,


    indexedFilters : ['ecosis.organization_name','ecosis.keywords','Family','Category'],  

    // currently MQE only allows one sort option, place the attribute you wish to sort on here
    sortBy            : 'ecosis.package_title',
    
    // currently Mongo only allows the creation of text search on one attribute.  MQE will
    // combine all filters listed below into a single attribute that will be used for
    // the text search index
    textIndexes       : ['ecosis.package_title','Common Name','Type','Class','Subclass','Genus','Category','Family']
}

/*
exports.import = {
	// js module to run
	module : "/Users/jrmerz/dev/cstars/esis/search/import.js",

	// in milliseconds
	interval : 1000 * 60 * 60,

	//host: 'http://192.168.1.4:5000',
	host: 'http://data.ecospectra.org',

	// if you want to store the import stats in collection
	statsCollection : 'spectral_update_stats',

	// metadata attributes from item.metadata that should be promoted to first class attributes
	firstClassMetadata : ['type', 'form', 'usdanrcs_common_name']
}*/


exports.server = {
	host : "localhost",
	
	// port outside world goes to.  most likely 80
	remoteport : 80,
	
	// local port on machine
	localport : 3003,
	
	// remote hosts that are allowed to access this sites mqe
	allowedDomains : ["testnode.com","localhost","192.168.1.113"],
	
	script : "/Users/jrmerz/dev/cstars/esis/search/server.js"
}

exports.ckan = {
	//server : "http://192.168.2.109:5000",
	server : 'http://data.ecospectra.org',

	keyFile : '/etc/node-ckan/ckan-local.json'	
}
