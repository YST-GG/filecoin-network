'use strict'

import axios from 'axios'
import qs from 'qs'

 
const _log = (message,object) =>{
  console.log("HTTP=>",message,object); 
}

axios.defaults.crossDomain = true;
axios.defaults.withCredentials=true;

axios.interceptors.request.use(config => {
  // loading
  return config
}, error => {
  return Promise.reject(error)
})



function checkStatus (response) {
  _log("checkStatus?:", response)
  // loading
  // 如果http状态码正常，则直接返回数据
  if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
    return response.data
    _log("checkStatus   true !!!!:", response)
    return true;
    // 如果不需要除了data之外的数据，可以直接 return response.data
  }
  // 异常状态下，把错误信息返回去
  _log("checkStatus   false:", response)
  return false;
  /*
  return {
    status: response.status ,//-404,
    msg:   '网络异常',
    response:response,
  }
  */
}
 

export default {
  
  post (url, data, headers, success, failure) {
    
    return axios({
      method: 'post',
      url,
      data,
      timeout: 10000,
      // headers: {
      //   'X-Requested-With': 'XMLHttpRequest',
      //   'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      // },
      headers:headers,
      // headers:{
      //   'Content-Type':'application/json; charset=utf-8'
      // },
      withCredentials: true

    }).then(
      (response) => {
        _log("http.POST =>" + url +",response:",response);
        //@step 
        let result = checkStatus(response)
        console.log(result);
        if(result == true){
          if (success){
            return success(result);
          }
          return result;
        }else{
          if (failure){
            return failure({
              code: 999 ,//-404,
              message: '网络异常',
              response:response,
            });
          }
        }

        return result;

        /*
        if (response.data && (!response.data.success)) {
          if (success){
            return success(result);
          }
          return result;
        }else{
          if (failure){
            return failure(result);
          }
        }
        return result;
        */
      }
    )
      .catch(e => {
        _log("http.POST=>" + url + ",error:", e);

        if (failure) {
          return failure(e);
        }
        return e;
      }
      )
     
  },
  
  

  async get (url, params, headers, success, failure) {
   
    return axios({
      method: 'get',
      url,
      params, // get 请求时带的参数
      //params :  params,
      //body: JSON.stringify(params),
     
      timeout: 10000,
      // headers: {
      //   'X-Requested-With': 'XMLHttpRequest'
      // },
      headers:headers,
      withCredentials: true,
    }).then(
      (response) => {
        _log("http.GET =>" + url +",response:",response);
        let result = checkStatus(response)
        if (success){
          return success(result);
        }
        if(result == true){
          if (success){
            return success(result);
          }
          
          return result;
        }else{
          return Promise.reject(response);
        }
      }

    ).catch(e => {
     // _log("http.GET=>" + url + ",error:", e);

      if (failure) {
       return failure(e);
      }
      return e;
    }
    )
  }
}
