export default {
  /* browserSync  */
  browserSync: {
    proxy: 'localhost:8080',
    files: [
      './style.css',
      './bundle.js',
      './**/*.php',
      './**/*.png',
      './**/*.svg',
      './**/*.jpg'
    ]
  },
  /* stylus  */
  stylus: {
    src: './src/styles/**/*.styl',
    dest: './'
  },
  /* webpack  */
  webpack: {
    src: './src/scripts/entry.js',
    dest: './',
    filename: 'bundle.js'
  }
}
