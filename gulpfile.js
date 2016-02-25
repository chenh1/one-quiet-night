var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var changed = require('gulp-changed')

gulp.task('default', function(){
    return gulp.src('styles/OOCss/*.scss')
        .pipe(watch('styles/OOCss/*.scss'))
        .pipe(changed('styles/OOCss'))
        .pipe(sass())
        .pipe(gulp.dest('styles/css'));
    console.log("bloo");
});
