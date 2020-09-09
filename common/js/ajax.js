import config from "./config.js";
let BASE_URL="";
//开发环境
if(process.env.NODE_ENV === 'development'){  
	 BASE_URL=config.baseUrl.beta;
}else{//生产环境  
	BASE_URL=config.baseUrl.pro;
}
/**
 * options={
	  url:"",
	  method:"",
	  data:"",
	  dataType:""
 }
 */
export const Ajax=(options)=>{ //传入的options是一个json对象
	return new Promise((resolve,reject)=>{
		uni.request({
			url:BASE_URL+options.url,
			method:options.methods || "post",
			data:options.data || {},
			dataType:options.dataType || "json",
			success: (res) => {
				if(res.data.status !== 0){
					return uni.showToast({
						title:"获取数据失败"
					})
				}
				resolve(res)
			},
			fail: (err) => {
				uni.showToast({
					title:"接口请求失败"
				})
				reject(err)
			}
		})
	})
}
