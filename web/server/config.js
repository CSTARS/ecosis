
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
	indexedFilters  : ["Type","Class", "Subclass","Owner","Particle Size"],
	
	// currently MQE only allows one sort option, place the attribute you wish to sort on here
	sortBy          : "organization",
	
	// currently Mongo only allows the creation of text search on one attribute.  MQE will
	// combine all filters listed below into a single attribute that will be used for
	// the text search index
	textIndexes     : ["Name", "Type", "Class", "Subclass", "Particle Size", "Sample No", 
	                   "Owner", "Wavelength range", "Origin", "Description", "Measurement", 
	                   "First Column", "Second Column", "X Units", "Y Units", "First X Value", 
	                   "Last X Value", "Number of X Values", "Additional Information"],
	
	// local script to be fired when update is called via admin api call
	importScript    : "/Users/jrmerz/dev/cstars/ESIS/web/server/import.js",
		
}


exports.server = {
	host : "localhost",
	
	localport : 3000,
	
	script : "/Users/jrmerz/dev/cstars/ESIS/web/server/server.js"
}
