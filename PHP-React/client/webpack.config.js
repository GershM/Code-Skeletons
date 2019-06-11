const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
  output: {
    path: path.resolve('../main/'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.php$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }, 
  devServer: {
    historyApiFallback: true,
  }, 
  plugins: [    
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: "./src/index.php",
      filename: "./index.php"
    }),
    new CopyPlugin([
      { from: './src/.htaccess', to: '../main/' },
      { from: './src/api/.htaccess', to: '../main/api/' },
      { from: './src/api/index.php', to: '../main/api/' },
    ]),
  ],  
};