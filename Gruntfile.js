module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
                    port: grunt.option('port') || 7000
                },
            }
        },
        sass: {
            dist: {
                files: {
                    'css/fileUploader.css': 'sass/fileUploader.scss',
                    'css/main.css': 'sass/main.scss'
                }
            }
        },
        watch: {
            css: {
                files: ['sass/*.scss', 'lib/sass/.scss'],
                tasks: ['sass'],
            },
            livereload: {
                options: {
                    livereload: true
                },
                files: [
                    'index.html',
                    'js/fileUploader.js',
                    'css/fileUploader.css',
                    'css/main.css'
                ],
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('default', ['connect', 'watch']);
};