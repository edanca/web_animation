const gulp          = require('gulp')
const sass          = require('gulp-sass')
const autoPrefixer  = require('gulp-autoprefixer')
const uglify        = require('gulp-uglify')
const browserSync   = require('browser-sync')

// Compile SASS and live browser
gulp.task('sass', function() {
    return gulp.src(['src/sass/*.sass'])
        .pipe(sass())
        .pipe(autoPrefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.stream())
})

// Compress JS
gulp.task('compress', function() {
    return gulp.src(['src/prejs/*.js'])
        .pipe(uglify())
        .pipe(gulp.dest('src/js'))
})

// Monitor SASS changes
gulp.task('monitor', ['sass', 'compress'], function() {
    browserSync.init({
        server: './src'
    })
    gulp.watch(['src/sass/*.sass'], ['sass'])
    gulp.watch(['src/*.html']).on('change', browserSync.reload)
    gulp.watch(['src/prejs/*.js'], ['compress']).on('change', browserSync.reload)
})


// DEFAULT TASK
gulp.task('default', ['monitor', 'compress'])