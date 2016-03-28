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
	/*grunt.loadNpmTasks('grunt-bower');
	grunt.loadNpmTasks('grunt-contrib-clean');*/
	grunt.registerTask('default', ['bower_concat', 'uglify'/*, 'bower', 'clean'*/]);
};
