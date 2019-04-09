const gulp = require('gulp');
const sass = require('gulp-sass');


gulp.task('sass', function () {
    return gulp.src('./scss/**/*.scss')
      .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(gulp.dest('./css'));
});
