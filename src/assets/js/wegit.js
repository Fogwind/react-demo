import WaterMark from './watermark.js';
let wegit = {
    // 设置页面水印 -- 一个html文件只能调用一次
    setPageWaterMark(setting) {
      WaterMark.remove();
      WaterMark.init({watermark_txt: "UU跑腿"});
      let watermarkSetting = {
        watermark_txt:"UU跑腿",             //水印的内容
        watermark_x:10,                     //水印起始位置x轴坐标
        watermark_y:20,                     //水印起始位置Y轴坐标
        watermark_rows:18,                   //水印行数
        watermark_cols:3,                   //水印列数
        watermark_x_space:30,              //水印x轴间隔
        watermark_y_space:30,               //水印y轴间隔
        watermark_font:'微软雅黑',           //水印字体
        watermark_color:'#aaaaaa',            //水印字体颜色
        watermark_fontsize:'12px',          //水印字体大小
        watermark_alpha:0.15,               //水印透明度，要求设置在大于等于0.005
        watermark_width:80,                //水印宽度
        watermark_height:20,               //水印长度
        watermark_angle:15,                 //水印倾斜度数
        watermark_parent_width:0,      //水印的总体宽度（默认值：body的scrollWidth和clientWidth的较大值）
        watermark_parent_height:0,     //水印的总体高度（默认值：body的scrollHeight和clientHeight的较大值）
        watermark_parent_node:null     //水印插件挂载的父元素element,不输入则默认挂在body上
      };
      if(setting) {
        watermarkSetting = Object.assign(watermarkSetting,setting);
      }
      WaterMark.load(watermarkSetting);
      return WaterMark;
    },
    getLocation() {
        var BMap = window.BMap;
        var BMAP_STATUS_SUCCESS = window.BMAP_STATUS_SUCCESS;
        var geolocation = new BMap.Geolocation();
        return new Promise(function(resolve, reject) {
          geolocation.getCurrentPosition(function (r) {
            if (this.getStatus() === BMAP_STATUS_SUCCESS) {
              resolve(r);
            }
            else {
              reject({msg: '定位失败', status: -1});
            }   
          });
        })       
    },
    isArray(param) {
      var str = Object.prototype.toString.call(param);
      var typeStr = str.split(' ')[1].replace(']','');
      return typeStr === 'Array';
    },
    // 节流函数
    verticalScrollReduce(callback,t,timeRange,endMustRun) {
      let startTime = new Date().getTime();
      let timer = null;
      let count = 0;
      endMustRun = !!endMustRun;
      return function(e) {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        if(endMustRun && scrollTop === 0) {
          callback();
          // endMustRun = false;
        }
        if(count === 0) {
          callback();
          count++;
          console.log(count);
        }
        let endTime = new Date().getTime();
        if(timer) {
          clearTimeout(timer);
        }
        if((endTime - startTime) >= timeRange) {
          callback();
          count++;
          startTime = endTime;
        } else {
          timer = setTimeout(function() {
            callback();
            timer = null;
            count++;
            // endMustRun = true;
          },t);
          
        }
      }
  },
  // 获取元素距离页面根元素顶部的距离
  getOffsetTop(dom) {
    let offsetTop = dom.offsetTop;
    if(dom.offsetParent) {
      return offsetTop + wegit.getOffsetTop(dom.offsetParent);
    }
    return offsetTop;
  },
  getViewportSize(){
    return {
      width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
      height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    };
  },
  //width、height调用时传入具体像素值，控制大小 ,不传则默认图像大小
  getBase64Image(img, width, height) {
    var canvas = document.createElement("canvas");
    canvas.width = width ? width : img.width;
    canvas.height = height ? height : img.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    var dataURL = canvas.toDataURL();
    return dataURL;
  },
  getCanvasBase64(img) {
    //至关重要
    return new Promise(function(resolve,reject) {
      var image = new Image();
      image.crossOrigin = '';
      image.onload = function (e) {
        resolve({
          IsError: false,
          Img: wegit.getBase64Image(image)
        });
      };
      image.onerror = function (e) {
        reject({
          IsError: true,
          Img: img
        });
      };
      image.src = img;
    });
  },
  /**
    * @method 获取地址栏请求参数
    * @param {String} name 
  */
  Request(name) {
    var reg = new RegExp("([&,?])" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.match(reg) || window.location.hash.match(reg);
    if (r != null) return decodeURIComponent(r[2]);
    return null;
  },
  ReadCookie(a) {
      for (var b = a + "=",c = document.cookie.split(";"), d = 0; d < c.length; d++) {
        for (var e = c[d];" " === e.charAt(0);) {
          e = e.substring(1, e.length);
        }
        if (0 === e.indexOf(b)) {
          return e.substring(b.length, e.length);
        }
      }
      return null
  },
  local(key, val) {
      if (typeof key !== 'string') throw new Error('key must be a string!');
      if (val === undefined) {
        try {
          return JSON.parse(localStorage.getItem(key));
        } catch (err) {
          return localStorage.getItem(key);
        }
      } else {
        val = typeof val === 'string' ? val : JSON.stringify(val);
        localStorage.setItem(key, val);
      }
  },
  session(key, val) {
    if (typeof key !== 'string') throw new Error('key must be a string!');
    if (val === undefined) {
      try {
        return JSON.parse(sessionStorage.getItem(key));
      } catch (err) {
        return sessionStorage.getItem(key);
      }
    } else {
      val = typeof val === 'string' ? val : JSON.stringify(val);
      sessionStorage.setItem(key, val);
    }
  },
};

export default wegit;