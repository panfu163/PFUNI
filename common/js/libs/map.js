/**地图处理类**/
export default {
   //腾讯地图KEY
  TMap: { 
	      key:"6PEBZ-L5ZWU-72EV3-BAYUJ-ZQQY3-HSBA3", //腾讯地图KEY
		  /*获取当前位置信息
		   @return  当前位置经纬度
		   */   
		  getLocation(){
			console.log("获取坐标位置")  
			uni.getLocation({
				type:"gcj02",
				success:(res)=>{
					console.log("定位当前位置");
					console.log(res)
					let location={
						latitude:res.latitude,
						longitude:res.longitude
					}
					//缓存坐标地址
					uni.setStorage({
						 key:"location",
						 data:location,
						 success: function () {
							 console.log('success');
						 }
					});
					this.getAddress(res.latitude,res.longitude);//获取位置
					return location; 
				}
			});	
		  },
		  /*获取信息地址
		   @return  中文街道地理位置信息
           */   		  
		  getAddress(latitude,longitude,success){
			longitude=longitude.toString();
			latitude=latitude.toString();
			uni.request({
				header:{
					"Content-Type": "application/text"
				},
				url:'https://apis.map.qq.com/ws/geocoder/v1/?location='+latitude+','+longitude+'&key='+this.key,
				success:(re)=>{
					if(re.statusCode === 200){
						//缓存坐标地址
						uni.setStorage({
							 key:"geocoder",
							 data:re.data.result,
							 success: function () {
								 console.log('success');
							 }
						});
						if (typeof success === 'function') {
						   success(re.data.result)
						}
					}else{
						uni.showToast({
						   icon:"none",
						   title:"获取信息失败，请重试!"
						})
					}
				 }
			});
		  },
		  /*获取附近地址
		   @return  array 附近位置数据 按城市-坐标位置查找-坐标可不传
		   */  
		  getSuggestion(city,keyword,latitude,longitude,success){
				uni.request({
					header:{"Content-Type": "application/text"},
					url:'https://apis.map.qq.com/ws/place/v1/suggestion/?region='+city+'&keyword='+keyword+'&location='+latitude+','+longitude+'&key='+this.key,
					success:(re)=>{
						if(re.statusCode === 200){
							success(re.data.data)
						}
					}	
				})
			},
		  //获取行政区域父级行政区划ID，缺省时则返回最顶级行政区划
		  getchildren(id){
			   let adcode=id.substr(0,4)+"00"; //注获取当前城市所区域
				uni.request({
					header:{"Content-Type": "application/text"},
					url:'https://apis.map.qq.com/ws/district/v1/getchildren?key='+this.key+'&id='+adcode,
					success:(re)=>{
						console.log("-----------")
						console.log(re.data.result[0])
						if(re.statusCode === 200){
							uni.setStorage({
								 key:"cityAdcode",
								 data:re.data.result[0],
								 success: function () {
									 console.log('success');
								 }
							});
						}
					}	
				})
			}
  },
  //高德地图
  AMap:{
	//高德地图KEY
	key:"f5813884f287c401c5350834d7665b73",
	amapFile:require('@/common/js/libs/amap-wx.js'),//高德地图
	/*获取当前位置信息
	 @return  当前位置经纬度
	 */
	getLocation(){
		let amapFile=this.amapFile;
		var myAmapFun = new amapFile.AMapWX({key:this.key});
		    myAmapFun.getPoiAround({
		      success: function(data){
		        //成功回调
				console.log(data)
		      },
		      fail: function(info){
		        //失败回调
		        console.log(info)
		      }
		    })
	}
  },
  //百度
  BMap:{
  	  
  },
};