import cleanup from 'rollup-plugin-cleanup'
import serve from 'rollup-plugin-serve'

export default {
  entry: 'build/application.js',
  format: 'iife',
  dest: 'dist/application.js',
  plugins: [
    cleanup({
      comments: ['ts3s']
    }),
    serve('')
  ],
  sourceMap: true
}

