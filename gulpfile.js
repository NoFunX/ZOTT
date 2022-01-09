'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var autoprefixer = require('gulp-autoprefixer');

function buildStyles() {
  return gulp.src('./sass/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
    .pipe(autoprefixer({ cascade: false }))
};

function watchSass () {
    gulp.watch('./sass/**/*', buildStyles);
}

// exports.buildStyles = buildStyles;
// exports.watch = function () {
//   gulp.watch('./sass/styles.scss', buildStyles);
// };

gulp.task('default', watchSass)