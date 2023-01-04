import styles from './css/DrawerList.module.css';
import React, { Component } from 'react';

import downArrowIcon from './img/down-arrow.png';
import upArrowIcon from './img/up-arrow.png';


class ListHeader extends Component {
  render() {
    return (
      <div className={styles.listLabel}>
          <div className={styles.labelItem}>地区</div>
          <div className={styles.labelItem}>订单量</div>
          <div className={styles.labelItem}>取消率</div>
          <div className={styles.labelItem}>差评数</div>
      </div>
    );
  }

}


class LowerDataList extends Component {
  render() {
    let lowerList = this.props.lowerList ? this.props.lowerList : [];
    let lowerListDom = lowerList.map((item,index) => {
      let groupClass = `${styles.lowerDataGroup}`;
      if(index === (lowerList.length - 1)) {
        groupClass = `${styles.lowerDataGroup} ${styles.noborder}`;
      }
      return (
        <div key={item.place} className={groupClass}>
          <div className={styles.lowerDataItem}>{item.place}</div>
          <div className={styles.lowerDataItem}>{item.orderNum}</div>
          <div className={styles.lowerDataItem}>{item.cancelRate}</div>
          <div className={styles.lowerDataItem}>{item.badNum}</div>
        </div>
      )
    });
    return (
      <div className={styles.lowerDataRoot}>
        {lowerListDom}
      </div>
    );
  }

}


class DrawerList extends Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = { };
  }

  // 组件挂载开始之前，也就是在组件调用 render 方法之前调用。
  UNSAFE_componentWillMount () {
    console.log('component will mount');
  }
  // 组件挂载完成以后，也就是 DOM 元素已经插入页面后调用。
  componentDidMount () {
    console.log('component did mount')
  }
  // 组件对应的 DOM 元素从页面中删除之前调用。
  componentWillUnmount() { }
  // 事件对象是最后一个参数
  showLowerDataList(item,index,e) {
    this.props.toggleLowerListData(item,index);
  }
  // 显示更多地区数据
  showMore() {
    this.props.showMore();
  }
  render() {
    const isMore = this.props.isMore;
    const superDataList = this.props.listData ? this.props.listData : [];
    console.log(3333,superDataList.length);
    const lowerListKey = this.props.childListKey ? this.props.childListKey : 'lowerData';
    let listDataDom = superDataList.map((item,index) => {
      let arrowImgDom = null;
      if(item[lowerListKey].length > 0 && item.showLowerData) {
        arrowImgDom = (<img className={styles.arrowImg} src={upArrowIcon} alt="arrowimg" />);
      }
      if(item[lowerListKey].length > 0 && !item.showLowerData) {
        arrowImgDom = (<img className={styles.arrowImg} src={downArrowIcon} alt="arrowimg" />);
      }
      return (
        <div key={item.place} className={styles.listItemRoot}>
            <div className={styles.superData} onClick={this.showLowerDataList.bind(this,item,index)}>
                <div className={`${styles.superItem} ${styles.firstSuperItem} single-line-overflow`}>{item.place}</div>
                <div className={styles.superItem}>{item.orderNum}</div>
                <div className={styles.superItem}>{item.cancelRate}</div>
                <div className={styles.superItem}>{item.badNum}</div>
                {arrowImgDom}
            </div>
            { item.showLowerData &&
              <LowerDataList lowerList={item[lowerListKey]}></LowerDataList>
            }      
        </div>
      )
    });
    return (
        <div className={styles.drawerList}>
          <ListHeader></ListHeader>
          {listDataDom}
          { isMore && 
            <div onClick={this.showMore.bind(this)} className={styles.bottom}>查看更多地区<img className={styles.moreImg} src={downArrowIcon} alt="more" /></div>
          }
          
          
        </div>
    );
  }
}

export default DrawerList;