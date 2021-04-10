const gulp = require('gulp')
const sass = require('gulp-sass')
const concat = require('gulp-concat')
const browserSync = require('browser-sync').create()

gulp.task('serve', () => {
  browserSync.init({
    server: './',
  })
})

gulp.task('reload', (cb) => {
  browserSync.reload()
  cb()
})

gulp.task('sass', () => {
  return gulp
    .src('public/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('main.css'))
    .pipe(gulp.dest('public/css'))
})

gulp.task('watch', () => {
  gulp.watch('public/scss/**/*.scss', gulp.series('sass', 'reload'))
  gulp.watch('public/**/*.{js,css}', gulp.series('reload'))
  gulp.watch('./*.html', gulp.series('reload'))
})

gulp.task('default', gulp.parallel('sass', 'serve', 'watch'))
