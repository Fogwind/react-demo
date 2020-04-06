import styles from './css/PageBottom.module.css';
import React, { Component } from 'react';

class PageBottom extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    
    return (
        <div className={styles.pageBottom}>
         <div className={styles.logoName}>UU跑腿</div>
         <div className={styles.logoTips}>送的更快 做的更多</div>
        </div>
    );
  }
}

export default PageBottom;