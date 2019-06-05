const env = process.env;

module.exports = {

  clientEnv : env.CLIENT_ENV || 'dev',

  server : {
    appRoutes : ['search', 'dataset']
  },

  mongo : {
    database : "ecosis",
    url : `mongodb://${env.MONGO_HOST || 'localhost'}:27017/ecosis`,

    collections : {
      package  : "search",
      spectra : "spectra",
      usda : "usda",
      suggest : "lookup"
    },

    isMapReduce : true,

    geoFilter : ["ecosis.geojson"],

    indexedFilters : ["Theme", "ecosis.organization"],

    sortBy : "ecosis.package_title",

    textIndexes : ["ecosis.package_title","ecosis.organization","ecosis.description",
                          "Keywords", "Theme", "Target Type", "Latin Genus", "Latin Species", "Common Name"],

    searchWhitelist : ["_id", "ecosis.package_title", "ecosis.package_name", "ecosis.spectra_count", "ecosis.organization",
                        "Keywords", "Theme", "Target Type", "ecosis.description", "Common Name"]
  },

  server : {
    env : env.SERVER_ENV || 'dev',
    port : env.SERVER_PORT || 3000,
    url : env.SERVER_URL || "http://localhost:3000",
    googleAnalytics : env.GOOGLE_ANALYTICS_KEY || ''
  },

  ckan : {
    url : env.CKAN_SERVER_URL || "http://localhost:5000"
  }

}
