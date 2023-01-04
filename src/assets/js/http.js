import axios from 'axios';
import qs from 'qs';
import wegit from './wegit.js';

let CLIENTUUID = '';
if(wegit.ReadCookie('CLIENTUUID') || wegit.local('CLIENTUUID')) {
  CLIENTUUID = wegit.ReadCookie('CLIENTUUID') || wegit.local('CLIENTUUID');
}



// Set config defaults when creating the instance
let axiosConfig = {
    baseUrl: 'http://192.168.1.101:3000',
    timeout: 10000,
    // headers: {
    //   'Content-Type': 'application/x-www-form-urlencoded'
    // }
};
const instance = axios.create(axiosConfig);
  
// Alter defaults after instance has been created
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    if(config.baseURL === '/') {
      config.headers['ClientUuid'] = CLIENTUUID;
    }
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    if(response.data.IsError) {
      return Promise.reject({
        Msg: response.data.Msg,
        State: response.data.State,
        Action: response.config.url
      });
    } else {
      return response.data;
    }
  }, function (error) {
    // 对响应错误做点什么
    console.log('interceptors.response',error);
    return Promise.reject(error);
  });


function $get(url,requestData) {
    return instance.get(url,requestData);
}
function $post(url,requestData) {
    let data = null;
    if(requestData) {
      data = qs.stringify(requestData);
    }
    // console.log(url,data);
    if(data) {
      return instance.post(url,data);
    } else {
      return instance.post(url);
    }
    
}

export default {
    $get,
    $post
}
