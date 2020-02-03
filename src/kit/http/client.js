import http from './http'

export default  (url = '', params = {},   method = 'get',success, failure) => {
	
	if ('get' == method){
		 
		return http.get(url, params,success, failure);
			  
		 
	}

	if ('post' == method){
	 
		return http.post(url, params,success, failure);
	}
	return null;
}