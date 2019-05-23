const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');
module.exports = {
  output: {
    path: path.resolve('../main/')
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
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.php",
      filename: "./index.php"
    })
  ],  
};