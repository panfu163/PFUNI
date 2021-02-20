/**
 * webSocket 连接处理。
 */

//创建链接
const createWebSocket=(url,method,success,fail)=>{
	var tt;	
	//创建链接
    uni.connectSocket({
	    url:url, //仅为示例，并非真实接口地址。
	    complete: (res)=> {
			console.log(res)
		}
	});
	//链接成功
	uni.onSocketOpen(function (res) {
	  console.log('WebSocket连接已打开！');
	  //心跳检测重置
	  heartbeatDetection.start(url);
	});
	
	//链接打开失败
	uni.onSocketError(function (res) {
	  console.log('WebSocket连接打开失败，请检查！');
	  var lockReconnect = false;//避免重复连接
	  reconnect(url)
	});
	
	//接收服务内容
	uni.onSocketMessage(function (res) {
	  console.log('收到服务器内容：' + res.data);
		  if(typeof success === 'function') {
			success(res.data)
		  }
		  //心跳检测重置
		  heartbeatDetection.start();
	});
	
	//监听WebSocket关闭。
	uni.onSocketClose(function (res) {
	  console.log('WebSocket 已关闭！');
	  var lockReconnect = false;//避免重复连接
	  reconnect(url)
	});
	
	//心跳检测
	var heartbeatDetection = {
		  timeout:3000, //心跳时间
		  timeoutObj:undefined,
		  serverTimeoutObj:undefined,
		  start:()=>{
		    console.log('user start');
		    this.timeoutObj && clearTimeout(this.timeoutObj);
		    this.serverTimeoutObj && clearTimeout(this.serverTimeoutObj);
		    this.timeoutObj = setTimeout(function(){
		      //这里发送一个心跳，后端收到后，返回一个心跳消息，
		      this.serverTimeoutObj = setTimeout(function() {
		         uni.closeSocket();//关掉链接
		        //createWebSocket(url); //重新创建链接
		      }, this.timeout);
		    }, this.timeout)
		  }
		}
	//心跳检测重置
	reconnect(url)=>{
		  if(lockReconnect) {
		    return;
		  };
		  lockReconnect = true;
		  //没连接上会一直重连，设置延迟避免请求过多
		  tt && clearTimeout(tt);
		  tt = setTimeout(function () {
		    createWebSocket(url); //重新创建链接
		    lockReconnect = false;
		  }, 4000);
		}
}


	
