<template>
      <div :class="{'currentplay':!ishome,'homecurrentplay':ishome}">
        <div class="playcontent">
          <img :src="tabcurrent.albumid" width="50px">
          <span>{{tabcurrent.name}}</span>
        </div>
        <div class="playicon" >
          <font-awesome-icon :icon="['fas','step-backward']" @click="prev"></font-awesome-icon>
          <div @click="playornot">
            <font-awesome-icon :icon="['fas','play']"   v-show="!TabPlay"></font-awesome-icon>
            <font-awesome-icon :icon="['fas','pause']"  v-show="TabPlay"></font-awesome-icon>
          </div>
          <font-awesome-icon :icon="['fas','step-forward']" @click="next"></font-awesome-icon>
        </div>
      </div>
</template>

<script>
  import {player,play,musiclist,musicinfo,musicmid,currentmusic,setcurretmusic,setplaystate} from "../../api/player.js"
    export default {
        name: "musictab",
        props: ["ishome","ch"],
        data(){
          return {
            tabcurrent:{},
            TabMusiclist:[],
            TabPlay:false,
            Tablen:0,
            TabMusic:[],
            ind:2
          }
      },
      watch:{
        ch:function(){
          this.TabPlay=play
          this.tabcurrent=currentmusic
          console.log("this.tabcurrent"+this.tabcurrent)
        }
      },
      mounted(){
          this.TabMusiclist=musiclist;
          this.tabcurrent=currentmusic;
          this.TabMusic=musicinfo;
          console.log(musicmid,currentmusic)
          this.Tablen=musicinfo.length;
          this.TabPlay=play;
      },
      methods:{
        playornot(){
          if(player.state=="ready")
          {console.log(musicinfo,currentmusic)
            console.log(this.ind)
            this.ind=musicmid.indexOf(currentmusic.songmid)
            player.play(musicmid,{index:this.ind});
          }
          else
          {
            player.toggle();
          }
          this.TabPlay=!this.TabPlay;
          setplaystate(this.TabPlay)
        },
        prev(){
          this.ind=this.ind<=0?(this.Tablen-1):(this.ind-1);
          this.tabcurrent=this.TabMusic[this.ind];
          setcurretmusic(this.tabcurrent)
          console.log(currentmusic)
          player.playPrev();
          this.TabPlay=true;
          setplaystate(this.TabPlay)
          console.log(this.ind)
        },
        next(){
          this.ind=this.ind>=(this.Tablen-1)?0:(this.ind+1);
          this.tabcurrent=this.TabMusic[this.ind]
          setcurretmusic(this.tabcurrent)
          console.log(currentmusic)
          player.playNext();
          this.TabPlay=true;
          setplaystate(this.TabPlay)
          console.log(this.ind);
        }
      }
    }
</script>

<style scoped>
  .currentplay{
    position: fixed;
    bottom:0px;
    height:50px;
    width:100%;
    background-color: white;
    display: flex;
    justify-content: left;
    align-items: center;
  }
  .homecurrentplay{
    position: fixed;
    bottom:50px;
    height:50px;
    width:100%;
    background-color: white;
    display: flex;
    justify-content: left;
    align-items: center;
  }
  .playcontent{
    display: flex;
    height:50px;
    align-items: center;
    width:70%
  }
  .playcontent img{
    border-radius:50px;
    position: relative;
    left: 5px;
    bottom:5px;
  }
  .playcontent span{
    position: relative;
    left: 15px;
  }

  .playicon{
    width:30%;
    display: flex;
    justify-content: space-around;
  }
</style>
