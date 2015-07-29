'use strict';

var config = global.setup.config;

module.exports = function (router) {
    router.get('/', function(req, res){
      res.set('Content-Type', 'application/javascript');

      if( !config.server.googleAnalytics ) {
        return res.send('');
      }

      res.send(
          '(function(i,s,o,g,r,a,m){i[\'GoogleAnalyticsObject\']=r;i[r]=i[r]||function(){'+
          '(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),'+
          'm=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)'+
          '})(window,document,\'script\',\'//www.google-analytics.com/analytics.js\',\'ga\');'+
          'ga(\'create\', \''+config.server.googleAnalytics+'\', \'auto\');'+
          'ga(\'send\', \'pageview\');'+
          '$(window).on(\'hashchange\',function(){ga(\'send\',\'pageview\',{\'page\':location.pathname+location.search+location.hash})});'
      );
  });
};
