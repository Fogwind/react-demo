import styles from './css/RxShade.module.css';
import React, { Component } from 'react';
import ShadeContainer from '../ShadeContainer/ShadeContainer.js';

// import closeIcon from './img/close.png';

class RxShade extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.shadeRoot = null;
    this.state = { 
        visible: false
    };
  }

  // 组件挂载开始之前，也就是在组件调用 render 方法之前调用。
  UNSAFE_componentWillMount () {
    console.log('component will mount');
  }
  // https://www.jianshu.com/p/f782d3ec59e8
  componentWillReceiveProps(props) {
    this.stopTouchMoveCross();
    this.setState({ visible: props.visible });
  }
  // 组件挂载完成以后，也就是 DOM 元素已经插入页面后调用。
  componentDidMount () {
    // this.setState({ visible: this.props.visible });
  }
  // 组件对应的 DOM 元素从页面中删除之前调用。
  componentWillUnmount() {  }
  
  onClose() {
      let closeCallback = this.props.onClose;
      let clickShadeClose = this.props.clickShadeClose;

      if(clickShadeClose) {
        this.setState({ visible: false });
      }
      if(closeCallback) {
        closeCallback();
      }
  }

  // 阻止滑动穿透函数
  stopTouchMoveCross() {
    let originalStyle = document.body.getAttribute('style');
    let originalStyleObj = {};
    let styleStr = '';
    if(originalStyle) {
      var arr = originalStyle.split(';');
      arr.forEach((item,index) => {
        if(item) {
          originalStyleObj[item.split(':')[0]] = item.split(':')[1];
        }
        
      });
    }
    if(!!this.props.visible) { // 显示
      originalStyleObj.overflow = 'hidden';
    } else { // 隐藏
      originalStyleObj.overflow = 'auto';
    }
    for(let keys in originalStyleObj) {
      styleStr = styleStr + keys + ':' + originalStyleObj[keys] + ';';
    }
    document.body.setAttribute('style',styleStr);
  }

  render() {
    let isShowShade = !!this.state.visible;
    const children = this.props.children;
    return (
        <ShadeContainer visible={isShowShade}>
            <div onClick={this.onClose.bind(this)} ref={(element) => {this.shadeRoot = element}} className={styles.rxShade}>
             {children}
            </div>
        </ShadeContainer>
        
    );
  }
}

export default RxShade;