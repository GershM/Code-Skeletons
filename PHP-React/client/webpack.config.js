const path = require('path');

module.exports = {
  entry: {
    app: path.resolve(__dirname, './index.js'),
    vendors: ['react', 'react-dom']
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
  output: {
    path: path.resolve(__dirname, '../main/assets/js'),
    filename: 'lib.js',
    sourceMapFilename: '[name].[hash:8].map',
    chunkFilename: '[id].[hash:8].js'
  },
  optimization: {
    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  }
};