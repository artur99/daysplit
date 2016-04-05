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
					cwd: 'bower_components/Materialize/fonts/',
					src: '**',
					dest: 'public_html/assets/fonts/',
				},
				{
					expand: true,
					cwd: 'bower_components/font-awesome/fonts/',
					src: '**',
					dest: 'public_html/assets/fonts/',
				}
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
		},
		cssmin: {
		  options: {
		    shorthandCompacting: false,
		    roundingPrecision: -1
		  },
		  target: {
		    files: {
		      'public_html/assets/components/data.css': ['public_html/assets/components/data.css']
		    }
		  }
		}
	});
	grunt.loadNpmTasks('grunt-bower-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.registerTask('default', ['bower_concat', 'uglify', 'cssmin'/*, 'bower', 'clean'*/]);
};
