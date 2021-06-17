const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ENVEvent = process.env.npm_lifecycle_event;

console.log('ENVEvent = ', ENVEvent);
module.exports = function() {
  const config = {};

  config.entry = {
    index:'./index.js'
  }

  config.output = {
    filename: 'main.bundle.js',
    publicPath: '/',
    clean: true,
    path: path.resolve(__dirname, 'dist')
  };

  config.plugins = [
    new HtmlWebpackPlugin({
      title: 'Angular component demo',
      inject: true,
      template: './index.html'
    })
  ];

  return config;
}();