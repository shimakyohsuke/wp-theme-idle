'use strict'

import config from '../config.js'
import handleErrors from '../util/handleErrors.js'
import gulp from 'gulp'
import plumber from 'gulp-plumber'
import stylus from 'gulp-stylus'
import pleeease from 'gulp-pleeease'

gulp.task('css', function () {
  return gulp.src(config.stylus.src)
    .pipe(plumber())
    .pipe(stylus({
      'include css': true
      // linenos: true
    }))
    .pipe(pleeease({
      'browsers': ['last 2 versions'],
      minifier: false
    }))
    .on('error', handleErrors)
    .pipe(gulp.dest(config.stylus.dest))
})
