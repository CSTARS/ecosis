'use strict';

module.exports = function copyto(grunt) {
    // Load task
    grunt.loadNpmTasks('grunt-copy-to');

    // Options
    return {
        build: {
            files: [{
                cwd: 'public',
                src: ['index.html','schema.json', 'result.handlebars','assets/**/*','manifest.json'],
                dest: 'dist/'
            },
            {
                cwd: 'public/js',
                src: ['webcomponents.js'],
                dest: 'dist/js/'
            },
            {
                cwd: 'public/bower_components/font-awesome/',
                src: ['fonts/*','css/font-awesome.css'],
                dest: 'dist/font-awesome/'
            },
            {
                cwd: 'public/bower_components/leaflet/dist',
                src: ['images/**/*'],
                dest: 'dist/'
            }],
            options: {
                ignore: []
            }
        }
    };
};
