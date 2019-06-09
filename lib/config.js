const env = process.env;

let clientPackage = require('../client/public/package.json');
let clientEnv = env.CLIENT_ENV || 'dev';

module.exports = {

  client : {
    env: clientEnv,
    versions : {
      bundle : clientPackage.version,
      loader : clientPackage.dependencies['@ucd-lib/cork-app-load'].replace(/^\D/, '')
    }
  },

  server : {
    appRoutes : ['search', 'dataset'],
    assets : clientEnv === 'prod' ? 'dist' : 'public',
    env : env.SERVER_ENV || 'dev',
    port : env.SERVER_PORT || 3000,
    url : env.SERVER_URL || "http://localhost:3000",
    googleAnalytics : env.GOOGLE_ANALYTICS_KEY || ''
  },

  mongo : {
    database : "ecosis",
    url : `mongodb://${env.MONGO_HOST || 'localhost'}:27017`,
    database : 'ecosis',

    collections : {
      package  : "search",
      spectra : "spectra",
      usda : "usda",
      suggest : "lookup"
    },

    isMapReduce : true,

    geoFilter : ["ecosis.geojson"],

    indexedFilters : ["Theme", "ecosis.organization"],
    // indexedFilters : ['Theme', 'Target Type', 'ecosis.organization'],

    sortBy : "ecosis.package_title",

    textIndexes : ["ecosis.package_title","ecosis.organization","ecosis.description",
                          "Keywords", "Theme", "Target Type", "Latin Genus", "Latin Species", "Common Name"],

    // textIndexes  : ['ecosis.package_title','ecosis.organization','Keywords', 'Theme', 'Ecosystem Type',
    //   'Target Type', 'ecosis.description', 'Measurement Quantity', 'Acquisition Method',
    //   'Light Source', 'Target Status', 'Instrument Manufacturer', 'Instrument Model', 'Common Name',
    //   'Latin Genus', 'Latin Species', 'USDA Symbol', 'Vegetation Type', 'Citation',
    //   'Funding Source', 'Author', 'Maintainer'],

    searchWhitelist : ["_id", "ecosis.package_title", "ecosis.package_name", "ecosis.spectra_count", "ecosis.organization",
                        "Keywords", "Theme", "Target Type", "ecosis.description", "Common Name"]
  },

  google : {
    serviceAccountFile : env.SERVICE_ACCOUNT || '',
  },

  ckan : {
    url : env.CKAN_SERVER_URL || "http://localhost:5000"
  }

}
