'use strict';

module.exports = function(grunt) {
	// Load task
	grunt.loadNpmTasks('grunt-vulcanize');

	// Options
	return {
    default: {
      options: {
        inlineCss : true,
				inlineScripts : true
      },
      files: {
        'dist/elements.html': [
        'public/elements.html'
        ]
      }
    }
  };
};
