import styles from './css/ChinaMap.module.css';
import React, { Component } from 'react';
import mapOptions from './js/mapoptions.js';
var echarts = require('echarts');
var chinaJson = require('./js/china.json');



class ChinaMap extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.echartsDom = null;
    this.myChart = null;
    this.resizeHandler = this.resizeHandler.bind(this);
  }
  // 生命周期参考文章 https://www.cnblogs.com/floor/p/11616467.html
  //// 基于准备好的dom，初始化echarts实例 var myChart = echarts.init(document.getElementById('main'));
  componentDidMount() {
    this.myChart = echarts.init(this.echartsDom);
    echarts.registerMap('china', chinaJson);
    // this.myChart.registerMap('中国地图', chinaJson);
    this.myChart.setOption(mapOptions);
    window.addEventListener("resize", this.resizeHandler);
  }
  componentDidUpdate(prevProps, prevState, snapshot) {

  }
  componentWillUnmount() {
    window.removeEventListener('resize',this.resizeHandler);
  }
  resizeHandler() {
    if(this.myChart) {
      this.myChart.resize();
    }
  }
  render() {
    
    return (
        <div className={styles.chinaMap}>
          <div ref={el => this.echartsDom = el} className={styles.echartsDom}></div>
        </div>
    );
  }
}

export default ChinaMap;