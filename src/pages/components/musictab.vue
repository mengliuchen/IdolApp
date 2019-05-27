<template>
      <div :class="{'currentplay':!ishome,'homecurrentplay':ishome}">
        <div class="playcontent">
          <img :src="$store.state.currentmusic.albumid" width="50px">
          <span>{{$store.state.currentmusic.name}}</span>
        </div>
        <div class="playicon" >
          <font-awesome-icon :icon="['fas','step-backward']" @click="prev"></font-awesome-icon>
          <div @click="playornot">
            <font-awesome-icon :icon="['fas','play']"   v-show="!$store.state.play"></font-awesome-icon>
            <font-awesome-icon :icon="['fas','pause']"  v-show="$store.state.play"></font-awesome-icon>
          </div>
          <font-awesome-icon :icon="['fas','step-forward']" @click="next"></font-awesome-icon>
        </div>
      </div>
</template>

<script>
  import {player,musiclist,musicinfo,musicmid} from "../../api/player.js"
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
      mounted(){
          this.TabMusiclist=musiclist;
          this.tabcurrent=this.$store.state.currentmusic
          this.TabMusic=musicinfo;
          console.log(musicmid,this.$store.state.currentmusic);
          this.Tablen=musicinfo.length;
          this.TabPlay=this.$store.state.play;
      },
      methods:{
        playornot(){
          if(player.state=="ready")
          {
            this.ind=musicmid.indexOf(this.$store.state.currentmusic.songmid)
            player.play(musicmid,{index:this.ind});
          }
          else
          {
            player.toggle();
          }
          this.TabPlay=!this.$store.state.play;
          this.$store.commit("setplaystate",this.TabPlay)
        },
        prev(){
          this.ind=musicmid.indexOf(this.$store.state.currentmusic.songmid)
          this.ind=this.ind<=0?(this.Tablen-1):(this.ind-1);
          this.tabcurrent=this.TabMusic[this.ind];
          this.$store.commit("setcurrentmusic",this.tabcurrent)
          player.playPrev();
          this.TabPlay=true;
          this.$store.commit("setplaystate",this.TabPlay)
        },
        next(){
          this.ind=musicmid.indexOf(this.$store.state.currentmusic.songmid)
          this.ind=this.ind>=(this.Tablen-1)?0:(this.ind+1);
          this.tabcurrent=this.TabMusic[this.ind]
          this.$store.commit("setcurrentmusic",this.tabcurrent)
          player.playNext();
          this.TabPlay=true;
          this.$store.commit("setplaystate",this.TabPlay)

        }
      },
      setplaystate(p){
        this.$store.commit("setplaystate",p)
        console.log("调用play")
      },
      setcurretmusic(cm){
        this.$store.commit("setcurrentmusic",cm)
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
