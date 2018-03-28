var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var browserSync = require('browser-sync').create();
/*
 * Variables
 */
// Sass Source
var scssFiles = ['./src/scss/style.scss'];

// CSS destination
var cssDest = './src/assets/css';

// Options for development
var sassDevOptions = {
  outputStyle: 'expanded'
}

// Options for production
var sassProdOptions = {
  outputStyle: 'compressed'
}

/*
 * Tasks
 */
// Task 'sassdev' - Run with command 'gulp sassdev'
gulp.task('sassdev', function() {
  return gulp.src(scssFiles)
    .pipe(sass(sassDevOptions).on('error', sass.logError))
    .pipe(gulp.dest(cssDest))
    .pipe(browserSync.stream());
});

// Task 'sassprod' - Run with command 'gulp sassprod'
gulp.task('sassprod', function() {
  return gulp.src(scssFiles)
    .pipe(sass(sassProdOptions).on('error', sass.logError))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest(cssDest));
});

// Task 'watch' - Run with command 'gulp watch'
gulp.task('watch', function() {
    browserSync.init({
        server: {
            baseDir: "./src/"
        }
    });
  gulp.watch(scssFiles, ['sassdev']);
  gulp.watch("*.html").on("change", browserSync.reload);
});

// Default task - Run with command 'gulp'
gulp.task('default', ['sassdev', 'watch']);