import IScroll from "iscroll-react"
import {setDefaultIScrollOptions} from "iscroll-react"
import React, { Component } from 'react';
import styles from './Shop.scss'
import { shopData } from '../assets/data/mock'
import comStyles from './Common.scss'
import bootstrap from '../assets/styles/bootstrap-custom.scss'
import iscroll from "iscroll"

class Shop extends Component {
  constructor(props) {
    super(props);
    setDefaultIScrollOptions({
      scrollbars: true,
      mouseWheel: true,
    })
    this.convertPercent = this.convertPercent.bind(this)
  }

  convertPercent(num){
    return (num/100).toFixed(2)
  }
  
  
  render() {
    const tactics = [];
    for(let item of shopData.data){
      tactics.push(
        <tr key={item.id}>
          <td width="170">{item.name}</td>
          <td>{this.convertPercent(item.month)}%</td>
          <td>{this.convertPercent(item.year)}%</td>
          <td>{this.convertPercent(item.sharp)}</td>
        </tr>
      )
    }

    return (
      <div className={[styles.shop, comStyles.outshadow, bootstrap.panel].join(' ')}>
        <div className={[styles['panel-heading'], bootstrap['panel-heading']].join(' ')}>
          <div className={[bootstrap['col-xs-8']].join(' ')}>
            <svg className={["icon", styles.icon].join(' ')} aria-hidden="true">
            <use xlinkHref="#icon-i-nav-mymarket"></use>
            </svg> 策略超市
          </div>
          <div className={[styles.more, bootstrap['col-xs-8'],bootstrap['text-right']].join(' ')}>查看全部
            <svg className={["icon", styles.icon].join(' ')} aria-hidden="true">
              <use xlinkHref="#icon-shuangjiantou"></use>
            </svg>
          </div>
        </div>
        <div className={[styles['panel-body'], bootstrap['panel-body']].join(' ')}>
          <table className={[styles.table, bootstrap['table'], bootstrap['table-striped'], bootstrap['table-hover']].join(' ')}>
            <thead>
              <tr>
                <th width="170">策略名称</th>
                <th>近一月收益</th>
                <th>近一年收益</th>
                <th>夏普比率</th>
              </tr>
            </thead>
            <tbody>
                
              <tr>
                <td className={[styles.body].join(' ')} colSpan="4">   
              <IScroll iScroll={iscroll}>
                    <table className={[styles['body-table'], bootstrap['table']].join(' ')}>
                      <tbody>
                      {tactics}
                      </tbody>
                    </table>
                  </IScroll>
                </td>
              </tr>
            </tbody>
          </table>
          <div className={[bootstrap['text-right']].join(' ')}>查看所有组合。。。</div>
        </div>
      </div>
    );
  }
}

export default Shop;