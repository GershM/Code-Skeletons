const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
  entry: {
    app: path.resolve(__dirname,'./main.js'),
    vendors: ['react', 'react-dom']
  },
  devtool: "source-map",
  output: {
    path: path.resolve('../main/assets/js'),
    filename: '[name].js'
  },
  resolve: {
    modules: [
      'node_modules',
      'client'
    ]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
            __dirname
        ],
        loader: "babel-loader",      
    }   
    ]
  },  
  plugins: [
    new CleanWebpackPlugin()
  ],  
};