// const path = require('path');
// module.exports = {
//   input: './src/index.js',
//   output: {
//     filename: 'bundle.js',
//     filepath: path.resolve(__dirname, 'dist')
//   }
// };

// import resolve from 'rollup-plugin-node-resolve';
// import babel from 'rollup-plugin-babel';

// export default {
//   input: './src/index.js',
//   output: {
//     file: 'dist/bundle.js',
//     format: 'umd'
//   },
//   plugins: [
//     resolve(),
//     babel({
//       exclude: /node_modules/
//     })
//   ]
// };

import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'umd'
  },
  plugins: [
    resolve(),
    babel({
      exclude: /(node_modules)/,
      presets: ['@babel/preset-env']
    })
  ]
};
