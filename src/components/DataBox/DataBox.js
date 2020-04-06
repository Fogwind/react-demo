import styles from './css/DataBox.module.css';
import React, { Component } from 'react';
// #cc4100
// #e68600
// #666666
// #008d5e
import defaultIcon from './img/total.png';
class DataBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const dataIcon = this.props.dataIcon ? this.props.dataIcon : defaultIcon;
    const dataColor = this.props.dataColor ? this.props.dataColor : '#cc4100';
    const dataFlag = this.props.dataFlag ? this.props.dataFlag : '订单量';
    const dataNumber = this.props.dataNumber ? this.props.dataNumber : '1333333';
    const dataUnit = this.props.dataUnit ? this.props.dataUnit : '';
    const width = this.props.width ? this.props.width : '33.33333333%';
    return (
        <div className={styles.dataBox} style={{width: width}}>
            <div className={styles.dataCategory} style={{borderColor:`${dataColor}`}}>
                <img className={styles.dataIcon} src={dataIcon} alt="totalicon"/><span className={styles.dataFlag}>{dataFlag}</span>
            </div>
            <div className={styles.dataNumber} style={{color: dataColor}}>{dataNumber}<span className={styles.unit}>{dataUnit}</span></div>    
        </div>
    );
  }
}

export default DataBox;