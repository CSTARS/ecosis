
exports.debug = true;

exports.node = 'node';

exports.dev = true;

var root = '/Users/jrmerz/dev/cstars/EcoSIS/ecosis-search/search';

exports.db = {
	//initd           : "mongod --port 27017",

	// connection string for the database, includes database name
	//url             : "mongodb://localhost:27017/esis",
	url             : "mongodb://192.168.1.2:27018/esis",

	// collection where the queryable items are stored
	mainCollection  : "search",
	spectraCollection : "spectra",
	schemaCollection : "schema",
	usdaCollection : "usda",

	isMapReduce     : true,


  indexedFilters : ['ecosis.organization', 'Keywords', 'Theme', 'Target Type'],

  // currently MQE only allows one sort option, place the attribute you wish to sort on here
  sortBy            : 'ecosis.package_title',

  // currently Mongo only allows the creation of text search on one attribute.  MQE will
  // combine all filters listed below into a single attribute that will be used for
  // the text search index
  textIndexes       : ['ecosis.package_title','Keywords', 'Theme', 'Target Type'],

	blacklist : ['_id', 'ecosis.geojson']
}

exports.server = {
	host : "localhost",

	// port outside world goes to.  most likely 80
	remoteport : 80,

	// local port on machine
	localport : 3003,

	// remote hosts that are allowed to access this sites mqe
	allowedDomains : ["testnode.com","localhost","192.168.1.113"],

	googleAnalytics : 'UA-60014992-3',

	script : root+"/server.js"
}

exports.ckan = {
	server : "http://192.168.1.2:5000",
	//server : 'http://data.ecospectra.org',

	keyFile : '/etc/node-ckan/ckan-local.json'
}
