'use strict'

import browserSync from 'browser-sync'
import config from '../config.js'
import gulp from 'gulp'

gulp.task('browserSync', function () {
  browserSync(config.browserSync)
})
