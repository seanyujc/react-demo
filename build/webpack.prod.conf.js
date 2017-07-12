const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseWebpackConfig = require('./webpack.base.conf')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

// const _path = path.relative(__dirname,'')
// console.log(path.resolve(__dirname, '../'));
// console.log(process.env.DOMAIN)
const publicPath = process.env.PUBLIC_PATH || '/demo/'
module.exports = merge(baseWebpackConfig, {
  output: {
    publicPath
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          //resolve-url-loader may be chained before sass-loader if necessary
          use: [{
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]__[hash:base64:5]',
            }
          },
            'autoprefixer-loader?{browsers: ["last 2 versions", "ie 8", "ie 9"]}', 'sass-loader']
        })
      }
    ]
  },
  plugins: [
    new webpack.DllReferencePlugin({
      context: path.resolve(__dirname, '../'),
      manifest: require(path.relative(__dirname, './dll/assets-manifest.json'))
    }),
    new webpack.DllReferencePlugin({
      context: path.resolve(__dirname, '../'),
      manifest: require(path.relative(__dirname, './dll/plugins-manifest.json'))
    }),
    new webpack.DllReferencePlugin({
      context: path.resolve(__dirname, '../'),
      manifest: require(path.relative(__dirname, './dll/main-manifest.json'))
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../src/index.html'),
      dlls: ['dll/main-dll', 'dll/plugins-dll', 'dll/assets-dll']
    }),
    
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: true
    }),
    new ExtractTextPlugin({
      filename: 'style.css',
      allChunks: true
    })
  ]
})