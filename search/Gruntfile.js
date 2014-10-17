'use strict';

module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    grunt.loadNpmTasks('grunt-manifest');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-vulcanize');

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
                        '*.{html,handlebars}',
                        //'bower_components/**'
                        'css/deep.css'
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
            // this should be done prior to running normal dev server, generates the webcomponets base.css file
            // also handles copying bower_components font-awesome /fonts dir
            'generate-deep-css' : {
                options: {
                    stdout: true,
                    stderr: true
                },
                command: 'rm -rf <%= yeoman.app %>/css/deep.css <%= yeoman.app %>/css/tmp.* && ' +
                         'cp <%= yeoman.app %>/bower_components/bootstrap/dist/css/bootstrap.css <%= yeoman.app %>/css/tmp.bootstrap.css && '+
                         'sed -i "" -e \':a\' -e \'N\' -e \'$!ba\' -e \'s/\\}\\(\\n *\\)\\([a-z\\.\\*]\\)/\\}\\1html \\/deep\\/ \\2/g\' <%= yeoman.app %>/css/tmp.bootstrap.css &&' +
                         'sed -i "" -e \':a\' -e \'N\' -e \'$!ba\' -e \'s/\\,\\(\\n *\\)\\([a-z\\.\\*]\\)/\\,\\1html \\/deep\\/ \\2/g\' <%= yeoman.app %>/css/tmp.bootstrap.css &&' +
                         'sed -i "" -e \':a\' -e \'N\' -e \'$!ba\' -e \'s/\\,\\( *\\)\\([a-z\\.]\\)/\\,\\1html \\/deep\\/ \\2/g\' <%= yeoman.app %>/css/tmp.bootstrap.css &&' +
                         'sed -i "" -e \':a\' -e \'N\' -e \'$!ba\' -e \'s/\\(@media[a-z0-9()-\\: ]*{\\n\\)/\\1 html \\/deep\\//g\' <%= yeoman.app %>/css/tmp.bootstrap.css &&' +
                         
                         // fix the modal selector
                         'sed -i "" -e \':a\' -e \'N\' -e \'$!ba\' -e \'s/html \\/deep\\/ \\.modal-open \\.modal/.modal-open \\/deep\\/ .modal/g\' <%= yeoman.app %>/css/tmp.bootstrap.css &&' +

                         // there is issue where the regex adds html /deep/ to a animate keyframe set, this cleans it
                         'sed -i "" -e \':a\' -e \'N\' -e \'$!ba\' -e \'s/  html \\/deep\\/ to {/  to {/g\' <%= yeoman.app %>/css/tmp.bootstrap.css &&' +
                         'cp <%= yeoman.app %>/bower_components/animate-css/animate.css <%= yeoman.app %>/css/tmp.animate.css && '+
                         'sed -i "" -e \':a\' -e \'N\' -e \'$!ba\' -e \'s/\\(\\n\\)\\(\\.[a-zA-Z]*\\)/\\1html \\/deep\\/ \\2/g\' <%= yeoman.app %>/css/tmp.animate.css && ' +
                         'cat '+
                         '<%= yeoman.app %>/css/tmp.bootstrap.css '+
                         '<%= yeoman.app %>/css/tmp.animate.css '+
                         '>> <%= yeoman.app %>/css/deep.css && '+
                         'rm -rf <%= yeoman.app %>/css/tmp.*'

            },

            // usemin compresses the css and js, makeing the components lib
            // unnecessary except the polymer script
            'clear-bower-components' : {
                options: {
                    stdout: true,
                    stderr: true
                },
                command: 'rm -rf <%= yeoman.dist %>/components/*'
            }
        },

        vulcanize: {
            default : {
                options: {
                    csp : true,
                    inline : true
                },
                files : {
                    '<%= yeoman.dist %>/elements.html': ['<%= yeoman.app %>/elements.html']
                }
            }
        },

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
        'vulcanize',
        'shell:clear-bower-components'
    ]);

};
