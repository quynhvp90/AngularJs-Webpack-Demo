const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');


module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    publicPath: '/',
    contentBase: path.join(process.cwd(), 'dist'),
    port: 3000,
    historyApiFallback: true
  }
});