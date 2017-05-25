import buble from 'rollup-plugin-buble'
import butternut from 'rollup-plugin-butternut'

export default {
  entry: './src/jquery.longShadow.js',
  dest: './dist/jquery.longShadow.js',
  format: 'es',
  plugins: [
    buble({
      objectAssign: 'Object.assign'
    }),
    butternut()
  ]
}
