'use strict';

module.exports = function(grunt) {
	// Load task
	grunt.loadNpmTasks('grunt-vulcanize');

	// Options
	return {
    build: {
      options: {
        inlineCss : true,
				inlineScripts : true
      },
      files: {
        'dist/require.html': [
        'public/require.html'
        ]
      }
    }
  };
};
