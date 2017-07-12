var path = require('path')
var webpack = require('webpack')

module.exports ={
  entry: {
    main: ['react', 'moment', 'iscroll'],
    assets: ['react-datepicker', 'iscroll-react'],
    plugins: ['echarts-for-react']
  },
  output: {
    path: path.resolve(__dirname, 'dll/'),
    filename: '[name]-dll.js',
    library: '[name]_lib'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.ts', '.scss'],
    modules: [path.resolve(__dirname, 'node_modules')]
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.resolve(__dirname, 'dll/[name]-manifest.json'),
      name: '[name]_lib'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'main',
      minChunks: 2
    })
  ],
}