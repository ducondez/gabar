var gulp = require('gulp'),
	babel = require('gulp-babel'),
	watch = require('gulp-watch'),
	mocha = require('gulp-mocha'),
	concat = require('gulp-concat');

gulp.task('default', function() {
	gulp.run('test');
	gulp.run('babel');
});

gulp.task('babel', function() {
	return gulp.src('src/**/*.js')
		.pipe(babel())
		.pipe(concat('gabar.js'))
		.pipe(gulp.dest('dist'));
});

gulp.task('test', function () {
	return gulp.src('test/**/*.js', {read: false}).
		pipe(mocha({reporter: 'spec'}));
});

gulp.task('watch', function () {
	watch(['src/**/*.js', 'test/**/*.js'],  function () {
		gulp.run('test');
		gulp.run('babel');
	});
});