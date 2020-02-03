module.exports = function () {
  $.gulp.task('copy', function () {
    return $.gulp.src([
      'img/**',
      'fonts/**',
      'libs/**',
      '*.html'
    ], {
      base: '.'
    })
        .pipe($.gulp.dest('build'));

  });
};