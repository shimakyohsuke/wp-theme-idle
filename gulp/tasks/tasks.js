'use strict'
import gulp from 'gulp'

gulp.task('build', ['css', 'webpack'])
gulp.task('default', ['setWatch', 'build', 'watch', 'browserSync'])
