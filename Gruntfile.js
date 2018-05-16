/* global module */
/* global require */
module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        paths: {
            src: {
                js: 'src/**/*.js',
                css: 'public/css/**/*.css'
            },
            dest: {
                js: 'public/js/angularjs.js',
                jsMin: 'public/js/angularjs.min.js',
                css: 'public/css/angularjs.css',
                cssMin: 'public/css/**/*.min.css'
            }
        },
        concat: {
            js: {
                options: {
                    separator: ';'
                },
                src: '<%= paths.src.js %>',
                dest: '<%= paths.dest.js %>'
            },
            css: {
                options: {
                    separator: ';'
                },
                src: '<%= paths.src.css %>',
                dest: '<%= paths.dest.css %>'
            }
        },
        uglify: {
            options: {
                // sourceMap: true,
                // sourceMapIncludeSources: true,
                // sourceMapIn: '<%= paths.dest.js %>.map'
                compress: true,
                mangle: false
            },
            target: {
                src: '<%= paths.src.js %>',
                dest: '<%= paths.dest.jsMin %>'
            }
        },
        cssmin: {
            target: {
                files: {
                    'public/css/angularjs.min.css': 'public/css/angularjs.css'
                }
            }
        },
        less: {
            options: {
                compress: true
            },
            compile: {
                files: {
                    'public/css/angularjs.css': 'src/less/angularjs.less'
                }
            }
        },
        clean: {
            init: ['public/js/**/angularjs.min.js'],
            js: ['public/js/**/*.js', '!public/js/**/*.min.js'],
            css: ['<%= paths.src.css %>', '!<%= paths.dest.cssMin %>']
        },
        jshint: {
            all: ['!Gruntfile.js', 'src/app/angularjs/**/{,*/}*.js',
                '!src/app/angularjs/layout/**'
            ],
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            }
        },
        replace: {
            dist: {
                options: {
                    patterns: [{
                        match: 'timestamp',
                        replacement: grunt.template.today('yyyymmddHHMMSS')
                    }]
                },
                files: [{
                    expand: true,
                    flatten: true,
                    src: ['src/app/angularjs/layout/index.html'],
                    dest: 'public/'
                }]
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true,
                    conservativeCollapse: true,
                    preserveLineBreaks: false,
                    keepClosingSlash: true
                        // necessário, pois quando em falso, quebra o angular em
                        // algumas
                        // páginas
                        // maxLineLength: 80
                },
                files: [{
                    expand: true,
                    cwd: 'src/app/angularjs/layout/',
                    src: 'index.html',
                    dest: 'public/'
                }, {
                    expand: true,
                    cwd: 'src/app/angularjs/components/',
                    src: '*.html',
                    dest: 'public/js/'
                }, {
                    expand: true,
                    cwd: 'src/app/angularjs/body/',
                    src: '*.html',
                    dest: 'public/js/'
                }, {
                    expand: true,
                    cwd: 'src/app/angularjs/header/',
                    src: '*.html',
                    dest: 'public/js/'
                }, {
                    expand: true,
                    cwd: 'src/app/angularjs/footer/',
                    src: '*.html',
                    dest: 'public/js/'
                }]
            }
        },
        bootlint: {
            files: ['src/app/angularjs/**/*.html',
                '!src/app/angularjs/layout/**'
            ],
            options: {
                relaxerror: {
                    'E001': [],
                    'E039': [],
                    'W001': [],
                    'W002': [],
                    'W003': [],
                    'W004': [],
                    'W005': []
                }
            }
        },
        watch: {
            less: {
                files: ['src/less/*.less'],
                tasks: ['less', 'cssmin', 'concat:css', 'clean:css'],
                options: {
                    spawn: false
                }
            },
            uglify: {
                files: ['src/app/angularjs/**/*.js',
                    '!src/app/angularjs/layout/**/*.js'
                ],
                tasks: ['jshint', 'clean:init', 'uglify', 'concat:js',
                    'clean:js'
                ]
            },
            htmlmin: {
                files: ['src/app/angularjs/**/*.html',
                    '!src/app/angularjs/layout/js/**/*.html'
                ],
                tasks: ['bootlint', 'htmlmin']
            }
        }
    });
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    // grunt.loadNpmTasks('grunt-contrib-jasmine');
    // grunt.loadNpmTasks('grunt-contrib-imagemin');
    // grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    // grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-bootlint');
    // Default task(s).
    grunt.registerTask('deploy', 'concat vs. uglify', function() {
        grunt.task.run('clean:init');
        grunt.task.run('jshint');
        grunt.task.run('bootlint');
        grunt.task.run('less');
        grunt.task.run('cssmin');
        // grunt default:true
        // if (true) {
        // Update the uglify dest to be the result of concat
        var dest = grunt.config('concat.js.dest');
        grunt.config('uglify.target.src', dest);
        grunt.task.run('concat');
        // }
        // grunt.task.run('replace');
        // grunt default
        grunt.task.run('uglify');
        grunt.task.run('bootlint');
        grunt.task.run('htmlmin');
        grunt.task.run('clean:js');
        grunt.task.run('clean:css');
    });
    grunt.registerTask('default', ['deploy']);
}