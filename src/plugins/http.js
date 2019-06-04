import Vue from 'vue'
import axios from 'axios'
import apiUrl from '../httpConfig/baseUrl'

axios.defaults.timeout = 5000;   // 超时时间
axios.defaults.baseURL = apiUrl.baseUrl;  // 环境地址
Vue.prototype.uploadUrl = apiUrl.uploadUrl;//上传文件
let token = '';
axios.defaults.headers.common['token'] = token;
// 请求拦截器
axios.interceptors.request.use(config => {
  // 设置token
  if(window.sessionStorage.getItem('user')) {
    let user = JSON.parse(window.sessionStorage.getItem('user'));
    config.headers['token'] = user.token;
  }
  config.headers['Content-Type'] = 'application/json;charset=UTF-8';
  return config;
}, error => {
  return Promise.reject(error);
});

// 响应拦截器
axios.interceptors.response.use(response => {
  // 状态码200
  if (response.status === 200) {
    return response;
  } else {
    console.log('error');
  }
}, error => {
  return Promise.reject(error.response.data);
})

export default axios;