/**
 * http://usejsdoc.org/
 */
module.exports = function(grunt) {
    // Project configuration.
    grunt
            .initConfig({
                pkg : grunt.file.readJSON('package.json')
            });

    // Load the plugin that provides the "uglify" task.
//  grunt.loadNpmTasks('grunt-contrib-uglify');
//  grunt.loadNpmTasks('grunt-contrib-jasmine');
//  grunt.loadNpmTasks('grunt-contrib-imagemin');
//  grunt.loadNpmTasks('grunt-contrib-copy');
//  grunt.loadNpmTasks('grunt-contrib-clean');
//  grunt.loadNpmTasks('grunt-contrib-htmlmin');
//  grunt.loadNpmTasks('grunt-contrib-watch');
//  grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Default task(s).
    grunt.registerTask('default', []);
};