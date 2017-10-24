var gulp = require('gulp');
var sass = require('gulp-sass');
var webserver = require('gulp-webserver');

gulp.task('sass', function() {
	gulp.src('./scss/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./app/css'));
});

gulp.task('sass:watch', function() {
	gulp.watch('./scss/**/*.scss', ['sass']);
});

gulp.task('webserver', function() {
	return gulp.src('app')
		.pipe(webserver({
			port: '4001',
			livereload: true,
			open: true
		}))
});
gulp.task('default', ['sass:watch','webserver']);