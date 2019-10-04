const merge = require('webpack-merge');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  entry: './example/main.jsx',
  output: {
    path: path.join(__dirname, 'docs'),
    filename: 'app.bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('./example/index.html'),
    }),
  ],
});
