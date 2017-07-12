require('eventsource-polyfill')
require('react-hot-loader/patch')
var hotClient = require('webpack-hot-middleware/client?noInfo=true&reload=true')

hotClient.subscribe(function (event){
  if( event.action === 'reload'){
    window.location.reload()
  }
})