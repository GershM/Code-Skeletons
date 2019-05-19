const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
  module: {
    entry: {
      app: path.resolve(__dirname, './index.js'),
      vendors: ['react', 'react-dom', 'react-router', 'flux', 'events', 'axios', 'postal', 'react-measure', 'jquery', 'toastr', 'classnames',
          'highstock-release', 'react-grid-layout', 'react-bootstrap-date-picker', 'react-bootstrap', 'react-select', 'es6-object-assign', 'reactstrap', 'react-transition-group']
     },
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "../main/index.php",
      filename: "./index.php"
    })
  ]
};