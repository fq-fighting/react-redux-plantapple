var path = require('path');

var config = {
  entry: ['webpack/hot/dev-server', path.resolve(__dirname, './src/index.js')],
  resolve: {
    alias: {}
  },
  output: {
    publicPath: "http://localhost:8080/dist/",
    path: path.resolve(__dirname, "dist"),
    filename: 'bundle.js'
  },
  module: {
    noParse: [],
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel'
    }, {
      test: /\.css$/,
      loader: 'style!css'
    }, {
      test: /\.less$/,
      loader: 'style!css!less'
    }]
  }
};

module.exports = config;