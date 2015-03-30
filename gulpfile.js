var gulp = require('gulp'),
  babel = require('gulp-babel'),
  watch = require('gulp-watch'),
  karma = require('karma').server,
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

gulp.task('test', function (done) {
  karma.start({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done);
});

gulp.task('watch', function () {
  karma.start({
    configFile: __dirname + '/karma.conf.js',
    singleRun: false
  });
  watch(['src/**/*.js'],  function () {
    gulp.run('babel');
  });
});