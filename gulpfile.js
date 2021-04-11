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
    .src('src/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('main.css'))
    .pipe(gulp.dest('dist/css'))
})

gulp.task('watch', () => {
  gulp.watch('src/scss/**/*.scss', gulp.series('sass', 'reload'))
  gulp.watch('src/**/*.{js,css}', gulp.series('reload'))
  gulp.watch('./*.html', gulp.series('reload'))
})

gulp.task('build', gulp.parallel('sass'))
gulp.task('default', gulp.parallel('sass', 'serve', 'watch'))
