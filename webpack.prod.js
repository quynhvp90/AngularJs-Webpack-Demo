const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  devServer: {
    publicPath: '/',
    contentBase: path.join(process.cwd(), 'dist'),
    port: 5000,
    historyApiFallback: true
  }
});