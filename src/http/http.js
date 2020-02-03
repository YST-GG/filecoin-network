import axios from 'axios';
import _this from '../main'

var instance = axios.create({
    baseURL: 'http://192.168.1.100:10080',
   // baseURL: '/api/',
    timeout: 20000,
    headers:{'content-type':'application/json;charset=utf-8'}
});
instance.get('lotus/miner_data').then((res)=> {
     alert(res.data);
})
const install = (Vue) => {
    Vue.prototype.$getchaindata= (success) => get('/lotus/chain_data',success);     
}
export default install;