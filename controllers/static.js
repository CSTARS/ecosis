const express = require('express');
const path = require('path');
const fs = require('fs');
const spaMiddleware = require('@ucd-lib/spa-router-middleware');
const config = require('../lib/config');
const jsonldTransform = require('../lib/ldjson');
const gitInfo = require('../lib/git-info');
const package = require('../models/package');
const organization = require('../models/organization');
const schema = require('../lib/schema');

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
    getConfig : async (req, res, next) => {
      return next({
        appRoutes : config.server.appRoutes,
        ckanUrl : config.ckan.url,
        serverEnv : config.server.env,
        filterLabelMap : config.mongo.filterLabelMap,
        git : await gitInfo(),
        schema
      });
    },
    template : async (req, res, next) => {
      let jsonld = '';
      let isPackage = false;

      let parts = req.originalUrl.split('/').filter(p => p ? true : false);
      if( parts[0] === 'package' ) {
        isPackage = true;
      }

      if( !isPackage ) {
        return next({jsonld, bundle});
      }

      try {
        let pkg = await package.get(parts[1]);
        pkg.ecosis.organization_info = await organization.get(pkg.ecosis.organization_id);

        let jsonld = JSON.stringify(jsonldTransform(pkg, config.server.url), '  ', '  ');
    
        return next({
          jsonld, bundle
        });
      } catch(e) {
        console.log(e);
        return next({
          jsonld, bundle,
          title : 'Server Error',
          description : 'Invalid URL: '+req.originalUrl,
          keywords : ''
        });
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