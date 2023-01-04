import styles from './css/TimeLine.module.css';
import React, { Component } from 'react';
import downArrowIcon from './img/down-arrow.png';
import upArrowIcon from './img/up-arrow.png';
import LineCard from '../LineCard/LineCard.js';

class TimeLine extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  showMore() {
    this.props.showMoreData();
  }

  render() {
    let listData = this.props.listData ? this.props.listData : [];
    let totalNum = this.props.totalNum;
    let listDom = listData.map((item,index) => {
      return (<LineCard key={item.id} data={item} index={index}></LineCard>)
    });
    let bottomMoreDom = null;
    if(totalNum === 1) {
      bottomMoreDom = (<div className={styles.bottomMore} onClick={this.showMore.bind(this)}>
        查看更多资讯<img className={styles.arrowImg} src={downArrowIcon} alt="showmore"/>
      </div>);
    } else if(totalNum === 2) {
      bottomMoreDom = (<div className={styles.bottomMore} onClick={this.showMore.bind(this)}>
        收起<img className={styles.arrowImg} src={upArrowIcon} alt="showmore"/>
      </div>);
    }
    
    return (
        <div className={styles.timeLine}>
          <div className={styles.timeLineTitle}>实时资讯</div>
          <div className={styles.timeLineBody}>
              {listDom}
          </div>
          {bottomMoreDom}
        </div>
    );
  }
}

export default TimeLine;