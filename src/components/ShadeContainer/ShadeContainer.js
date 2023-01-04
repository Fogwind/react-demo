import { Component } from 'react';
import ReactDOM from 'react-dom';

class ShadeContainer extends Component {
    constructor(props) {
      super(props);
      // 初始化创建渲染的父元素并添加到body下
      this.node = document.createElement('div');
      document.body.appendChild(this.node);
      // this.node.setAttribute('style','position: fixed;width:100%;height:100%;top:0;left:0;z-index:100000;');
      this.touchMoveHandler = this.touchMoveHandler.bind(this);
    }
  
    // 组件挂载开始之前，也就是在组件调用 render 方法之前调用。
    UNSAFE_componentWillMount () {
      console.log('component will mount');
    }
    // 组件挂载完成以后，也就是 DOM 元素已经插入页面后调用。
    componentDidMount () {
      this.node.addEventListener('touchmove',this.touchMoveHandler,{passive: false});
    }
    // 组件对应的 DOM 元素从页面中删除之前调用。
    componentWillUnmount() { 
      this.node.removeEventListener('touchmove',this.touchMoveHandler);
    }
    // 阻止滑动穿透
    touchMoveHandler(e) {
      //e.preventDefault();
    }
  
    render() {
        const { visible, children } = this.props;
        // if(visible) {
        //     ModalHelper.afterOpen();
        // } else {
        //     ModalHelper.beforeClose();
        // }
        // 直接通过显隐表示
        return visible && ReactDOM.createPortal(
          children,
          this.node,
        );
    }
  }
  
  export default ShadeContainer;