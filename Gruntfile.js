module.exports = function(grunt) {
  // Do grunt-related things in here
  grunt.initConfig({
    pkg: grunt.file.readJSON( 'package.json' ),

    jshint: {
        files: ['app.js','Gruntfile.js']
    },

    copy: {
        main: {
            files: [{
            src: ['bower_components/**'],
            dest: 'public/'
            }]
        }
    },

    clean: ['public/bower_components/**'],

    mochaTest: { test: { 
		options: {reporter: 'spec'},
		src: ['tests/test01.js']
    }},

    nodemon: {
    	dev: {}
    }
  });//initConfig

  //load jshint plugin for cleaning js files
  grunt.loadNpmTasks( 'grunt-contrib-jshint' );
  //load copy plugin to move files into public folder
  grunt.loadNpmTasks( 'grunt-contrib-copy' );
  //load clean plugin to clean bower components folder
  grunt.loadNpmTasks( 'grunt-contrib-clean' );
  //load testing plugin
  grunt.loadNpmTasks( 'grunt-mocha-test' );
  //load automator for starting/stopping server when files updated
  //grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks( 'grunt-nodemon' );

  //default tasks for grunt
  grunt.registerTask( 'default', ['jshint','clean','copy']);
  grunt.registerTask('test', ['mochaTest']);
  grunt.registerTask('restart', ['nodemon']);
};