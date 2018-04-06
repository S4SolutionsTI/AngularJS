/**
 * http://usejsdoc.org/
 */
module.exports = function(grunt) {
	// Project configuration.
	grunt
			.initConfig({
				pkg : grunt.file.readJSON('package.json'),
				uglify : {
					options : {
						banner : '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
					},
					build : {
						src : 'src/<%= pkg.name %>.js',
						dest : 'build/<%= pkg.name %>.min.js'
					}
				},
			    watch: {
			    	  scripts: {
			    	    files: ['**/*.js'],
			    	    tasks: ['jshint'],
			    	    options: {
			    	      spawn: false,
			    	    },
			    	  },
			    	},
			    	cssmin: {
			    		  target: {
			    		    files: [{
			    		      expand: true,
			    		      cwd: 'release/css',
			    		      src: ['*.css', '!*.min.css'],
			    		      dest: 'release/css',
			    		      ext: '.min.css'
			    		    }]
			    		  }
			    		}
			});

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jasmine');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	// Default task(s).
	grunt.registerTask('default', [ 'uglify']);
};