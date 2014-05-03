var gulp = require('gulp'),
    livereload = require('gulp-livereload'),
    watch = require('gulp-watch');

gulp.task('less', function() {
  gulp.src('less/*.less')
    .pipe(watch())
    .pipe(less())
    .pipe(gulp.dest('css'))
    .pipe(livereload());
});