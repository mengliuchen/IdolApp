<template>
<div>
  <vedio-header :isHeader="ishome" :title="title" >
  </vedio-header>
  <div class="contain">
    <div class="video-list" v-for="(item,key) of vedios" :key="key">
      <div class="video-title">
        <b>{{key}}</b>
      </div>
      <div class="video-contain">
        <div class="video" v-for="(innerItem,index) of item"  :key="index" @click="jumpto(key,index)">
          <div class="video-img">
            <img :src="innerItem.data.pic" width="100%;" >
          </div>
          <div class="video-text">
            <div class="text-title">
              {{innerItem.data.title}}
            </div>
            <div class="text-user">
              <span><font-awesome-icon :icon="['fas','user']" style="padding-right:3px;padding-left:3px;"/>
              {{innerItem.data.author}}</span>
              <span>
                <font-awesome-icon :icon="['fas','play']" style="padding-right:3px;padding-left:3px;"/>
              {{innerItem.data.play}}
                <font-awesome-icon :icon="['fas','comment-dots']" style="padding-right:3px;padding-left:3px;"/>
              {{innerItem.data.review}}
              </span>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</div>
</template>

<script>
  import axios from "axios"
  import VedioHeader from "./components/Header"
  import VedioTab from "./components/musictab"
  import {player,musiclist,musicinfo,musicmid,getmusicinfo} from "../api/player"
    export default {
        name: "Vedio",
      components:{VedioHeader,VedioTab},
      data(){
          return {
            ishome:false,
            title:"Vedio",
            vedios:{},
            avs:{}
          }
      },
      methods:{
        getVideoInfo(){
          axios.get("https://www.easy-mock.com/mock/5ce215e3d7a2d534e30f9daa/izone_members/vedio").then(this.getVideoAv)
        },
        getVideoAv(res){
          res=res.data;
          this.avs=res.data;
          let da={}
         for(let key in this.avs)
         {
           da[key]=[]
           for(let i=0;i<this.avs[key].length;i++)
           axios.get("https://api.kaaass.net/biliapi/video/info?id="+this.avs[key][i]).then(function(res){da[key].push(res.data)})

         }
          this.vedios=da;
        },
        jumpto(k,i){
          window.location.href = 'https://www.bilibili.com/video/av'+this.avs[k][i];
        }
      },
      created(){
          this.getVideoInfo();
      }
    }
</script>

<style scoped>
.contain{
  position:relative;
  top:50px;
  display: flex;
  flex-direction: column;
}
  .video-list{
    width:100%;

  }
.video-title{
  margin-top: 10px;
  text-align:left;
  border-bottom:1px solid lightgrey;
}
.video {
  width: 100%;
  border-bottom: 1px solid #e5e9ef;

  position: relative;
  display: flex;
  align-items: center;
  padding:5px;
}
.video-img{
  width:40%;
}
.video-text{
  font-family: Arial;
  width:58%;
  height:100%;
  margin-left: 5px;

}
.video-contain{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
  .text-title{
    font-size:10px;
    text-align: left;
    position: relative;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-all;
  }
  .text-user{
    font-size:10px;
    position: absolute;
    bottom:0;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    text-align: left;
    color:grey;
  }
  .text-user span{
   margin-top: 5px;


  }
</style>
