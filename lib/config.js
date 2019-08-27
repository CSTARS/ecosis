const env = process.env;

let clientPackage = require('../client/public/package.json');
let clientEnv = env.CLIENT_ENV || 'dev';

module.exports = {

  client : {
    env: clientEnv,
    versions : {
      bundle : clientPackage.version,
      loader : clientPackage.dependencies['@ucd-lib/cork-app-load'].replace(/^\D/, '')
    },
    seo : {
      title : 'EcoSIS - Spectral Library',
      keywords : 'EcoSIS, Ecological Spectral Information System, Spectral Library',
      description : 'EcoSIS, Ecological, Spectral, Library'
    },
    googleAnalytics : env.GOOGLE_ANALYTICS_KEY || ''
  },

  server : {
    appRoutes : ['search', 'package'],
    assets : clientEnv === 'prod' ? 'dist' : 'public',
    env : env.SERVER_ENV || 'dev',
    port : env.SERVER_PORT || 8000,
    url : env.SERVER_URL || "http://localhost:8000"
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

    spectra : {
      indexes : [
        'Common Name', 'Latin Genus', 'Latin Species',
        'ecosis.package_id'
      ]
    },

    isMapReduce : true,

    geoFilter : 'ecosis.geojson',

    indexedFilters : [
      "value.Theme", 
      "value.ecosis.organization",
      "value.Latin Genus",
      "value.Latin Species",
      "value.Common Name"
    ],

    filterLabelMap : {
      'ecosis.organization' : 'Organization'
    },

    // indexedFilters : ['Theme', 'Target Type', 'ecosis.organization'],

    sortBy : "value.ecosis.package_title",

    textIndexes : {
      "value.ecosis.package_title": 10,
      "value.ecosis.organization": 2,
      "value.ecosis.description": 2,
      "value.Keywords" : 7,
      "value.Theme" : 5,
      "value.Target Type" : 2, 
      "value.Latin Genus" : 5, 
      "value.Latin Species": 5, 
      "value.Common Name": 5
    },

    // textIndexes  : ['ecosis.package_title','ecosis.organization','Keywords', 'Theme', 'Ecosystem Type',
    //   'Target Type', 'ecosis.description', 'Measurement Quantity', 'Acquisition Method',
    //   'Light Source', 'Target Status', 'Instrument Manufacturer', 'Instrument Model', 'Common Name',
    //   'Latin Genus', 'Latin Species', 'USDA Symbol', 'Vegetation Type', 'Citation',
    //   'Funding Source', 'Author', 'Maintainer'],

    searchProjection : {
      "value._id": 1,
      "value.ecosis.package_title" : 1, 
      "value.ecosis.package_name" : 1,
      "value.ecosis.spectra_count" : 1,
      "value.ecosis.organization" : 1,
      "value.Keywords" : 1,
      "value.Theme" : 1,
      "value.Target Type" : 1,
      "value.ecosis.description" : 1,
      "value.Common Name" : 1
    }
  },

  google : {
    serviceAccountFile : env.SERVICE_ACCOUNT || '',
  },

  ckan : {
    url : env.CKAN_SERVER_URL || "https://data.ecosis.org"
  },

  ecosml : {
    url : env.ECOSML_URL || "https://ecosml.org"
  }

}
