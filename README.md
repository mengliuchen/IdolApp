# izone

> 利用VUE开发一个介绍偶像团体的移动端网站，加入了音乐播放器和视频的功能

# Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# 项目涉及到的技术栈
- VUE：VUE,VUE-router,VUE-cli
- 插件：axios,animate.css,fortawesome
- api:后台借口

# 项目进展
### 现在已经完成的部分
- 主页面，数据挂载在easymock上
- 单人简介页面，利用detail页面path的参数控制跳转
- 音乐播放器功能，使用qq音乐提供的接口和方法，保证音乐播放模块在各个页面都能够控制音乐
- bilibli视频嵌入
### 尚未完成的部分
- 音乐歌词页面
- qq音乐不提供会员专享音乐的播放，需要寻找其他的接口
- 视频页面尚未完成
- 首页轮播图
- 音乐播放数据存入localStorage
- 代码优化，代码尚且有数据加载的问题需要处理

# 项目具体结构
### 首页部分
- fontawesome的图标引入
- axios获取数据
- v-for列表显示成员信息
- 音乐播放组件
- 导航栏
- animated进入动画效果
### 音乐播放器
- axios获取数据
- 音乐按照专辑排列
- 音乐播放模块
- 组件间数据传递
### 成员详情
- 动态路由配置
- flex排布

# 首页

