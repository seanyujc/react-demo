console.time('Times')
const path = require('path')
const express = require('express')
const app = express()
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

const webpackConfig = require('./webpack.dev.conf')
// console.log(JSON.stringify( webpackConfig))
const compiler = webpack(webpackConfig)
const hotMiddleware = webpackHotMiddleware(compiler, {
  log: () => {}
})
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})
app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true,
  hot: true
}))
app.use(hotMiddleware)
app.use(express.static('./src/assets'))
app.listen(8001, ()=>{
  console.log('Listening on port 8001!')
})
console.timeEnd('Times')
