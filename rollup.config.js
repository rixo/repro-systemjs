import serve from 'rollup-plugin-serve'

export default {
  input: './src/main.js',
  preserveModules: true,
  output: {
    format: 'system',
    dir: 'public/bundle',
  },
  plugins: [
    serve('public'),
  ],
}
