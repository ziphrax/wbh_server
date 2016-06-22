var gulp = require('gulp'),
    gp_concat = require('gulp-concat'),
    gp_rename = require('gulp-rename'),
    gp_uglify = require('gulp-uglify'),
    gp_sourcemaps = require('gulp-sourcemaps');

gulp.task('js-fef', function(){
    return gulp.src('client/assets/src/js/**/*.js')
        .pipe(gp_sourcemaps.init())
        .pipe(gp_concat('main.js'))
        .pipe(gulp.dest('client/assets/dist/js'))
        .pipe(gp_rename('main.min.js'))
        .pipe(gp_uglify())
        .pipe(gp_sourcemaps.write('./'))
        .pipe(gulp.dest('client/assets/dist/js'));
});

gulp.task('watch',['default'],function(){
  gulp.watch('client/assets/src/js/**/*.js',['js-fef']);
});

gulp.task('default', ['js-fef'], function(){});
