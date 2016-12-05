// REQUIRE DEPENDENCIES
const gulp     = require('gulp');
const concat   = require('gulp-concat');
const annotate = require('gulp-ng-annotate');
const uglify   = require('gulp-uglify');
const watch    = require('gulp-watch');
const sass     = require('gulp-sass');
const babel    = require('gulp-babel');

//  DECLARE FILE PATHS
const paths = {
  jsSource: ['./public/app/**/*.js', '!/public/bundle.js'],
  sassSource: ['./public/styles/*.scss']
};

// DEFINE TASKS
gulp.task('js', () => {
  return gulp.src(paths.jsSource)
    .pipe(babel())
    .pipe(concat('bundle.js'))
    .pipe(annotate())
    //.pipe(uglify()) // uncomment when code is production ready
    .pipe(gulp.dest('./public'));
});

gulp.task('sass', () => {
  return gulp.src(paths.sassSource)
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./public'));
});

//  WATCH TASKS
gulp.task('watch', () => {
  gulp.watch(paths.jsSource, ['js']);
  gulp.watch(paths.sassSource, ['sass']);
});

// RUN DEFAULT TASK - first thing to run when gulp is called
gulp.task('default', ['watch', 'js', 'sass']);