const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const glob = require('glob');
const ENVEvent = process.env.npm_lifecycle_event;

console.log('ENVEvent = ', ENVEvent);
module.exports = function() {
  const config = {};
  const entrys = glob.sync('./src/app/**/*.scss');
  entrys.push('./src/app/index.js');
  config.entry = entrys;

  config.output = {
    filename: 'main.bundle.js',
    publicPath: '/',
    clean: true,
    path: path.resolve(__dirname, 'dist')
  };

  config.module = {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      // CSS LOADER
      // Reference: https://github.com/webpack/css-loader
      // Allow loading css through js
      //
      // Reference: https://github.com/postcss/postcss-loader
      // Postprocess your css with PostCSS plugins
      test: /\.css$/,
      // Reference: https://github.com/webpack/extract-text-webpack-plugin
      // Extract css files in production builds
      //
      // Reference: https://github.com/webpack/style-loader
      // Use style-loader in development.
      use: [
        {loader: 'css-loader', options: {sourceMap: true}},
        {loader: 'postcss-loader'}
      ]
    }, {
      test: /\.(s[ac]|c)ss$/i,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'sass-loader'
      ]
    }, {
      // ASSET LOADER
      // Reference: https://github.com/webpack/file-loader
      // Copy png, jpg, jpeg, gif, svg, woff, woff2, ttf, eot files to output
      // Rename the file using the asset hash
      // Pass along the updated reference to your code
      // You can add here any file extension you want to get copied to your output
      test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
      loader: 'file-loader'
    }, {
      // HTML LOADER
      // Reference: https://github.com/webpack/raw-loader
      // Allow loading html through js
      test: /\.html$/,
      loader: 'raw-loader'
    }]
  };

  config.plugins = [
    new CopyPlugin({
      patterns: [
        { 
          from: "./src/app",
          to: config.output.path + '/app',
          filter: async (resourcePath) => {
            const extension = path.parse(resourcePath);
            const regex = /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot|html)$/;
            if (regex.test(extension.ext)) {
              return true;
            }

            return false;
          },
        },
      ],
    }),
    new MiniCssExtractPlugin({ filename: 'main.css'}),
    new HtmlWebpackPlugin({
      title: 'Angular component demo',
      inject: true,
      template: './src/index.html'
    })
  ];
  config.optimization = {
    emitOnErrors: true,
  };

  return config;
}();