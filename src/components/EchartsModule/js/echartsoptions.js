let echartsOptions = {
    // title: {
    //     text: '折线图堆叠'
    // },
    // tooltip: {
    //     trigger: 'axis'
    // },
    textStyle: {
        fontSize: 12,
        color: '#666666'
    },
    legend: {
        // icon: oneIcon,
        data: [
            {
                name: '订单量',
                // 强制设置图形为圆。
                //icon: oneIcon,
                // 设置文本为红色
                textStyle: {
                   color: '#cc4100'
                }
            },
            {
                name: '取消率',
                // 强制设置图形为圆。
                //icon: twoIcon,
                // 设置文本为红色
                textStyle: {
                    color: '#e68600'
                }
            },
            {
                name: '差评数',
                // 强制设置图形为圆。
                //icon: threeIcon,
                // 设置文本为红色
                textStyle: {
                    color: '#666666'
                }
            },

        ]
    },
    color:['#cc4100','#e68600','#666666'],

    // 设置图标的位置
    grid: {
        left: '3%',
        // top: ,
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    // toolbox: {
    //     feature: {
    //         saveAsImage: {}
    //     }
    // },
    xAxis: {
        type: 'time',
        boundaryGap: false,
        splitLine:false,
        // data: ['2020-02-01', '2020-02-02', '2020-02-03', '2020-02-04', '2020-02-05'],
        axisLine: {
            show:false
        },
        axisTick: {
            show:false
        },
        axisLabel: {
            show: true,
            formatter: function (value, index) {
                console.log(44444444444444);
                // 格式化成月/日，只在第一个刻度显示年份
                var date = new Date(value);
                var texts = [(date.getMonth() + 1), date.getDate()];
                if (index === 0) {
                    texts.unshift(date.getYear());
                }
                return texts.join('/');
            }
        }
    },
    yAxis: [
        {
          name: '订单量',
          nameTextStyle: {
            color: '#aaaaaa',
            fontSize: 11
          },
          type: 'value',
          splitLine: false,
          axisLine: {
            show:false
          },
          axisTick: {
            show:false
          }
        },
        {
            name: '取消率/差评数',
            nameTextStyle: {
                color: '#aaaaaa',
                fontSize: 11
            },
            type: 'value',
            splitLine: false,
            axisLine: {
              show:false
            },
            axisTick: {
              show:false
            }
          }
    ],
    series: [
        {
            lineStyle: {
                color: '#cc4100'
            },
            symbol:'circle',
            symbolSize: 4,
            smooth: true,
            name: '订单量',
            type: 'line',
            yAxisIndex: 0,
            //stack: '总量',
            data: [
                ['2020-02-01',123],
                ['2020-02-02',123],
                ['2020-02-03',123],
                ['2020-02-04',123],
                ['2020-02-05',123],
                ['2020-02-06',123],
                ['2020-02-07',123],
                ['2020-02-08',123],
                ['2020-02-09',123],
                ['2020-02-10',123],
                ['2020-02-11',123],
                ['2020-02-12',123],
                ['2020-02-13',123],
                ['2020-02-14',123],
                ['2020-02-15',123],
                ['2020-02-16',123],
                ['2020-02-17',123],
                ['2020-02-18',123],
                ['2020-02-19',123],
                ['2020-02-20',123],
            ]
        },
        {
            lineStyle: {
                color: '#e68600'
            },
            symbol:'circle',
            symbolSize: 4,
            smooth: true,
            yAxisIndex: 1,
            name: '取消率',
            type: 'line',
            //stack: '总量',
            data: [
                ['2020-02-01',1.23],
                ['2020-02-02',2.3],
                ['2020-02-03',3],
                ['2020-02-04',2.3],
                ['2020-02-05',4],
                ['2020-02-06',4],
                ['2020-02-07',4],
                ['2020-02-08',4],
                ['2020-02-09',4],
                ['2020-02-10',4],
                ['2020-02-11',4],
                ['2020-02-12',4],
                ['2020-02-13',4],
                ['2020-02-14',4],
                ['2020-02-15',4],
                ['2020-02-16',4],
                ['2020-02-17',4],
                ['2020-02-18',4],
                ['2020-02-19',4],
                ['2020-02-20',4],
            ]
        },
        {    
            lineStyle: {
                color: '#666666'
            },
            symbol:'circle',
            symbolSize: 4,
            smooth: true,
            yAxisIndex: 1,
            name: '差评数',
            type: 'line',
            //stack: '总量',
            data: [
                ['2020-02-01',12],
                ['2020-02-02',3],
                ['2020-02-03',23],
                ['2020-02-04',8],
                ['2020-02-05',7],
                ['2020-02-06',7],
                ['2020-02-07',7],
                ['2020-02-08',7],
                ['2020-02-09',7],
                ['2020-02-10',7],
                ['2020-02-11',7],
                ['2020-02-12',7],
                ['2020-02-13',7],
                ['2020-02-14',7],
                ['2020-02-15',7],
                ['2020-02-16',7],
                ['2020-02-17',7],
                ['2020-02-18',7],
                ['2020-02-19',7],
                ['2020-02-20',7],

            ]
        }
    ]
};
export default echartsOptions