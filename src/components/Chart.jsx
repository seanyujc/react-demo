import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import { chartsData } from '../assets/data/mock'
import DatePicker from 'react-datepicker';
import moment from 'moment';

import styles from './Chart.scss'
import comStyles from './Common.scss'
import bootstrap from '../assets/styles/bootstrap-custom.scss'
import 'react-datepicker/dist/react-datepicker.css';

class Chart extends Component {
  constructor(props, context) {
    super(props, context);
    moment.locale('zh-cn');
    this.state={
      startDate: moment(),
      endDate: moment()
    }
    this.onChartReadyCallback = this.onChartReadyCallback.bind(this)
    this.getOption = this.getOption.bind(this)
    this.handleChangeStartDate = this.handleChangeStartDate.bind(this)
    this.handleChangeEndDate = this.handleChangeEndDate.bind(this)
  }

  onChartReadyCallback(params) {
    console.log(params)
  }
  getOption() {
    return {
      title: {
        text: ''
      },
      tooltip: {
        formatter: '<ul class="tooltip"><li><i></i>{a0} {c0}</li><li><i class="i1"></i>{a1} {c1}</li></ul>',
        trigger: 'axis',
        axisPointer: {
          type: 'line',
          label: {
            backgroundColor: '#6a7985'
          },
          lineStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0, color: 'rgba(9, 143, 254, 0)'
              },
              {
                offset: 0.5, color: '#098ffe' // 0% 处的颜色
              }, {
                offset: 1, color: 'rgba(9, 143, 254, 0)' // 100% 处的颜色
              }],
              globalCoord: false // 缺省为 false
            }
          }
        }
      },
      grid: {
        left: '0',
        right: '0',
        bottom: '0',
        containLabel: false
      },
      xAxis: [
        {
          show: false,
          type: 'category',
          boundaryGap: false,
          data: ['', '', '', '', '', '', '']
        }
      ],
      yAxis:
      [{
        boundaryGap: ['20%', '20%'],
        type: 'value',
        offset: -20,
        max: 9,
        min: -9,
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          formatter: '{value} %',
          textStyle: {
            color: '#ec9595',
            align: 'left'
          }
        }
      }],
      series: chartsData.data
    }
  }

  handleChangeStartDate(date) {
    this.setState({
      startDate: date
    });
  }
  handleChangeEndDate(date) {
    this.setState({
      endDate: date
    });
  }
  render() {
    return (
      <div className={[styles.chart, comStyles.outshadow, bootstrap.panel].join(' ')}>
        <div className={[styles.title, bootstrap['panel-heading'] ].join(' ')}>
          <div className={[bootstrap['col-xs-6']]}>
            <svg className={["icon", styles.icon].join(' ')} aria-hidden="true">
            <use xlinkHref="#icon-jiaruquxian01"></use>
            </svg> 收益率分析</div>
          <div className={[bootstrap['col-xs-10']]}>
            <div className={[styles.startDate].join(' ')}>
            <DatePicker className={[styles.date, bootstrap['col-xs-8']].join(' ')}
              selected={this.state.startDate}
              onChange={this.handleChangeStartDate}
            /></div>
            <div className={[styles.endDate].join(' ')}>
            <DatePicker className={[styles.date, bootstrap['col-xs-8']].join(' ')}
              selected={this.state.endDate}
              onChange={this.handleChangeEndDate}
            /></div>
          </div>
        </div>
        <div className={[styles.body, bootstrap['panel-body']].join(' ')}>
          <ReactEcharts
            style={{height: '400px'}}
            option={this.getOption()}
            notMerge={true}
            lazyUpdate={true}
            theme={"theme_name"}
            onChartReady={this.onChartReadyCallback} />
        </div>
        
      </div>
    );
  }
}

export default Chart;