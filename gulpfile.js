const gulp = require('gulp');
const sass = require('gulp-sass');


function compilaSass() {
    return gulp.src('./scss/**/*.scss')
      .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(gulp.dest('./css'));
}

function watch() {
    gulp.watch('./scss/**/*.scss', compilaSass)
}

gulp.task('default', watch);
