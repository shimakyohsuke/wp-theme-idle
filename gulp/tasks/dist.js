'use strict'
import gulp from 'gulp'
import debug from 'gulp-debug'
import runSequence from 'run-sequence'
import pkg from '../../package.json'

gulp.task('copy', function () {
  return gulp.src(
    [
      './**/*.*',
      '!./.github/**',
      '!./dist/**',
      '!./bin/**',
      '!./gulp/**',
      '!./gulpconfig.js',
      '!./gulpconfig.js.sample',
      '!./gulpfile.babel.js',
      '!.travis.yml',
      '!.gitignore',
      '!.editorconfig',
      '!.github/**',
      '!yarn.lock',
      '!package.json',
      '!./node_modules/**/*.*'
    ],
    {base: './'}
  )
  .pipe(debug())
  .pipe(gulp.dest(pkg.name + '.' + pkg.version))
})

gulp.task('dist', function (cb) {
  return runSequence('build', 'copy', cb)
})
