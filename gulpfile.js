// REQUIRE DEPENDENCIES
const gulp       = require('gulp')
    , concat     = require('gulp-concat')
    , annotate   = require('gulp-ng-annotate')
    , uglify     = require('gulp-uglify')
    , watch      = require('gulp-watch')
    , sass       = require('gulp-sass')
    , babel      = require('gulp-babel')
    , sourcemaps = require('gulp-sourcemaps')

//  DECLARE FILE PATHS
const paths = {
  jsSource: ['./public/app/**/*.js', '!/public/bundle.js'],
  sassSource: ['./public/styles/*.scss']
};

// DEFINE TASKS
gulp.task('js', () => {
  return gulp.src(paths.jsSource)
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat('bundle.js'))
    .pipe(annotate())
    //.pipe(uglify()) // uncomment when code is production ready
    .pipe(sourcemaps.write())
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