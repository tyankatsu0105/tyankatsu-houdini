const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/** @type import('webpack').Configuration & import('webpack-dev-server').Configuration  */
module.exports = {
  entry: {
    'index': path.resolve(__dirname, '/src/index.js'),
    'properties' : path.resolve(__dirname, '/src/properties.js'),
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      { 
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env', {
                  "useBuiltIns": "usage"
                }
              ]
            ]
          }
        }
      }
    ]
  }
};