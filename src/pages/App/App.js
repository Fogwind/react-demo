
import './css/App.css';
import React, { Component } from 'react';
// import watermark from 'watermark-dom';
import Http from '../../assets/js/http.js';
import Wegit from '../../assets/js/wegit.js';
import THEM_OPTIONS from '../../assets/js/themOptions.js';

import Banner from '../../components/Banner/Banner.js';

import HotCard from '../../components/HotCard/HotCard.js';
import DataCard from '../../components/DataCard/DataCard.js';
import TimeLine from '../../components/TimeLine/TimeLine.js';
import TitleList from '../../components/TitleList/TitleList.js';
import PageBottom from '../../components/PageBottom/PageBottom.js';


import NavTab from '../../components/NavTab/NavTab.js';
// 模拟列表数据
let mockListData = [
  {
      place: '河南省',
      orderNum: 1223,
      cancelRate: 1.2,
      badNum: 12,
      showLowerData: false,
      lowerData: [
          {
              place: '郑州市',
              orderNum: 333,
              cancelRate: 1.2,
              badNum: 12,
          },
          {
              place: '开封市',
              orderNum: 333,
              cancelRate: 1.2,
              badNum: 12,
          },
          {
              place: '登封市',
              orderNum: 333,
              cancelRate: 1.2,
              badNum: 12,
          },
      ]
  },
  {
    place: '湖北省',
    orderNum: 1223,
    cancelRate: 1.2,
    badNum: 12,
    showLowerData: false,
    lowerData: [
        {
            place: '武汉市',
            orderNum: 333,
            cancelRate: 1.2,
            badNum: 12,
        },
        {
            place: '仙桃市',
            orderNum: 333,
            cancelRate: 1.2,
            badNum: 12,
        },
        {
            place: '襄阳市',
            orderNum: 333,
            cancelRate: 1.2,
            badNum: 12,
        },
    ]
  },
  {
    place: '湖南省',
    orderNum: 1223,
    cancelRate: 1.2,
    badNum: 12,
    showLowerData: false,
    lowerData: []
  },
  {
    place: '江西省',
    orderNum: 1223,
    cancelRate: 1.2,
    badNum: 12,
    showLowerData: false,
    lowerData: []
  },
  {
    place: '江苏省',
    orderNum: 1223,
    cancelRate: 1.2,
    badNum: 12,
    showLowerData: false,
    lowerData: []
  },
  {
    place: '安徽省',
    orderNum: 1223,
    cancelRate: 1.2,
    badNum: 12,
    showLowerData: false,
    lowerData: [
      {
        place: '合肥市',
        orderNum: 333,
        cancelRate: 1.2,
        badNum: 12,
    },
    ]
  }
];

// 模拟时间线数据
let timeLineData = [
  {
    id: 123,
    time: '2020年02月03日 09:00',
    title: '这是标题这是标题这是标题这是标题这是标题这是标题',
    content: 'map 方法处理数组元素的范围是在 callback 方法第一次调用之前就已经确定了。调用map方法之后追加的数组元素不会被callback访问。如果存在的数组元素改变了，那么传给callback的值是map访问该元素时的值。在map函数调用后但在访问该元素前，该元素被删除的话，则无法被访问到。',
    from: '人民日报'
  },
  { 
    id: 223,
    time: '2020年02月03日 09:00',
    title: '这是标题这是标题这是标题这是标题这是标题这是标题',
    content: 'map 方法处理数组元素的范围是在 callback 方法第一次调用之前就已经确定了。调用map方法之后追加的数组元素不会被callback访问。如果存在的数组元素改变了，那么传给callback的值是map访问该元素时的值。在map函数调用后但在访问该元素前，该元素被删除的话，则无法被访问到。',
    from: '人民日报'
  },
  {
    id: 323,
    time: '2020年02月03日 09:00',
    title: '这是标题这是标题这是标题这是标题这是标题这是标题',
    content: 'map 方法处理数组元素的范围是在 callback 方法第一次调用之前就已经确定了。调用map方法之后追加的数组元素不会被callback访问。如果存在的数组元素改变了，那么传给callback的值是map访问该元素时的值。在map函数调用后但在访问该元素前，该元素被删除的话，则无法被访问到。',
    from: '人民日报'
  },
  {
    id: 423,
    time: '2020年02月03日 09:00',
    title: '这是标题这是标题这是标题这是标题这是标题这是标题',
    content: 'map 方法处理数组元素的范围是在 callback 方法第一次调用之前就已经确定了。调用map方法之后追加的数组元素不会被callback访问。如果存在的数组元素改变了，那么传给callback的值是map访问该元素时的值。在map函数调用后但在访问该元素前，该元素被删除的话，则无法被访问到。',
    from: '人民日报'
  },
  {
    id: 523,
    time: '2020年02月03日 09:00',
    title: '这是标题这是标题这是标题这是标题这是标题这是标题',
    content: 'map 方法处理数组元素的范围是在 callback 方法第一次调用之前就已经确定了。调用map方法之后追加的数组元素不会被callback访问。如果存在的数组元素改变了，那么传给callback的值是map访问该元素时的值。在map函数调用后但在访问该元素前，该元素被删除的话，则无法被访问到。',
    from: '人民日报'
  },
  {
    id: 623,
    time: '2020年02月03日 09:00',
    title: '这是标题这是标题这是标题这是标题这是标题这是标题',
    content: 'map 方法处理数组元素的范围是在 callback 方法第一次调用之前就已经确定了。调用map方法之后追加的数组元素不会被callback访问。如果存在的数组元素改变了，那么传给callback的值是map访问该元素时的值。在map函数调用后但在访问该元素前，该元素被删除的话，则无法被访问到。',
    from: '人民日报'
  }
];

// 模拟导航配置
let navOptions = [
  {
    name: '全国订单数据',
    target: 'DataCard',
    active: true,
  },
  {
    name: '实时资讯',
    target: 'TimeLine',
    active: false,
  },
  {
    name: '卡片标题',
    target: 'TitleList',
    active: false,
  }
];

class App extends Component {
  constructor(props) {
    super(props);

    // this.scrollHandler = this.scrollHandler.bind(this);
    this.scrollHandler = Wegit.verticalScrollReduce(this.scrollCallback.bind(this),300,600,true).bind(this);
    this.appRoot = null;
    // 头部导航栏dom
    this.DataCard = null;
    this.TimeLine = null;
    this.TitleList = null;

    this.state = { 
      backgroundColor: THEM_OPTIONS.pageBackgroundColor,
      locationCity:'',
      listData: [],
      listDataIsMore: false, // 判断列表数据是否多于5项，多于5项则显示查看更多地区数据
      timeLineData: [],
      timeLineDataMore: 0, // 0表示数据不多于5条，1表示数据多余5条且只显示的5条，2表示显示了所有数据
      navList: [],
      showNavTab: false
    };
    this.navTabIsShow = false;
    this.activeNavTabIndex = 0;
    this.isRunScrollHandler = true;
  }

  // 组件挂载开始之前，也就是在组件调用 render 方法之前调用。
  UNSAFE_componentWillMount () {
    console.log('component will mount');
  }
  // 组件挂载完成以后，也就是 DOM 元素已经插入页面后调用。
  componentDidMount () {
    if(THEM_OPTIONS.isPageFilter) {
      this.setPageFilter(); // 设置页面灰度
    }
    // 添加水印
    if(THEM_OPTIONS.isWaterMark) {
      this.addWaterMark();
    }
    // 测试请求数据
    this.getData();
    window.addEventListener('scroll',this.scrollHandler);


    console.log('component did mount')
    this.getLocationCity();
    setTimeout(() => {
      let arr = [];
      let timeLineArr = [];
      if(mockListData.lenght < 6) {
        arr = mockListData.slice(0);
      } else {
        arr = mockListData.slice(0,5);
      }
      if(timeLineData.length < 6) {
        timeLineArr = timeLineData.slice(0);
      } else {
        timeLineArr = timeLineData.slice(0,5);
      }
      this.setState({
        listData:arr,
        listDataIsMore: mockListData.length > 5,
        timeLineData: timeLineArr,
        timeLineDataMore: timeLineData.length > 5 ? 1 : 0,
        navList: navOptions
      });
    },1000);
  }
  // 组件对应的 DOM 元素从页面中删除之前调用。
  componentWillUnmount() {
    window.removeEventListener('scroll',this.scrollHandler);
  }
  // 设置页面灰度
  setPageFilter() {
    let originalStyle = document.documentElement.getAttribute('style');
    document.documentElement.setAttribute('style','filter: grayscale(1);' + originalStyle);
  }
  scrollCallback() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    let windowHeight = Wegit.getViewportSize().height;
    let navTargetDoms = {};
    let activeIndex = this.activeNavTabIndex;
    // 获取导航栏对应元素的位置等数据
    navOptions.forEach((item,index) => {
      // let offsetTop = this[item.target].offsetTop + 
      navTargetDoms[item.target] = {
        index: index,
        dom: this[item.target],
        size: this[item.target].getBoundingClientRect(),
        offsetTop:Wegit.getOffsetTop(this[item.target]),
      };
      // 判断滚动距离给头部导航加高亮
      // console.log();
      if(navTargetDoms[item.target].size.top < windowHeight / 2 ) {
        activeIndex = index;
      }

    });
    if(activeIndex !== this.activeNavTabIndex) {
      this.activeNavTabIndex = activeIndex;
      this.setNavItemActive(activeIndex);
    }
    
    // 显示隐藏头部导航
    if(scrollTop > 0) {
      if(!this.navTabIsShow) {
        this.setState({
          showNavTab: true
        });
        this.navTabIsShow = true;
      }
      
    } else {
      this.setState({
        showNavTab: false
      });
      this.navTabIsShow = false;
    }
    
  }
  // 滚动到对应的位置
  scrollToTarget(target,index) {
    //console.log(target,index);
    let targetPosition = this[target].getBoundingClientRect();
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    console.log(targetPosition,scrollTop);

    window.scrollTo({ 
      top: scrollTop + targetPosition.top - 50, 
      behavior: "instant" 
    });

    //this[target].scrollIntoView(true);
    this.setNavItemActive(index);
  }
  // 设置头部导航高亮
  setNavItemActive(index) {
    let navoptions = this.state.navList;
    navoptions.forEach((item,i) => {
      item.active = false;
      if(index === i) {
        item.active = true;
      }
    });
    this.setState({
      navList: navoptions
    });
  }




  /**
   * @method 获取定位城市
   */
  getLocationCity() {
    Wegit.getLocation()
    .then((res) => {
      console.log(res);
      this.setState({
        locationCity: res.address.city
      });
    })
    .catch((err) => {
      console.log(err);
    });
  }
  // 显示下一级数据
  showLowerDataList(item,index) {
    let originalListData = this.state.listData;
    if(originalListData[index].showLowerData) {
      originalListData[index].showLowerData = false;
    } else {
      originalListData[index].showLowerData = true;
    }
    this.setState({
      listData:originalListData
    });
  }
  // 列表全部显示完了，隐藏查看更多地区数据
  showMoreListData() {
    let originalListData = this.state.listData;
    if(originalListData.length === mockListData.length) {
      return;
    }
    originalListData = originalListData.concat(mockListData.slice(5));
    this.setState({
      listData: originalListData,
      listDataIsMore: false
    });
  }
  // 显示更多时间线数据
  showMoreTimeLine() {
    let originalListData = this.state.timeLineData;
    if(originalListData.length < mockListData.length) {
      originalListData = originalListData.concat(timeLineData.slice(5));
      this.setState({
        timeLineData: originalListData,
        timeLineDataMore: 2
      });
    } else {
      originalListData = timeLineData.slice(0,5);
      this.setState({
        timeLineData: originalListData,
        timeLineDataMore: 1
      });
    }
  }
  // 页面添加水印 -- 这里做了延时处理，模拟接口请求的时间。因为数据返回之前页面的高度比较小。
  addWaterMark() {
    setTimeout(() => {
      Wegit.setPageWaterMark();
    },2000);
  }
  // 测试请求数据
  getData() {
    Http.$get('/yqmap?c=villagelist')
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  }
  
  render() {
    const bannerImg = THEM_OPTIONS.banner;
    const logoImg = THEM_OPTIONS.logo;
    const appBackground = this.state.backgroundColor;
    let listDataIsMore = this.state.listDataIsMore;
    return (
      <div ref={(element) => {this.appRoot = element}} className="App" style={{background: appBackground}}>
        <Banner banner={bannerImg} logo={logoImg}></Banner>
        <div className="App-inner">
          <HotCard></HotCard>
          <div className="anchor" ref={(element) => {this.DataCard = element}}>
            <DataCard listDataIsMore={listDataIsMore} cityName={this.state.locationCity} listData={this.state.listData} showLowerDataList={this.showLowerDataList.bind(this)} showMoreListData={this.showMoreListData.bind(this)}></DataCard>
          </div>
          <div className="anchor" ref={(element) => {this.TimeLine = element}}>
            <TimeLine totalNum={this.state.timeLineDataMore} listData={this.state.timeLineData} showMoreData={this.showMoreTimeLine.bind(this)}></TimeLine>
          </div>
          <div className="anchor" ref={(element) => {this.TitleList = element}}>
            <TitleList></TitleList>
          </div>
        </div>
        <PageBottom></PageBottom>
       
        { this.state.showNavTab && 
          <NavTab navOptions={this.state.navList} scrollToTarget={this.scrollToTarget.bind(this)}></NavTab>
        } 
      </div>
    );
  }
}

export default App;