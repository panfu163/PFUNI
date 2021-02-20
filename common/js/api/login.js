import {
	$ajax
} from '../libs/ajax.js';
import config from '@/config/index.js'



/* 
 *登录接口
 * @param params {*} 请求参数 
 * @return
 */
export const getLogin = (params, success, fail, method) => {
	$ajax(`/fangsl/applet/user/${config.appId}/login`,
		params,
		success,
		fail,
		"GET"
	);
};


/* 
 * 获取微信用户信息接口
 * @param params {*} 请求参数 
 * @return
 */
export const getweiXinUser = (params, success, fail, method) => {
	$ajax(`/fangsl/applet/user/${config.appId}/info`,
		params,
		success,
		fail,
		"GET"
	);
};

/**
 * 用户注册-获取微信信进行注册
 * @param params {*} 请求参数
 * @return
 */
export const getRegistry = (params, success, fail, method) => {
	$ajax(`/fangsl/applet/user/registry`,
		params,
		success,
		fail,
		"GET"
	);
};


/*
 * 微信登录路中
 * @param params {*} 请求参数 
 * @return
 */
export const loginIng = (retrunUrl) => {
	uni.login({
		provider: 'weixin',
		success: function(loginRes) {
			console.log(loginRes)
			if (loginRes.code) {
				getLogin({
					code: loginRes.code
				}, res => {
					if (res.sessionKey) {
						getweiXinUserAuthorize(res,retrunUrl)
					}
				})
			}
		}
	});
};




/*
 * 已经授权，可以直接调用 getUserInfo 获取头像昵称
 * @param params {*} 请求参数 
 * @return
 */
export const getweiXinUserAuthorize = (param,retrunUrl) => {
	uni.getUserInfo({
		lang: "zh_CN",
		success: function(res) {
			if (res.errMsg == "getUserInfo:ok") {
				param.encryptedData = res.encryptedData;
				param.iv = res.iv;
				param.rawData = res.rawData;
				param.signature = res.signature;
				getweiXinUser(param, res => {
					if (res.openId) {
						let openId = res.openId;
						let registryData = res; //获取微信用户信息
						if(param.phone){
						     registryData.phone=param.phone;	
						}
						getUserGet({ //根据openid获取用户信息
							openId: openId
						}, res => {
							setStorageUserInfo(res,retrunUrl)
						}, res => {
							console.log("进行注册中！！！！")
							if (res.code != 0) {
								//微信用户注册进行注册
								getRegistry(registryData, res => {
									setStorageUserInfo(res,retrunUrl)
								})
							}
						})
					}
				})
			}
		}
	})
};

//异步将数据存储在本地缓存
export const setStorageUserInfo = (res,retrunUrl) => {
	uni.setStorageSync('userInfo', res);
	if (uni.getStorageInfoSync('userInfo')) {
		if(retrunUrl){
			uni.reLaunch({
				url:retrunUrl
			})
		  return;
		}
		uni.reLaunch({
			url: "../index/index"
		})
	}
}


/* 
 *登录接口
 * @param params {*} 请求参数 
 * @return
 */
export const getUserGet = (params, success, fail, method) => {
	$ajax(`/fangsl/applet/user/get`,
		params,
		success,
		fail,
		"GET"
	);
};


/* 
 * 获取用户绑定手机号信息
 * @param params {*} 请求参数 
 * @return
 */
export const getweiXinPhone = (params, success, fail, method) => {
	$ajax(`/fangsl/applet/user/${config.appId}/phone`, params,
		success,
		fail,
		"GET"
	);
};


/*
 * 绑定手机号
 * @param params {*} 请求参数 
 * @return
 */
export const bindPhone = (params, success, fail) => {
	$ajax(`/fangsl/applet/user/bind/phone`,
		params, 
		success,
	    fail, 
	    "GET"
		);
};



/*
 * 查看是否授权
 * @param params {
	 * retrunUrl //指定返回的页面地址
	 * } 请求参数 
 * @return
 */
export const getSetting = (retrunUrl) => {
	//查看是否授权
	uni.getSetting({
		success(res) {
			if (res.authSetting['scope.userInfo']) {
				loginIng(retrunUrl);
			} else {
				//跳转到授权页面
				uni.navigateTo({
					url: "../authorize/authorize"
				})
			}
		}
	})
};
