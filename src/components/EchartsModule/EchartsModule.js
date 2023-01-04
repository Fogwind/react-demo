import styles from './css/EchartsModule.module.css';
import React, { Component } from 'react';
import echartsOptions from './js/echartsoptions.js';
var echarts = require('echarts');


class EchartsModule extends Component {
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
    this.myChart.setOption(echartsOptions);
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
        <div className={styles.echartsRoot}>
          <div ref={el => this.echartsDom = el} className={styles.echartsDom}></div>
        </div>
    );
  }
}

export default EchartsModule;