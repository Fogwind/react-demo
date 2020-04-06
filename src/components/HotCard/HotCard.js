import styles from './css/HotCard.module.css';
import React, { Component } from 'react';
import hotImg from './img/hot.png';
import nailIcon from './img/nail.png';
import rightArrow from './img/right-arrow.png';
class HotCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    
    return (
        <div className={styles.hotCard}>
          <img className={styles.nailLeft} src={nailIcon} alt="nail" />
          <img className={styles.nailRight} src={nailIcon} alt="nail" />
          <img className={styles.hotIcon} src={hotImg} alt="icon"/>
          <div className={styles.hotInfo}>
            <div className={`${styles.hotTitle} single-line-overflow`}>这是热门标题这是热门标题这是热门标题这是热门标题这是热门标题这是热门标题</div>
            <div className={`${styles.hotDiscribe} single-line-overflow`}>这是热门描述这是热门描述</div>
          </div>
          <div className={styles.hotDirect}>
            查询
            <img className={styles.rightArrow} src={rightArrow} alt="rightArrow" />
          </div>
          
        </div>
    );
  }
}

export default HotCard;