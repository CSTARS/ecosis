const express = require('express');
const path = require('path');
const spaMiddleware = require('@ucd-lib/spa-router-middleware');
const config = require('../lib/config');
const jsonldTransform = require('../lib/ldjson');
const gitInfo = require('../lib/git-info');
const package = require('../models/package');
const organization = require('../models/organization');
const schema = require('../lib/schema');
const logger = require('../lib/logger');
const mongo = require('../lib/mongo');

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
  logger.info('Service static dir', assetsDir);

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
        ecosmlUrl : config.ecosml.url,
        serverEnv : config.server.env,
        filterLabelMap : config.mongo.filterLabelMap,
        geoFilter : config.mongo.geoFilter,
        git : await gitInfo(),
        seo : config.client.seo,
        gaCode : config.client.googleAnalytics || '',
        schema
      });
    },
    template : async (req, res, next) => {
      // handle old redirect
      // this /?result=[id] url was used for SEO handling when # was still used
      // for JS routes client side.
      if( req.query.result ) {
        try {
        let pkg = await package.get(req.query.result);
        return res.redirect('/package/'+pkg.ecosis.package_name);
        } catch(e) {
          logger.error('Failed to lookup package for redirect: '+req.query.result, e)
        }
      }


      let jsonld = '';
      let isPackage = false;

      let parts = req.originalUrl.split('/').filter(p => p ? true : false);
      if( parts[0] === 'package' ) {
        isPackage = true;
      }

      if( !isPackage ) {
        return next({
          title : config.client.seo.title,
          keywords : config.client.seo.keywords,
          description : config.client.seo.description,
          jsonld, 
          bundle
        });
      }

      try {
        let pkg = await package.get(parts[1]);
        pkg.ecosis.organization_info = await organization.get(pkg.ecosis.organization_id);

        let seo = jsonldTransform(pkg, config.server.url);
        let jsonld = JSON.stringify(seo.ldjson, '  ', '  ');
    
        return next({
          title : seo.title || '',
          keywords : seo.keywords || '',
          description : seo.description || '',
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