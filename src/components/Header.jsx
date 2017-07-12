import React from 'react'
import styles from './Header.scss'
import bootstrap from '../assets/styles/bootstrap-custom.scss'

class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    var dialog = '<use xlink:href="/svg/svg-sprite#my-icon" />'
    return (
      <div className={[styles.header, bootstrap['container-fluid']].join(' ')}>
        <div className={[styles.logo, bootstrap["col-md-3"]].join(' ')}>
          <img src={require('../assets/images/lhjk-logo.jpg')} alt='' />
        </div>
        <div className={[bootstrap['col-md-6']].join(' ')}>
          <ul className={[styles.nav, bootstrap.nav, bootstrap['nav-justified']].join(' ')}>
            <li>热点推荐</li>
            <li>组合概况</li>
            <li>策略超市</li>
            <li>智能投资</li>
            <li>宽客实验室</li>
          </ul>
        </div>
        <div className={[bootstrap['col-md-3']].join(' ')}>
          <input type='text' className={[bootstrap['form-control'], styles['search-box']].join(' ')} />
        </div>
        <div className={[bootstrap['col-md-4']].join(' ')}>
          <div className={[styles['user-bar'], bootstrap.row].join(' ')}>
            <div className={[styles['dialog'], bootstrap['col-xs-2']].join(' ')}>
              <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-liaotian"></use>
              </svg>
            </div>
            <div className={[styles.portrait,bootstrap['col-xs-2']].join(' ')}>
              <img src={require('../assets/images/icon.png')} alt='icon' />
            </div>
            <div className={['account', bootstrap['col-xs-6']].join(' ')}>sean@seage.net</div>
            <div className={[styles.off, bootstrap['col-xs-2']].join(' ')}>
              <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-off"></use>
              </svg>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Header