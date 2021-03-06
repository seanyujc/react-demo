// require('!!style-loader!css-loader!sass-loader!./assets/styles/bootstrap-custom.scss')
// import bootstrap from './assets/styles/bootstrap-custom.scss'
require('./assets/js/iconfont.js')
import main from './main.scss'
import React from 'react'
import ReactDOM from 'react-dom'

import { AppContainer } from 'react-hot-loader'
import App from './App'


const render = (Component) => {
  // console.log(bootstrap)
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  )
}

render(App)
// 模块热替换的 API
if (module.hot) {
  module.hot.accept('./App', () => {
    render(App)
  });
}
export { }
