'use strict'

import gulp from 'gulp'
import webpack from 'webpack-stream'
import config from '../config.js'

gulp.task('webpack', function () {
  gulp.src(config.webpack.src)
  .pipe(webpack({
    output: {
      filename: config.webpack.filename
    },
    module: {
      loaders: [
        {
          test: /\.(js)$/,
          exclude: /node_modules/,
          loader: 'babel?presets[]=es2015'
        }
      ]
    }
  }))
  .pipe(gulp.dest(config.webpack.dest))
})
