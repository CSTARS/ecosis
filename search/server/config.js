
exports.debug = true;

exports.db = {
	// connection string for the database, includes database name
	url             : "mongodb://localhost:27017/esis",
	
	// collection where the queryable items are stored
	mainCollection  : "spectral",
	
	// collection that is used as a cache.  YOU SHOULD NOT TOUCH THIS
	// MQE has rights to delete at any time
	cacheCollection : "spectral_cache",
	
	// collection that is used to store edits to a record.
	//editCollection : 'spectral_edits',
	
	// Filters yours site uses, these will be returned in the results
	// MQE will also use this list to make sure indexes are built on these items
	indexedFilters  : ["Type","Class", "Subclass","Particle Size","keywords","groups","format"],
	
	// currently MQE only allows one sort option, place the attribute you wish to sort on here
	sortBy          : "title",
	
	// currently Mongo only allows the creation of text search on one attribute.  MQE will
	// combine all filters listed below into a single attribute that will be used for
	// the text search index
	textIndexes     : ["Name", "Type", "Class", "Subclass", "Particle Size", "description", 
	                   "title"]
}

exports.import = {
	// js module to run
	module : "/Users/jrmerz/dev/cstars/ckan-mqe-importer/ckan-importer.js",

	// in milliseconds
	interval : 1000 * 60 * 60,

	// if you want to store the import stats in collection
	statsCollection : "spectral_update_stats",

	// directory file parsers are stored
	parsers : "/Users/jrmerz/dev/cstars/esis/search/server/parsers"
}


exports.server = {
	host : "localhost",
	
	// port outside world goes to.  most likely 80
	remoteport : 80,
	
	// local port on machine
	localport : 3003,
	
	// remote hosts that are allowed to access this sites mqe
	allowedDomains : ["testnode.com","localhost","192.168.1.113"],
	
	script : "/Users/jrmerz/dev/cstars/esis/search/server/server.js"
}

exports.ckan = {
	server : "http://esis.casil.ucdavis.edu",

	
}
