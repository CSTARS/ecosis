module.exports = {
  mqe : {
    debug : false,
    dev : false,

    db : {
        // connection string for the database, includes database name
        url             : 'mongodb://localhost:27017/ecosis',

        // collection where the queryable items are stored
        mainCollection  : 'search',
        spectraCollection : 'spectra',
        usdaCollection : 'usda',

        isMapReduce     : true,

        geoFilter : ['ecosis.geojson'],

        indexedFilters : ['Theme', 'Target Type', 'ecosis.organization'],

        // currently MQE only allows one sort option, place the attribute you wish to sort on here
        sortBy : 'ecosis.package_title',

        // currently Mongo only allows the creation of text search on one attribute.  MQE will
        // combine all filters listed below into a single attribute that will be used for
        // the text search index
        textIndexes  : ['ecosis.package_title','ecosis.organization','Keywords', 'Theme', 'Ecosystem Type',
                'Target Type', 'ecosis.description', 'Measurement Quantity', 'Acquisition Method',
                'Light Source', 'Target Status', 'Instrument Manufacturer', 'Instrument Model', 'Common Name',
                'Latin Genus', 'Latin Species', 'USDA Symbol', 'Vegetation Type', 'Citation',
                'Funding Source', 'Author', 'Maintainer'],

        searchWhitelist : ['_id', 'ecosis.package_title', 'ecosis.package_name', 'ecosis.spectra_count', 'ecosis.organization',
          'Keywords', 'Theme', 'Target Type', 'ecosis.description', 'Common Name']
    },

    seoFormat : '?result=',

    server : {
      host : 'localhost',

      // port outside world goes to.  most likely 80
      remoteport : 80,

      // local port on machine
      localport : 4003,

      url : 'http://ecospectra.org',

      // remote hosts that are allowed to access this sites mqe
      allowedDomains : ['localhost','ecospectra.org','data.ecospectra.org'],

      googleAnalytics : 'UA-60014992-3',
    },

    logging : {
      dir : '/var/log/node-apps/ecosis-search',
      // max log size
      maxsize : 10485760
    }
  }
};
