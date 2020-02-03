const cssfiles = [
  $.path.css
];

module.exports = function () {
  $.gulp.task('css', function () {
    return $.gulp.src(cssfiles)
        .pipe($.gp.plumber())
        .pipe($.gp.sourcemaps.init())
        .pipe($.gp.concat('all.css'))
        .pipe($.gp.csso())
        .pipe($.gp.rename('all.min.css'))
        .pipe($.gp.sourcemaps.write(''))
        .pipe($.gulp.dest('build/css'))
        .pipe($.browserSync.stream());
  });
};