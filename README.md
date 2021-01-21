# PFUIN

#### 介绍
PFUIN一款基于UNI-APP开发跨平台应用实现的精致移动端组件库，编写一套代码，可编译到iOS、Android、H5、小程序等多个平台。
官网地址：http://www.pfuni.cn 
参考地址：https://www.dcloud.io/

#### 软件架构
```bash
├── common                                      #公用文件
├── components                                  #uni-app组件目录
     └─Dialog.vue                               #可复用的Dialog组件
	 └─Toast.vue                                #可复用的Toast组件
|── font                                        #样式文件
├── pages                                       #业务页面文件存放的目录
│  ├─components                                 #组件实例 
     └─Dialog.vue                               #Dialog实例及文档
	 └─Toast.vue                                #Toast实例及文档
│  ├─index
│  │  └─index.vue                               #index页面-所有组件入口
│  └─list
│     └─list.vue                                #list页面
├─static                #存放应用引用静态资源（如图片、视频等）的地方，注意：静态资源只能存放于此
├─main.js               #Vue初始化入口文件
├─App.vue               #应用配置，用来配置App全局样式以及监听 应用生命周期
├─manifest.json         #配置应用名称、appid、logo、版本等打包信息，
├─pages.json            #配置页面路由、导航条、选项卡等页面类信息	   
├─package.json          #项目及工具的依赖配置文件
├─README.md             #说明
```


#### 使用说明

1. 在网址https://uniapp.dcloud.io查看基础文档
2. 需下载HBuilderX来打包项目
3. 注：由于此组件基于uni-app实现，所以在使用之前，请确保自己了解过!
4. 需使用命令npm install安装依赖 


#### 参与贡献

1. Fork 本仓库
2. 新建 Feat_xxx 分支
3. 提交代码
4. 新建 Pull Request

#### 成功案例

![Image text](https://gitee.com/panfu/PFUNI/raw/master/static/logo/logo.png)
![Image text](https://gitee.com/panfu/PFUNI/raw/master/static/logo/logo2.png)
![Image text](https://gitee.com/panfu/PFUNI/raw/master/static/logo/logo3.png)


#### git同时发布多个平台
```bash
[core]
	repositoryformatversion = 0
	filemode = false
	bare = false
	logallrefupdates = true
	symlinks = false
	ignorecase = true
[remote "origin"]
	url = https://github.com/panfu163/PFUNI.git
	url = https://gitee.com/panfu/PFUNI.git
	fetch = +refs/heads/*:refs/remotes/origin/*
[branch "master"]
	remote = origin
	merge = refs/heads/master
```	