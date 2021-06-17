const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  // mode: 'production',
  // devtool: 'source-map',
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    publicPath: '/',
    contentBase: path.join(process.cwd(), 'dist'),
    port: 3300,
    historyApiFallback: true
  }
});