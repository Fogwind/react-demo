import styles from './css/RxSwiper.module.css';
import React, { Component } from 'react';
import Swiper from 'swiper/dist/js/swiper.js';
import 'swiper/dist/css/swiper.min.css';

class RxSwiper extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.mySwiper = null;
    this.state = { };
  }

  // 组件挂载开始之前，也就是在组件调用 render 方法之前调用。
  UNSAFE_componentWillMount () {
    console.log('component will mount');
  }
  // 组件挂载完成以后，也就是 DOM 元素已经插入页面后调用。
  componentDidMount () {
    console.log('component did mount')
    this.mySwiper = new Swiper('#' + this.props.id, { /* ... */ });
  }
  // 组件对应的 DOM 元素从页面中删除之前调用。
  componentWillUnmount() { }
 
  render() {
    
    return (
        <div id={this.props.id} className={`${styles.swiperContainer} swiper-container`}>
          {this.props.children}
        </div>
    );
  }
}

export default RxSwiper;