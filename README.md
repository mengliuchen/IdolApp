# izone

> 利用VUE开发一个介绍偶像团体的移动端网站，加入了音乐播放器和视频的功能。在开发这个小程序的过程中，VUE的大部分内容以及HTML,CSS中的内容都可以被使用到，可以锻炼自己的编程能力。

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
- VUE：VUE,VUE-router,VUE-cli，VUEX
- 插件：axios,animate.css,fortawesome
- api:后台借口

# 项目进展
### 现在已经完成的部分
- 主页面，数据挂载在easymock上
- 单人简介页面，利用detail页面path的参数控制跳转
- 音乐播放器功能，使用qq音乐提供的接口和方法，保证音乐播放模块在各个页面都能够控制音乐
- bilibli视频嵌入
- 用VUEX传递各个页面中的音乐播放组件
### 尚未完成的部分
- 音乐歌词页面
- qq音乐不提供会员专享音乐的播放，需要寻找其他的接口
- 视频页面尚未完成
- 首页轮播图
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
![image](https://github.com/mengliuchen/IdolApp/blob/master/images/home.png)
### keep-alive
由于需要加载数据，所以为了不重复调用数据，渲染DOM，利用keep-alive组件缓存不活动的组件组件,因为detail页是动态路由，选择不同成员页面内容不同所以需要exclude="Detail"
```<keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
```
### 头组件
头组件为共用组件，利用ishome属性控制是否有返回键，利用title属性控制头组件上显示的文字

返回键通过
```
goback(){
            this.$router.go(-1)
          }
```
控制返回上一页面
### content组件
为home页面专有组件
- 利用v-for列出成员图片及姓名信息
- 利用router-link跳转，并将成员编号作为参数赋予动态路由
- 利用animated.css赋给图片和文字进入动画
```
<ul>
      <router-link
        tag="li"
        class="member"
        v-for="item of members"
        :key="item.no"
        :style="{'background-color':item.color}"
        :to="'/detail/'+item.no"
      >
        <img :src="item.image_url" height="200px" v-if="item.no%2==0" class="img animated slideInLeft">
        <img :src="item.image_url" height="200px" v-if="item.no%2==1" class="img animated slideInRight">
        <div class="text animated rubberBand" animate-delay="1s">
          <H1>{{item.name}}</H1>
          <span>{{item.call}}</span>
        </div>
      </router-link>
    </ul>
```
### 音乐播放组件
与其他页面共用，并且始终保持在页面下方，需要保证播放状态以及正在播放的歌曲各个页面相同
### 底部导航
- 利用横向列表排布导航
- 利用fontawsome显示图标
- 利用flex布局均匀分布导航项
```
    <div class="foottab">
    <ul>
      <router-link
      tag="li"
      to="/home">
        <font-awesome-icon :icon="['fas','home']"/>
        <span>首页</span></router-link>
      <router-link
        tag="li"
        to="/music">
        <font-awesome-icon :icon="['fas','music']"/>
        <span>音乐</span>
      </router-link>
      <router-link
        tag="li"
        to="/vedio">
        <font-awesome-icon :icon="['fas','video']"/>
        <span>视频</span>
      </router-link>
    </ul>
    </div>
```
CSS中,flex布局的内部元素，利用justify-content:space-around控制元素均匀排布
```
.foottab{
  position: fixed;
  bottom:0px;
  z-index:2;
  height:50px;
  width:100%;
  background-color: white;
  display: flex;
 align-items: center;
  margin:0px;
}
  ul{
    list-style-type: none;
    width:100%;
    height:100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #ec56a0;
    color:white;
    font-family:chinese;
  }
  li{
    float:left;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size:25px;
}
  span{
    font-size:15px;
  }
```
# 音乐界面
![image]https://github.com/mengliuchen/IdolApp/blob/master/images/music.png
## 音乐播放
### 接口与方法
使用qq音乐提供的接口以及方法

介绍文档在https://xingqiao.gitbooks.io/qmplayer/content/

首先在index.html中引用player.js
```
<script src="//y.gtimg.cn/music/h5/player/player.js?max_age=2592000"></script>
```
在API文件夹中创建player.js在，其中初始化一个循环播放的QMplayer对象并且export出供整个程序所有组件使用，利用mid确定播放的音乐
```
var player=new QMplayer({loop:true})
```
在播放过程中用到的方法包括
```
player.play(midlist,{index:1})
//从列表中的第一个开始播放
player.pause();
//暂停播放
player.toggle();
//切换播放状态
player.playPrev();
//播放上一首
player.playNext();
//播放下一首
```
### 音乐数据
1. 是否播放 play
2. 音乐信息列表，musiclist，类型为对象，其中包括key为专辑名，内容为歌曲信息组成的数组
3. 正在播放的音乐 currentmusic，类型为对象
4. musicmid，类型为数组，包含所有的音乐的mid
5. musicinfo，合并所有专辑中的所有音乐，类型为数组

其中play和currentmusic存储在store中，利用VUEX实现所有组件中的通信

音乐的数据挂载在Easymock上，在创建APP组件时，调用数据

## VUEX数据共享
需要实现的是底部音乐播放组件的数据时在所有页面中共享的，这样播放按钮，以及正在播放的音乐不会出现不一致的问题
###
## 音乐列表

```
  <div class="music-list">
      <div class="album-list" v-for="(item,key) of MainMusiclist" :key="key">
        <div class="title">
          {{key}}
        </div>
      <div class="music" v-for="(innerItem,index) of item" :key="index" @click="playthisone(innerItem)" :class="{'green':innerItem.songmid==$store.state.currentmusic.songmid}">
        <img :src="innerItem.albumid" width="50px">
        {{innerItem.name}}
      </div>
      </div>
  </div>
```
利用v-for列出所有的音乐，将musiclist中的key取出作为专辑列表标题，当音乐为currentmusic时，字体显示为绿色

####playthisone，播放用户点击的音乐



