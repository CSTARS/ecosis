const express = require('express');
const path = require('path');
const fs = require('fs');
const spaMiddleware = require('@ucd-lib/spa-router-middleware');
const config = require('../lib/config');
const jsonld = require('../lib/ldjson');
const package = require('../models/package');

// const authUtils = require('./auth');
// const records = require('../models/records');
// const collections = require('../models/collections');
// const transform = require('./seo-transform');
// const collectionTransform = require('./seo-collection-transform');

const bundle = `
  <script>
    var CORK_LOADER_VERSIONS = {
      loader : '${config.client.versions.loader}',
      bundle : '${config.client.versions.bundle}'
    }
  </script>
  <script src="/loader/loader.js?_=${config.client.versions.loader}"></script>`;

module.exports = (app) => {
  let assetsDir = path.join(__dirname, '..', 'client', config.server.assets);

  /**
   * Setup SPA app routes
   */
  spaMiddleware({
    app: app,
    htmlFile : path.join(assetsDir, 'index.html'),
    isRoot : true,
    appRoutes : config.server.appRoutes,
    getConfig : async (req, res) => {
      return {
        ckanUrl : config.ckan.url,
        serverEnv : config.server.env
      }
    },
    template : async (req, res) => {
      let jsonld = '';
      let isDataset = false;

      let parts = req.originalUrl.split('/').filter(p => p ? true : false);
      if( parts[0] === 'dataset' ) {
        isDataset = true;
      }

      if( !isDataset ) {
        return {jsonld, bundle};
      }

      try {
        let pkg = await package.get(parts[1]);
        let jsonld = JSON.stringify(ldjson(pkg, config.server.url), '  ', '  ');
    
        return {
          jsonld, bundle
        }
      } catch(e) {
        console.log(e);
        return {
          jsonld, bundle,
          title : 'Server Error',
          description : 'Invalid URL: '+req.originalUrl,
          keywords : ''
        }
      }
    }
  });

  /**
   * Setup static asset dir
   */
  app.use(express.static(assetsDir, {
    immutable: true,
    maxAge: '1y'
  }));
}