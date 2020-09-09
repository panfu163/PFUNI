export default {
  /**
   * @description api请求基础路径
   */
  baseUrl: {
    dev:"https://admin.gzutoo.com/dev/",  //开发环境
	beta:"https://admin.gzutoo.com/", //测试环境 https://admin.gdmiao.com/ 
    pro:"https://admin.gzutoo.com/" ,//正式环境https://terlivy.imwork.net/
	url:"https://admin.gzutoo.com/uploadfile" //静态资源
  },
  /**
   * @description api请求key  
   */
  appId: "wx91a67706e2a26e51",//wxbb0b5db5a5350bfb---wx91a67706e2a26e51
  /**
   * 模块ID
   */
  moduleId: "",
  /**
   * 接口超时时间(秒)
   */
  apiTimeout: 15,
  useEslint: false
};
