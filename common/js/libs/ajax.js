//共用JS方法
import md5 from './md5.js';
import config from '@/config/index.js';
import {getSetting} from "@/common/js/api/login.js"

let baseUrl = '';
//环境地址
if (process.env.NODE_ENV === 'development') {
  baseUrl = config.baseUrl.beta;
} else {
  baseUrl = config.baseUrl.pro;
}

let stopTheRequest = false; //阻止请求开关

// Sign计算签名
export const sinngTxt = (parms) => {
  //以下参数是必传参数
  //accessToken为登录成功后需要传的参数
  parms['appId'] = config.appId;
  parms['apiVersion'] = '1.0';
  parms['activityId'] = parms.activityId ? parms.activityId : config.activityId; //活动ID
  parms['timestamp'] = Date.parse(new Date());
  parms['shareCode'] = uni.getStorageSync('shareCode'); //从本地缓存中同步获取指定 key 对应的内容
  if (parms) {
    let arr = [];
    for (let key in parms) {
      if (parms[key] === undefined) continue;
      arr.push(key);
    }
    arr.sort();
    let str = '';
    let str2 = '';
    for (let i in arr) {
      if (parms[arr[i]] != null) {
        if (typeof parms[arr[i]] == 'object') {
          let r = JSON.stringify(parms[arr[i]]).split('').sort().join('');
          str += arr[i] + r;
          str2 += arr[i] + '=' + r + '&';
        } else {
          if (parms[arr[i]].toString() != '') {
            str += arr[i] + parms[arr[i]];
            str2 += arr[i] + '=' + parms[arr[i]] + '&';
          }
        }
      }
    }
    let resultMd5 = md5(str + config.appSecret);
    return resultMd5;
  } else {
    return '';
  }
};

//封装基本ajax请求
//支持POST、GET
export const $ajax = (url, data, success, fail, method) => {
  if(stopTheRequest) return;	
  uni.showLoading({
    title: '拼命加载中~~',
  });
  data.sign = sinngTxt(data);
  const requestTask = uni.request({
    url: baseUrl + url, //接口地址。
    data: data,
    method: method ? method : config.method,
    timeout: config.timeout,
    header: {
      'X-Token': uni.getStorageSync('shareCode'),
      'content-type': 'application/json', // 默认值
    },
    success: function (res) {
      //接口成功
      uni.hideLoading();	  
      if (res.data.code == 111) {
		getSetting()
      } else if (res.data.code == 112) {
		 getSetting()
      }else{
		  if (typeof success === 'function') {
				if(res.data.code==0){
				 return	success(res.data.data);					 
				}else{
					uni.showToast({
						icon:"none",
						title:res.data.msg
					}) 
				}
		  }
		  if (typeof fail === 'function') {
			  return fail(res.data);
		  }
	  } 
    },
    fail: function (error) {
      //接口失败
      uni.hideLoading();
      if (error) {
        uni.showToast({
          icon: 'none',
          title: 'fail:接口调用失败~~'+error.data,
          duration: 3000,
        });
        if (typeof fail === 'function') {
          return fail(error);
        }
      }
    },
    complete: function (error) {
		stopTheRequest=false;
	},
  });
  //多少秒后中断请求
  setTimeout(() => {
    //中断请求任务
    requestTask.abort();
  }, config.timeout);
};

//封装的上传
export const $uploadFile = (url, data, success, fail, fileType) => {
  /*** 如页面通过 uni.chooseImage等接口获取到一个本地资源的临时文件路径后，可通过此接口将本地资源上传到指定服务器。
   **/
  if (stopTheRequest) return;
  uni.chooseImage({
    success: (chooseImageRes) => {
      const tempFilePaths = chooseImageRes.tempFilePaths;
      const uploadTask = uni.uploadFile({
        url: baseUrl + url, //仅为示例，并非真实接口地址。
        filePath: tempFilePaths[0],
        name: 'file',
        formData: data ? data : {},
        success: (uploadFileRes) => {
          console.log(uploadFileRes.data);
          if (typeof success === 'function') {
            success(uploadFileRes);
          }
        },
        fail: function (error) {
          console.log(error);
          if (typeof fail === 'function') {
            success(fail);
          }
        },
        complete: function (error) {
          stopTheRequest = false;
        },
      });
      uploadTask.onProgressUpdate((res) => {
        console.log('上传进度' + res.progress);
        console.log('已经上传的数据长度' + res.totalBytesSent);
        console.log('预期需要上传的数据总长度' + res.totalBytesExpectedToSend);
        // 测试条件，取消上传任务。
        if (res.progress > 50) {
          uploadTask.abort();
        }
      });
    },
  });
};

//封装的下载
export const $downloadFile = (url, success, fail) => {
  if (stopTheRequest) return;
  const downloadTask = uni.downloadFile({
    url: baseUrl + url, //接口地址。
    success: (res) => {
      if (res.statusCode === 200) {
        uni.showToast({
          title: '下载成功~~~',
        });
        success(res);
      }
    },
    fail: (error) => {
      if (typeof fail === 'function') {
        fail(error);
      }
    },
    complete: function (error) {
      stopTheRequest = false;
    },
  });

  downloadTask.onProgressUpdate((res) => {
    console.log('下载进度' + res.progress);
    console.log('已经下载的数据长度' + res.totalBytesWritten);
    console.log('预期需要下载的数据总长度' + res.totalBytesExpectedToWrite);
    // 测试条件，取消下载任务。
    if (res.progress > 50) {
      downloadTask.abort();
    }
  });
};
