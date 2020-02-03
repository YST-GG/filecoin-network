
import { ApiService } from "../kit/web/ApiService";
var instance = {
  acquiretableData: function (){
    let path = "/lotus/lotus_mesage";
    let argument = {
      path: path,
      method:'GET',
      headers:{
        'Content-Type':'application/x-www-form-urlencoded;'
      },
    }
    let api = new ApiService(argument);
    return api.execute();
  },

  updateProfileAvatar:function(params){
    let path = "/api/v1/user/profile";
    let argument = {
      path: path,
      data: params,
      method: 'POST'
      //headers :headers,
    }
    let api = new ApiService(argument);
    return api.execute(false);
  }
};


export default {
  instance,

}
