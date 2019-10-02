
const merge = require('webpack-merge');
const path = require('path');

const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  entry: './src/index.jsx',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'react-google-streetview.js',
    library: 'react-google-streetview',
    libraryTarget: 'umd',
  },
});
