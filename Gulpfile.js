var gulp =       require('gulp'),
    livereload = require('gulp-livereload'),
    watch =      require('gulp-watch');

gulp.task('watch', function() {
  gulp.src('*')
      .pipe(watch())
      .pipe(livereload());
  });