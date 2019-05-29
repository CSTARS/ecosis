const env = process.env;

module.exports = {

  clientEnv : env.CLIENT_ENV || 'dev',

  "mqe" : {

    "db" : {
      "database"        : "ecosis",
      "url"             : `mongodb://${env.MONGO_HOST || 'localhost'}:27017/ecosis`,

      "mainCollection"  : "search",
      "spectraCollection" : "spectra",
      "usdaCollection" : "usda",
      "lookupCollection" : "lookup",

      "isMapReduce"     : true,

      "geoFilter" : ["ecosis.geojson"],

      "indexedFilters" : ["Theme", "ecosis.organization"],

      "sortBy"            : "ecosis.package_title",

      "textIndexes"       : ["ecosis.package_title","ecosis.organization","ecosis.description",
                            "Keywords", "Theme", "Target Type", "Latin Genus", "Latin Species", "Common Name"],

      "searchWhitelist" : ["_id", "ecosis.package_title", "ecosis.package_name", "ecosis.spectra_count", "ecosis.organization",
                          "Keywords", "Theme", "Target Type", "ecosis.description", "Common Name"]
    },

    "seoFormat" : "?result=",

    "server" : {
      "host" : "localhost",
      "remoteport" : 80,
      "localport" : env.SERVER_PORT || 3000,
      "url" : env.SERVER_URL || "http://localhost:3000",
      "allowedDomains" : [],
      "googleAnalytics" : "UA-60014992-3"
    },
    "rest" : {
      "get" : "/package/get",
      "query" : "/package/query",
      getParamParser : function(query) {
        if( query.id ) {
          return {'_id': query.id};
        } else if ( query.package_id ) {
          return {'_id': query.package_id};
        } else if ( query.package_name ) {
          return {'value.ecosis.package_name': query.package_name};
        }
        return {'_id': query._id};
      }
    },
    "ckan" : {
      "server" : env.CKAN_SERVER_URL || "http://localhost:5000"
    }
  }

}
