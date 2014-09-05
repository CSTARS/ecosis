'use strict';

module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    grunt.loadNpmTasks('grunt-manifest');
    grunt.loadNpmTasks('grunt-shell');

    // Define the configuration for all the tasks
    grunt.initConfig({

        // Project settings
        yeoman: {
            // Configurable paths
            app: 'app',
            dist: 'dist',
        },

        // Empties folders to start fresh
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%= yeoman.dist %>/*',
                        '!<%= yeoman.dist %>/.git*'
                    ]
                }]
            },
            server: '.tmp'
        },

        // Renames files for browser caching purposes
        rev: {
            dist: {
                files: {
                    src: [
                        '<%= yeoman.dist %>/scripts/build.js',
                        '<%= yeoman.dist %>/css/build.css'
                    ]
                }
            }
        },

        // Reads HTML for usemin blocks to enable smart builds that automatically
        // concat, minify and revision files. Creates configurations in memory so
        // additional tasks can operate on them
        useminPrepare: {
            options: {
                root : '<%= yeoman.app %>',
                dest: '<%= yeoman.dist %>',
                verbose : true
            },
            html: '<%= yeoman.app %>/index.html'
        },

        // Performs rewrites based on rev and the useminPrepare configuration
        usemin: {
            options: {
                assetsDirs: ['<%= yeoman.dist %>']
            },
            html: ['<%= yeoman.dist %>/{,*/}*.html']
            //css: ['<%= yeoman.dist %>/css/{,*/}*.css']
        },

        
        // Copies remaining files to places other tasks can use
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>',
                    dest: '<%= yeoman.dist %>',
                    src: [
                        '*.{html,handlebars}'
                        //'bower_components/**'
                        //'css/**',
                    ]
                },
                {
                    expand: true,
                    flatten :true ,
                    src: ['bower_components/font-awesome/fonts/**'], 
                    dest: 'dist/fonts/',
                    cwd: '<%= yeoman.app %>',
                    filter: 'isFile'
                }]
            }
        },


        shell: {
            // usemin compresses the css and js, makeing the components lib
            // unnecessary except the polymer script
            'clear-bower-components' : {
                options: {
                    stdout: true,
                    stderr: true
                },
                command: 'rm -rf <%= yeoman.dist %>/components/*'
            }
        }

    });

    grunt.registerTask('build', [
        'clean:dist',
        'copy:dist',
        'useminPrepare',
        'concat:generated',
        'cssmin:generated',
        'uglify:generated',
        'rev',
        'usemin',
        'shell:clear-bower-components'
    ]);

};
