import styles from './css/Banner.module.css';
import React, { Component } from 'react';
import defaultBanner from './img/banner.jpg';
import logo from './img/logo.jpg';
class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const bannerImg = this.props.banner ? this.props.banner : defaultBanner;
    const logoImg = this.props.logo ? this.props.logo : logo;
    return (
        <div className={styles.banner}>
          <img className={styles.bannerImg} src={bannerImg} alt="banner" />
          <div className={styles.bannerTips}><img className={styles.bannerLogo} src={logoImg} alt="logo" />UU前端提供技术支持</div>
        </div>
    );
  }
}

export default Banner;