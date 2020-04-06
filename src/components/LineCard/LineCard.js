import styles from './css/LineCard.module.css';
import React, { Component } from 'react';

class LineCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMore: false
    };
  }
  
  showMore() {
    this.setState({
      showMore: true
    });
  }
  render() {
    let data = this.props.data;
    let index = this.props.index;
    let contentBodyClass = `${styles.contentBody}`;
    let moreClass = `${styles.more}`;
    if(this.state.showMore) {
      contentBodyClass = `${styles.contentBody} ${styles.showmore}`;
      moreClass = `${styles.more} ${styles.hide}`;
    }
    return (
        <div className={styles.lineCard}>
            <div className={styles.dot}></div>
            <div className={styles.line}></div>
            <div className={styles.lineCardBody}>
                <div className={styles.dateTime}>
                  {data.time}
                  {index === 0 && 
                    <span className={styles.latest}>最新</span>
                  }
                  
                </div>
                <div className={styles.contentBox}>
                    <div className={styles.contentTitle}>{data.title}</div>
                    <div className={contentBodyClass}>
                        <div className={styles.content}>{data.content}</div>
                        <div onClick={this.showMore.bind(this)} className={moreClass}>更多</div>
                    </div>
                    <div className={styles.contnetBottom}>来源：{data.from}</div>
                </div>
            </div>
        </div>
    );
  }
}

export default LineCard;