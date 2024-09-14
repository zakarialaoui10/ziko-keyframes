
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

const banner= `
/*
  Project: ziko-keyframes
  Author: Zakaria Elalaoui
  Date : ${new Date()}
  Git-Repo : https://github.com/zakarialaoui10/ziko-keyframes
  Released under MIT License
*/
`
export default {
  input: 'src/index.js',
  output: [{
    file: 'dist/ziko-keyframes.cjs',
    format: 'cjs',
    banner,
  },{
    file: 'dist/ziko-keyframes.mjs',
    format: 'es',
    banner,
  },
  {
    file: 'dist/ziko-keyframes.js',
    format: 'umd',
    banner,
    name:"ZikoKeyframes",
  }
],
  plugins: [
    resolve(), 
    commonjs(),
    ],
};
