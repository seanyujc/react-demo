const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    main: ['./src/main.jsx'],
    // vendor: ['react','moment','iscroll']
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader',],
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'img/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          //resolve-url-loader may be chained before sass-loader if necessary
          use: [{
            loader: 'css-loader'
          },
          'autoprefixer-loader?{browsers: ["last 2 versions", "ie 8", "ie 9"]}']
        })
      }
    ]
  },
  plugins: [
    // new webpack.optimize.CommonsChunkPlugin({
    //     name: 'vendor',
    //     filename: 'js/vendor.js',
    //     minChunks: 2
    //   }),

    new ExtractTextPlugin({
      filename: 'style.css',
      allChunks: true
    })
  ],
  resolve: {
    extensions: ['.jsx', '.js']
  }
}