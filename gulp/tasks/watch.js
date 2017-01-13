'use strict'

import config from '../config.js'
import gulp from 'gulp'
import watch from 'gulp-watch'

gulp.task('setWatch', function () {
  global.isWatching = true
})

gulp.task('watch', function () {
  watch(config.stylus.src, function () {
    gulp.start('css')
  })
  watch(config.webpack.src, function () {
    gulp.start('webpack')
  })
})
