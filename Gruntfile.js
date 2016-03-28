module.exports = function(grunt) {
	grunt.initConfig({
		bower_concat: {
			basic: {
				dest: {
					js: 'public_html/assets/components/data.js',
					css: 'public_html/assets/components/data.css'
				}
			}
		},
		copy: {
		  main: {
		    files: [
				{
					expand: true,
					cwd: 'bower_components/Materialize/font/',
					src: '**',
					dest: 'public_html/assets/font/',
				}
		      // includes files within path and its sub-directories
		    //   {expand: true, src: ['path/**'], dest: 'dest/'},
			  //
		    //   // makes all src relative to cwd
		    //   {expand: true, cwd: 'path/', src: ['**'], dest: 'dest/'},
			  //
		    //   // flattens results to a single level
		    //   {expand: true, flatten: true, src: ['path/**'], dest: 'dest/', filter: 'isFile'},
		    ],
		  },
		},
		uglify: {
			options: {
			  mangle: false,
			  preserveComments: 'some'
			},
			my_target: {
			  files: {
			    'public_html/assets/components/data.js': ['public_html/assets/components/data.js']
			  }
			}
		}
	});
	grunt.loadNpmTasks('grunt-bower-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-copy');
	/*grunt.loadNpmTasks('grunt-bower');
	grunt.loadNpmTasks('grunt-contrib-clean');*/
	grunt.registerTask('default', ['bower_concat', 'uglify'/*, 'bower', 'clean'*/]);
};
