var gulp = require('gulp'),
    livereload = require('gulp-livereload'),
    watch = require('gulp-watch');

gulp.task('js', function() {
  gulp.src('js/*.js')
    .pipe(watch())
    .pipe(livereload());
});