import buble from 'rollup-plugin-buble';
import { terser } from 'rollup-plugin-terser';

const production = !process.env.ROLLUP_WATCH;

export default {
  input: './src/jquery.longShadow.js',
  output: {
    sourcemap: true,
    file: 'dist/jquery.longShadow.js',
    format: 'iife'
  },
  plugins: [
    buble({
      objectAssign: 'Object.assign'
    }),
    production && terser()
  ]
};
