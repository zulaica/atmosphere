import cleanup from 'rollup-plugin-cleanup'
import serve from 'rollup-plugin-serve'

export default {
  input: 'build/application.js',
  output: {
    file: 'dist/application.js',
    format: 'iife',
  },
  plugins: [
    cleanup({
      comments: ['ts3s']
    }),
    serve('')
  ],
  sourcemap: true
}

