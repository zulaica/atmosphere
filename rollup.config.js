import cleanup from 'rollup-plugin-cleanup'

export default {
  entry: 'build/application.js',
  format: 'iife',
  dest: 'dist/application.js',
  plugins: [ cleanup({
    comments: ['ts3s']
  }) ],
  sourceMap: true
}
