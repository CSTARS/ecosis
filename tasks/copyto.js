'use strict';

module.exports = function copyto(grunt) {
    // Load task
    grunt.loadNpmTasks('grunt-copy-to');

    // Options
    return {
        build: {
            files: [{
                cwd: 'public',
                src: ['index.html','schema.json', 'result.handlebars'],
                dest: 'dist/'
            },
            {
                cwd: 'public/bower_components/font-awesome',
                src: ['fonts/**/*'],
                dest: 'dist/'
            }],
            options: {
                ignore: []
            }
        }
    };
};
