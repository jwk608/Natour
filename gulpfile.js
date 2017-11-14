var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');

gulp.task('sass', function(){
  return gulp.src('sass/**/*.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('css'))
});

gulp.task('watch', function(){
  gulp.watch('sass/**/*.scss', ['sass']); 
  // Other watchers
})