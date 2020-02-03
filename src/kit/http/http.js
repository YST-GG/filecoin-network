'use strict'

import axios from 'axios'
import qs from 'qs'

 
const _log = (message,object) =>{
  console.log("HTTP=>",message,object); 
}

axios.defaults.crossDomain = true;
axios.defaults.withCredentials=false;

//axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(config => {
  // loading
  return config
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(function (response){
  // 处理响应数据
 if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {            
       /*//登陆失效处理
      if(response.data.code == '99') {
       
        router.push({
            path: '/login',
            query: {redirect: router.history.current.fullPath}
        })
        //显示错误信息
        return Promise.reject(response)
        
      }
      */
      
     return Promise.resolve(response);        
 } else {            
     return Promise.reject(response);        
 }
}, function (error){
 // 处理响应失败
 return Promise.reject(error);
});
 

export default {
  
  post (url, params, headers, success, failure) {
    return this._do_curl('post',url, params, headers, success, failure);
  },
  
  
  put (url, params, headers, success, failure) {
    return this._do_curl('put',url, params, headers, success, failure);
  },
  
  delete (url, params, headers, success, failure) {
    return this._do_curl('delete',url, params, headers, success, failure);
  },
  

  get (url, params, headers, success, failure) {
    return this._do_curl('get',url, params, headers, success, failure);
  },

  _do_curl(method, url, params, headers, success, failure){

    let options = {}
    if(method != 'get'){
     options=  {
        method: method,
        url,
        data:params,
        timeout: 5000,
        headers:headers,
        withCredentials: false,
      }
    }else{
      options= {
        method: method,
        url,
        params,
        timeout: 5000,
        headers:headers,
        withCredentials: false,
      }
    }

    return new Promise((resolve, reject) => {
      axios(options).then(
        (response) => {
          _log("http."+method+" =>" + url +",response:",response);
          resolve(response.data);
      }).catch(e => {
          _log("http."+method+"=>" + url + ",error:", e);
          reject({
            code: 999 ,
            message: '网络异常',
            error: e && e.data ? e.data : null,
          })
        }
      )
    });
  }
}