var router = require('express').Router();
const config = require('../lib/config');
const mongo = require('../lib/mongo')

router.get('/sitemap.xml', async (req, res) => {
  res.set('Content-Type', 'application/xml');

  let collection = await mongo.packagesCollection();
  let pkgNames = await collection.find({}, {projection : {'value.ecosis.package_name': 1}}).toArray();

  let urls = pkgNames.map(pkg => `<url>
  <loc>${config.server.url}/package/${pkg.value.ecosis.package_name}</loc>
  <changefreq>weekly</changefreq>
  <priority>.5</priority>
</url>`).join('\n')
  
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls}
    </urlset>`;

  res.send(xml);
});

router.get('/robots.txt', (req, res) => {
  let allow = 'Disallow: /';
  if( config.server.url.match('https://ecosis.org') ) {
    allow = 'Allow: /';
  }

  res.set('Content-Type', 'text/plain');
  res.send(`User-agent: * 
${allow}
Sitemap: ${config.server.url}/sitemap.xml`);
});

module.exports = router;