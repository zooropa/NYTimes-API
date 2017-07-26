var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('all.js'))    
    .pipe(gulp.dest('./css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});


// shoval's code
gulp.task('to-sass', function () {
  gulp.src('*.scss')
  .pipe(sass())
     .pipe(concat('style.css'))
        .pipe(uglifycss())
        .pipe(gulp.dest('.'));   
});




