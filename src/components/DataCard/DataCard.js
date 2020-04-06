import styles from './css/DataCard.module.css';
import React, { Component } from 'react';

import DataBox from '../DataBox/DataBox.js';
import ChinaMap from '../ChinaMap/ChinaMap.js';
import EchartsModule from '../EchartsModule/EchartsModule.js';
import DrawerList from '../DrawerList/DrawerList.js';
import RxShade from '../RxShade/RxShade.js';
import RxSwiper from '../RxSwiper/RxSwiper.js';

import badIcon from './img/bad.png';
import cancelIcon from './img/cancel.png';
import compareIcon from './img/compare.png';
import doshIcon from './img/dosh.png';
import placeIcon from './img/place.png';
import helpIcon from './img/help.png';
import closeIcon from './img/close.png';

// import downArrowIcon from './img/down-arrow.png';
// import upArrowIcon from './img/up-arrow.png';

class DataCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDataIntroduction: false
        };
    }
    
    // 组件挂载开始之前，也就是在组件调用 render 方法之前调用。
    UNSAFE_componentWillMount () {
        console.log('component will mount');
    }
    // 组件挂载完成以后，也就是 DOM 元素已经插入页面后调用。发送ajax
    componentDidMount () {
        console.log('component did mount')
    }
    // 组件对应的 DOM 元素从页面中删除之前调用。
    componentWillUnmount() {

    }
    // 显示下一级数据列表
    toggleLowerListData(item,index) {
        this.props.showLowerDataList(item,index);
    }
    // 显示更多上一级数据
    showMore() {
        this.props.showMoreListData()
    }
    toggleDataShade(flag,e) {
      this.setState({
        showDataIntroduction: flag
      });
    }
    

    render() {
        const cityName = this.props.cityName ? '您在' + this.props.cityName : '暂无您的定位，默认郑州市';
        const listData = this.props.listData ? this.props.listData : [];
        let listDataIsMore = this.props.listDataIsMore;
        return (
            <div className={styles.dataCard}>
                <div className={styles.globalData}>
                    <div className={styles.dataTitle}>
                        <div className={styles.title}>全国订单数据</div>
                        <div className={styles.cornerTips} onClick={this.toggleDataShade.bind(this,true)}><img className={styles.helpIcon} src={helpIcon} alt="help"/>数据说明</div>
                    </div>
                    <div className={styles.dataDisplayBox}>
                        <DataBox dataNumber="16.66" dataUnit="万" width="33.33333333%"></DataBox>
                        <DataBox dataIcon={cancelIcon} dataColor="#e68600" dataFlag="取消率" dataNumber="2.0" dataUnit="%" width="33.33333333%"></DataBox>
                        <DataBox dataIcon={badIcon} dataColor="#666666" dataFlag="差评数" dataNumber="20" dataUnit="" width="33.33333333%"></DataBox>
                    </div>

                    <div className={styles.dataCompare}>
                        <div className={styles.compareTitle}>
                            <img className={styles.compareImg} src={compareIcon} alt="compore" />
                            <img className={styles.doshImg} src={doshIcon} alt="dosh" />
                        </div>
                        <div className={styles.compareData}>
                            <div className={styles.compareDataItem} style={{ width: "33.33333333%" }}>+324</div>
                            <div className={styles.compareDataItem} style={{ width: "33.33333333%" }}>+324</div>
                            <div className={styles.compareDataItem} style={{ width: "33.33333333%" }}>+324</div>
                        </div>
                        <div className={styles.compareBottom}><img className={styles.doshImgBottom} src={doshIcon} alt="dosh" /></div>
                    </div>

                    <div className={styles.localData}>
                        <div className={styles.localHeader}>
                            <div className={styles.localHeaderTitle}>本地数据</div>
                            <div className={styles.localHeaderCity}><img className={styles.placeImg} src={placeIcon} alt="place" />
                                {cityName}
                                <span className={styles.after}></span>
                            </div>
                        </div>
                        <div className={styles.localDataList}>
                            <div className={styles.listItem}>
                                <div className={`${styles.infoItem} ${styles.label} single-line-overflow`}>河南省</div>
                                <div className={styles.infoItem}><span className={styles.totalInfo}>1.25万</span>单</div>
                                <div className={styles.infoItem}>取消率<span className={styles.cancelInfo}>1.5%</span></div>
                                <div className={styles.infoItem}>差评数<span className={styles.badInfo}>12</span></div>
                            </div>
                            <div className={styles.listItem}>
                                <div className={`${styles.infoItem} ${styles.label} single-line-overflow`}>郑州市</div>
                                <div className={styles.infoItem}><span className={styles.totalInfo}>1.25万</span>单</div>
                                <div className={styles.infoItem}>取消率<span className={styles.cancelInfo}>1.5%</span></div>
                                <div className={styles.infoItem}>差评数<span className={styles.badInfo}>12</span></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 订单地图 */}
                <div className={styles.orderMap}>
                    <div className={styles.mapTitle}>订单地图</div>
                    <ChinaMap></ChinaMap>
                </div>
                {/* 订单趋势 */}
                <div className={styles.orderTrend}>
                    <div className={styles.treanTitle}>订单趋势</div>
                    <EchartsModule></EchartsModule>
                </div>
                {/* swiper */}
                <div className={styles.cardSection}>
                  <div className={styles.sectionTitle}>这是标题</div>
                  <div>
                      <RxSwiper id='test'>
                        <div className="swiper-wrapper">
                          <div className="swiper-slide"><EchartsModule></EchartsModule></div>
                          <div className="swiper-slide"><EchartsModule></EchartsModule></div>
                          <div className="swiper-slide"><EchartsModule></EchartsModule></div>
                        </div>
                      </RxSwiper>
                  </div>
                </div>
                {/* 数据列表 */}
                <div className={styles.dataListRoot}>
                    <div className={styles.dataListTitle}>订单数据列表</div>
                    <DrawerList isMore={listDataIsMore} listData={listData} toggleLowerListData={this.toggleLowerListData.bind(this)} showMore={this.showMore.bind(this)}></DrawerList>
                </div>
                <RxShade visible={this.state.showDataIntroduction}>
                    <div className={styles.dataShadeInner}>
                       <div className={styles.dataShadeCard}>
                          <div className={styles.dataShadeTitle}>数据说明</div>
                          <div className={styles.dataShadeContent}>
                              <div className={styles.contentTitle}><div className={styles.titleDot}></div>这是小标题</div>
                              <div className={styles.contentParagraph}>这是说明内容这是说明内容这是说明内容这是说明内容</div>
                              <div className={styles.contentTitle}><div className={styles.titleDot}></div>这是小标题</div>
                              <div className={styles.contentParagraph}>这是说明内容这是说明内容这是说明内容这是说明内容这是说明内容这是说明内容这是说明内容这是说明内容</div>
                              <div className={styles.contentTitle}><div className={styles.titleDot}></div>这是小标题</div>
                              <div className={styles.contentParagraph}>这是说明内容这是说明内容这是说明内容这是说明内容这是说明内容这是说明内容这是说明内容这是说明内容</div>
                              <div className={styles.contentParagraph}>这是说明内容这是说明内容这是说明内容这是说明内容这是说明内容这是说明内容这是说明内容这是说明内容</div>
                              <div className={styles.contentParagraph}>这是说明内容这是说明内容这是说明内容这是说明内容这是说明内容这是说明内容这是说明内容这是说明内容</div>
                              <div className={styles.contentParagraph}>这是说明内容这是说明内容这是说明内容这是说明内容这是说明内容这是说明内容这是说明内容这是说明内容</div>
                              <div className={styles.contentParagraph}>这是说明内容这是说明内容这是说明内容这是说明内容</div>
                              <div className={styles.contentParagraph}>这是说明内容这是说明内容这是说明内容这是说明内容这是说明内容这是说明内容这是说明内容这是说明内容</div>
                              <div className={styles.contentParagraph}>这是说明内容这是说明内容这是说明内容这是说明内容这是说明内容这是说明内容这是说明内容这是说明内容</div>
                              <div className={styles.contentParagraph}>这是说明内容这是说明内容这是说明内容这是说明内容这是说明内容这是说明内容这是说明内容这是说明内容</div>
                              <div className={styles.contentParagraph}>这是说明内容这是说明内容这是说明内容这是说明内容这是说明内容这是说明内容这是说明内容这是说明内容</div>
                              <div className={styles.contentParagraph}>这是说明内容这是说明内容这是说明内容这是说明内容这是说明内容这是说明内容这是说明内容这是说明内容</div>
                          </div>
                          <div className={styles.contentBottom}></div>
                       </div>
                       <div onClick={this.toggleDataShade.bind(this,false)} className={styles.shadeCloseBtn}><img className={styles.shadeCloseImg} src={closeIcon}  alt="close"/></div>
                    </div>
                </RxShade>
            </div>
        );
    }
}

export default DataCard;