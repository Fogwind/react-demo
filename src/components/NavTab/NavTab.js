import styles from './css/NavTab.module.css';
import React, { Component } from 'react';
import navIcon from './img/place.png';
class NavTab extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  scrollToTarget(target,index,e) {
    this.props.scrollToTarget(target,index);
  }

  render() {
    let navList = this.props.navOptions;
    console.log(99999,navList);
    let navListDom = navList.map((item,index) => {
        let classStr = `${styles.navItem} single-line-overflow`;
        if(item.active) {
            classStr = `${classStr} ${styles.active}`;
        }
        return (
            <div onClick={this.scrollToTarget.bind(this,item.target,index)} className={classStr} key={item.target} style={{width: 100 / navList.length  + '%'}}>
              { item.active &&
                <img className={styles.navImg} src={navIcon} alt="navIcon"/>
              }
              {item.name}
            </div>
        )
    });
    return (
        <div className={styles.navTab}>
            {navListDom}
        </div>
    );
  }
}

export default NavTab;