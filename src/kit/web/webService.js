 
import http from '../http/http'

import env from 'src/config/env'

 
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

function WebService(argument){
    this._value = {};
    this._value = _merge_data_object(this._value,argument);
} 

WebService.prototype.merge = function(kvObj){ 
    this._value = _merge_data_object(this._value,kvObj);
    let result = new WebService(this._value);
    return result;
} 

WebService.prototype.get = function(key){ 
    let result = this._value[key]; 
    return result;
} 


/**
 *  pass service defintion, make http call 
 * 
 */
WebService.prototype.execute = function(){ 
    let service = this._value;

    let path = service.path;
    let url = env.apiServer.reformUrl(path, "/apis");
    let method = service.method;
    if (!method){
        method  = "GET";
    }
    let data = service.data;
    let headers = service.headers;

    if ('POST' == method){
        return http.post(url, data );
    }
    if ('GET' == method){
        return http.get(url, data,headers );
    } 
    console.log("unhandle method ?" + method);
} 

 

export default {
    WebService, 
    
} 
