var gulp = require('gulp');
var browserSync = require('browser-sync').create();


var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');
var browserify = require('browserify');
// var watchify = require('watchify');
var uglify = require('gulp-uglify');
var minifyHTML = require('gulp-minify-html');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

var bundler = browserify('./js/main.js').bundle();

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./build/"
        }
    });
});
// JavaScript linting task
gulp.task('jshint', function() {
  return gulp.src('js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// Compile Sass task
gulp.task('sass', function() {
  return gulp.src('scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('css'));
});

// Minify index
gulp.task('html', function() {
  return gulp.src('index.html')
    .pipe(minifyHTML())
    .pipe(gulp.dest('build/'));
});


// // JavaScript build task, removes whitespace and concatenates all files
// gulp.task('scripts', function() {
//   return gulp.src('js/**/*.js')
//     .pipe(concat('main.js'))
//     .pipe(uglify())
//     .pipe(gulp.dest('./build/js'));
// });

gulp.task('scripts', function(){
  return bundler
    .bundle()
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./build/js'));
});

// Styles build task, concatenates all the files
gulp.task('styles', function() {
  return gulp.src('css/*.css')
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('build/css'));
});

// Image optimization task
gulp.task('images', function() {
  return gulp.src('img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('build/img'));
});

// Watch task
gulp.task('watch', ['browser-sync', 'scripts', 'styles'], function() {
  // gulp.watch('app/js/**/*.js', ['jshint']);
  // gulp.watch('app/scss/*.scss', ['sass']);
  gulp.watch('css/*.css', ['styles']);
});

// Default task
gulp.task('default', ['jshint', 'sass', 'scripts', 'styles', 'html', 'watch']);

// Build task
gulp.task('build', ['jshint', 'sass', 'html', 'scripts', 'styles', 'images']);