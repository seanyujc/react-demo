export var chartsData = {
  code: 0,
  msg: '',
  data: [
    {
      name: '客户（%）',
      type: 'line',
      stack: '百分比',
      showSymbol: false,
      itemStyle: {
        normal: {
          borderColor: '#6e84f3'
        }
      },
      lineStyle: {
        normal: {
          color: '#6e84f3'
        }
      },
      areaStyle: {
        normal: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset: 0, color: '#7587f5' // 0% 处的颜色
            }, {
              offset: 1, color: 'rgba(117, 135, 245, 0.5)' // 100% 处的颜色
            }],
            globalCoord: false // 缺省为 false
          }
        }
      },
      data: [0, 1.82, 1.91, 2.34, 2.90, 3.30, 3.10]
    },
    {
      name: '基准组合（%）',
      type: 'line',
      stack: '百分比',
      showSymbol: false,
      itemStyle: {
        normal: {
          opacity: 1,
          borderColor: '#7be8d1'
        }
      },
      lineStyle: {
        normal: {
          color: '#7be8d1'
        }
      },
      areaStyle: {
        normal: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset: 0, color: '#aef8df' // 0% 处的颜色
            }, {
              offset: 1, color: 'rgba(174, 248, 223, 0.5)' // 100% 处的颜色
            }],
            globalCoord: false // 缺省为 false
          }
        }
      },
      data: [0, 2.32, 2.01, 1.54, 1.90, 3.30, 4.10]
    }
  ]
};
export var shopData = {
  code: 0,
  msg: '',
  data: [
    {
      id: 1,
      name: '美国热门收益组合',
      month: 1928,
      year: 6032,
      sharp: 133
    },
    {
      id: 2,
      name: '美国热门收益组合',
      month: 1928,
      year: 6032,
      sharp: 133
    },
    {
      id: 3,
      name: '美国热门收益组合',
      month: 1928,
      year: 6032,
      sharp: 133
    },
    {
      id: 4,
      name: '美国热门收益组合',
      month: 1928,
      year: 6032,
      sharp: 133
    },
    {
      id: 5,
      name: '美国热门收益组合',
      month: 1928,
      year: 6032,
      sharp: 133
    },
    {
      id: 6,
      name: '美国热门收益组合',
      month: 1928,
      year: 6032,
      sharp: 133
    },
    {
      id: 7,
      name: '美国热门收益组合',
      month: 1928,
      year: 6032,
      sharp: 133
    },
    {
      id: 8,
      name: '美国热门收益组合',
      month: 1928,
      year: 6032,
      sharp: 133
    },
    {
      id: 9,
      name: '美国热门收益组合',
      month: 1928,
      year: 6032,
      sharp: 133
    },
    {
      id: 10,
      name: '美国热门收益组合',
      month: 1928,
      year: 6032,
      sharp: 133
    },
    {
      id: 11,
      name: '美国热门收益组合',
      month: 1928,
      year: 6032,
      sharp: 133
    },
    {
      id: 12,
      name: '美国热门收益组合',
      month: 1928,
      year: 6032,
      sharp: 133
    },
    {
      id: 13,
      name: '美国热门收益组合',
      month: 1928,
      year: 6032,
      sharp: 133
    },
    {
      id: 14,
      name: '美国热门收益组合',
      month: 1928,
      year: 6032,
      sharp: 133
    },
    {
      id: 15,
      name: '美国热门收益组合',
      month: 1928,
      year: 6032,
      sharp: 133
    },
    {
      id: 16,
      name: '美国热门收益组合',
      month: 1928,
      year: 6032,
      sharp: 133
    },
    {
      id: 17,
      name: '美国热门收益组合',
      month: 1928,
      year: 6032,
      sharp: 133
    },
    {
      id: 18,
      name: '美国热门收益组合',
      month: 1928,
      year: 6032,
      sharp: 133
    },
  ]
}
