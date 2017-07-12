import React, { Component } from 'react';
import bootstrap from '../assets/styles/bootstrap-custom.scss'
import styles from './Welcome.scss'

class componentName extends Component {
  render() {
    return (
      <div className={[styles.welcome, bootstrap.panel].join(' ')}>
        <div className={[bootstrap['panel-body']].join(' ')}>
          <h1 className={[bootstrap['text-center']].join(' ')}>欢迎来到<br/>宽策略全球智投平台</h1>
          <p className={[bootstrap['text-center']].join(' ')}>经过风险评级测试，您的风险等级是</p>
          <div className={[styles.type, styles.outshadow, bootstrap['text-center']].join(' ')}>保守型</div>
          <div className={[styles.ad, styles.outshadow, bootstrap['text-right']].join(' ')}>
            <svg className={["icon", styles.icon].join(' ')} aria-hidden="true">
              <use xlinkHref="#icon-shuangjiantou"></use>
            </svg>
          </div>
        </div>
      </div>
    );
  }
}

export default componentName;
