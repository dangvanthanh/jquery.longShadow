module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*\n* LongShadow jQuery Plugin\n* Copyright (c) 2013 <%= pkg.author %>\n* Version: <%= pkg.version %>\n* Source: <%= pkg.repository.url %>\n* Licensed under <%= pkg.license %> \n*/\n'
      },
      build: {
        src: 'jquery.longShadow.js',
        dest: 'jquery.longShadow.min.js'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

};