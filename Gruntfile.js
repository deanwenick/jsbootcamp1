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

  	clean: ['public/bower_components/**']
  });//initConfig

  //load jshint plugin for cleaning js files
  grunt.loadNpmTasks( 'grunt-contrib-jshint' );
  //load copy plugin to move files into public folder
  grunt.loadNpmTasks( 'grunt-contrib-copy' );
  //load clean plugin to clean bower components folder
  grunt.loadNpmTasks( 'grunt-contrib-clean');

  //default tasks for grunt
  //* add jshint to this list *//
  grunt.registerTask( 'default', ['clean','copy']);
};