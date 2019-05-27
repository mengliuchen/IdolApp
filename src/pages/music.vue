<template>
<div class="music-page">
<music-header isheader="false" title="IZ*ONE"></music-header>
  <div class="music-list">
      <div class="album-list" v-for="(item,key) of MainMusiclist" :key="key">
        <div class="title">
          {{key}}
        </div>
      <div class="music" v-for="(innerItem,index) of item" :key="index" @click="playthisone(innerItem)" :class="{'green':innerItem.songmid==Maincurrentmusic.songmid}">
        <img :src="innerItem.albumid" width="50px">
        {{innerItem.name}}
      </div>
      </div>
  </div>
  <music-tab :ishome="isHome" :ch="Maincurrentmusic"></music-tab>
</div>
</template>

<script>

  import MusicHeader from "./components/Header"
  import MusicTab from "./components/musictab"
  import {player,play,musiclist,musicinfo,musicmid,currentmusic,getmusicinfo,setplaystate,setcurretmusic} from "../api/player"
    export default {
        name: "music",
      components:{
        MusicHeader,
        MusicTab
      },
      data(){
          return{
            isHome:false,
            play:false,
            c:false,
            MainMusiclist:{},
            Maincurrentmusic: {
              "name": "La Vie en Rose",
              "songmid": "001R81sn4TrldD",
              "albumid": "http://imgcache.qq.com/music/photo/album_300/11/300_albumpic_4879711_0.jpg",
              "lyc": ""
            },
            ind:0,
          }
      },
      mounted(){
          this.MainMusiclist=musiclist;
          this.Maincurrentmusic=currentmusic;
      },
      methods:{
        playthisone(inneritem){
          this.play=true;
          setplaystate(this.play)
          this.Maincurrentmusic=inneritem;
          setcurretmusic(this.Maincurrentmusic)
          this.ind=musicmid.indexOf(inneritem.songmid)
          player.play(musicmid,{index:this.ind})
          if(player.state=="pause")
          {
            player.play(musicmid,{index:this.ind})
          }
        }
      }
    }
</script>

<style scoped>
.music-list{
  position: absolute;
  top:50px;
  width:100%;
  margin-bottom: 40px;
}
  .title{
    font-size:20px;
    line-height: 20px;
    color:#666;
    background-color: #eee;
    display: flex;
    justify-content: left;
    align-items: center;
    height:50px;
  }
  .music{
     display: flex;
    justify-content: left;
    align-items: center;
    height:70px;
    padding-left: 10px;
    border-bottom: #f9f9f9 2px solid;
    background-color: #f6f6f6;
  }
.green{
  color:#26f6a5
}

</style>
