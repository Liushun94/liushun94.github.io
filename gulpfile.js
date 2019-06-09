const gulp = require('gulp'),
    gulpSequence = require('gulp-sequence'),
    rename = require('gulp-rename'),
    _ = require('lodash'),
    del = require('del'),
    sass = require('gulp-sass');

// gulp.task('default', function () {
//     return gulpSequence('css:sass', 'css.rename', 'css:clean');
// });

// gulp.task('css:rename', function () {
//     return gulp.src('./public/css-temp/*.css')
//         .pipe(rename(function (path) {
//             if (!_.endsWith(path.basename, '.min')) {
//                 path.basename += '.min';
//             }
//         }))
//         .pipe(gulp.dest('./public/css'))
// });

// gulp.task('css:clean', function (cb) {
//     return del(['./public/css-temp'], cb)
// })

// gulp.task('css:sass', function () {
//     return gulp.src('./public/sass/')
//         .pipe(sass({
//             outputStyle: 'compact'
//         })).on('error', sass.logError)
//         .pipe(gulp.dest('./public/css-temp'))
// });

gulp.task('watch:sass', function () {
    return gulp.watch('./public/sass/*.scss', gulp.series('sass'));
});

gulp.task('sass', function () {
    return gulp.src('./public/sass/*.scss') //这是需要转化的sass文件
        .pipe(sass())
        .pipe(gulp.dest('./public/css')) //这是转化后css的文件
})