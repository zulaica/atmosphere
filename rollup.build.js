import cleanup from 'rollup-plugin-cleanup'

export default {
  input: 'build/application.js',
  output: {
    file: 'dist/application.js',
    format: 'iife',
  },
  plugins: [
    cleanup({
      comments: ['ts3s']
    })
  ],
  sourcemap: true
}

