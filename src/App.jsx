import React from 'react';
import styles from './App.scss'
import bootstrap from './assets/styles/bootstrap-custom.scss'
import Header from './components/Header'
import Welcome from './components/Welcome'
import Chart from './components/Chart'
import Shop from './components/Shop'
import Footer from './components/Footer'

// 应用容器
const App = ()=>(
  <div className={styles.app}>
    <Header></Header>
    <div className={[styles['main-container'], bootstrap['container-fluid']].join(' ')}>
      <div className={[bootstrap['col-md-6']].join(' ')}>
        <Welcome></Welcome>
      </div>
      <div className={[styles.chart, bootstrap['col-md-5']].join(' ')}>
        <Chart></Chart>
      </div>
      <div className={[bootstrap['col-md-5']].join(' ')}>
        <Shop></Shop>
      </div>
    </div>
    <Footer></Footer>
  </div>
)

export default App;