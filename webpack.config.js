var PROD = process.argv.indexOf('-p') >= 0;
var webpack = require('webpack');

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      'typeof __DEV__': JSON.stringify('boolean'),
      __DEV__: PROD ? false : true
    })
  ],
  entry: {
    'sgck': __dirname + '/src/index.js'
  },
  output: {
    libraryTarget: 'umd',
    library: 'sgck',
    path: __dirname + '/dist',
    filename: PROD ? '[name].min.js' : '[name].js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      }
    }]
  }
};
