import styles from './css/TitleList.module.css';
import React, { Component } from 'react';
import rightArrowIcon from './img/arrow-right.png';
class TitleList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    
    return (
        <div className={styles.titleListCard}>
            <div className={styles.cardHeader}>这是卡片标题</div>
            <div className={styles.cardBody}>
                <div className={styles.titleItem}>
                    <div className={styles.itemDot}></div>
                    <div className={`${styles.itemText} single-line-overflow`}>这是标题这是标题这是标题这是标题这是标题</div>
                    <img className={styles.rightArrow} src={rightArrowIcon} alt="rightarrow" />
                </div>
                <div className={styles.titleItem}>
                    <div className={styles.itemDot}></div>
                    <div className={`${styles.itemText} single-line-overflow`}>这是标题这是标题这是标题这是标题这是标题</div>
                    <img className={styles.rightArrow} src={rightArrowIcon} alt="rightarrow" />
                </div>
                <div className={styles.titleItem}>
                    <div className={styles.itemDot}></div>
                    <div className={`${styles.itemText} single-line-overflow`}>这是标题这是标题这是标题这是标题这是标题</div>
                    <img className={styles.rightArrow} src={rightArrowIcon} alt="rightarrow" />
                </div>
            </div>
        </div>
    );
  }
}

export default TitleList;