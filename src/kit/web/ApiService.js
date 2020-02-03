import http from '../http/http'
import Vue from 'vue'
import env from 'src/config/env'

import {Tracer} from 'src/components/common/tracer'
import { Listener } from './listener';

/**
     * Overwrites obj1's values with obj2's and adds obj2's    if non existent in obj1
     * @param obj1
     * @param obj2
     * @returns obj3 a new object based on obj1 and obj2
     */
    function _merge_data_object(obj1, obj2) {
      var obj3 = {};
      for (var attrname in obj1) { obj3[attrname] = obj1[attrname]; }
      for (var attrname in obj2) { obj3[attrname] = obj2[attrname]; }
      return obj3;
  }

export class ApiService{

  constructor(argument){
    this._value = {};
    this._value = _merge_data_object(this._value,argument);

    this._listener = null;
  }

  merge (kvObj){
    this._value = _merge_data_object(this._value,kvObj);

  }

  get (key){
    let result = this._value[key];
    return result;
  }
  set (key,value){
     this._value[key] = value;
  }

  /**
   * prepare the request, pack the session data if needs
   * if return false then not need executed it
   *
   * @returns {boolean}
   */
  prepare(){
   
      //let user =  env.appSession.getUser();
      /*
      let token = window.localStorage.getItem("token");
      let session = {
        sid : token,
      }
      */
      let data = this.get("data");
      if (!data){
        data = {};
      }
      //data = _merge_data_object(data,session);
      this.set("data",data);
      return true;
  }
  _safePrepare(){
    try {
      return this.prepare();
    }catch (e) {
      console.error("error while prepare service",e)
    }
    return false;
  }
  /**
   * 
   * @param class Listener value 
   */
  setListener( value){
    this._listener = value;
    return this;
  }
  setOnResponse(hookOnResponse){
    if (null== this._listener){
      this._listener = new Listener();
    }
    this._listener.setOnResponse(hookOnResponse);
    return this;
  }

  setOnError(hookOnError){
    if (null== this._listener){
      this._listener = new Listener();
    }
    this._listener.setOnError(hookOnError);
    return this;
  }

  execute (skipSession){

    if (skipSession){

    }else{
      if (!this._safePrepare()){
        let result = new Promise(function(resolve, reject) {
         // reject("Failed to prepare ApiService!");
          resolve("resolve Failed to prepare ApiService!");
        });

        return  result;
      }
    }

    return this._emite(this._value);
  }

  _emite(serviceDef){

    let service = serviceDef;

    let path = service.path;
    let url = env.apiServer.reformUrl(path, "/apis");

    let method = service.method;
    if (!method){
      method  = "GET";
    }
    let data = service.data;
    let headers = service.headers;

    if(!headers && method != "GET"){
      let json_type ={
        'Content-Type': 'application/json;charset=UTF-8'
      }
      headers = _merge_data_object(headers,json_type);
    }else{
      headers = {
        'Content-Type': 'application/json;charset=UTF-8'
      }
    }

    let token = window.localStorage.getItem("token");
    let session = {
      access_token : token,
    }

    headers = _merge_data_object(headers,session);

    console.log("headers ?" , headers);
    console.log("data ?" , data);
    if ('POST' == method){
     
      return http.post(url, data,headers,this._getSuccess(),this._getFailure() );
    }
    if ('GET' == method){
      return http.get(url, data,headers,this._getSuccess(),this._getFailure() );
    }
    if ('PUT' == method){
      return http.put(url, data,headers,this._getSuccess(),this._getFailure() );
    }
    if ('DELETE' == method){
      return http.delete(url, data,headers,this._getSuccess(),this._getFailure() );
    }
    console.log("unhandle method ?" + method);
  }

  _getSuccess(){
    let listener = this._listener;
    let result =function (response) {
      //Tracer.log("ApiService=>success",response);
      if ( listener && listener.onResponse){
        return listener.onResponse(response);
      }
      return response;
    };
    return result;
  }

  _getFailure(){
    let listener = this._listener;
    let result =function (error) {
      //Tracer.log("ApiService=>failure",error);
      if (listener && listener.onError){
        return listener.onError(error);
      }
      return {
        error:true,
        response:error
      };
    };
    return result;
  }



}
