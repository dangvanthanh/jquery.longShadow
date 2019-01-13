import buble from 'rollup-plugin-buble';
import { uglify } from 'rollup-plugin-uglify';

const production = !process.env.ROLLUP_WATCH;

export default {
  input: './src/jquery.longShadow.js',
  output: {
    file: 'dist/jquery.longShadow.js',
    format: 'iife'
  },
  plugins: [
    buble({
      objectAssign: 'Object.assign'
    }),
    production && uglify()
  ]
};
