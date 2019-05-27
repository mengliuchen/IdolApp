import Vue from 'vue'
import Vuex from 'vuex'
import {play} from "../api/player";
Vue.use(Vuex)
let state={
  currentmusic:{
    "name": "La Vie en Rose",
    "songmid": "001R81sn4TrldD",
    "albumid": "http://imgcache.qq.com/music/photo/album_300/11/300_albumpic_4879711_0.jpg",
    "lyc": ""
  },
  play:false
}
let mutations={
  setcurrentmusic(state,cm){
    state.currentmusic=cm
    console.log(state.currentmusic)
  },
  setplaystate(state,p){
    state.play=p;
    console.log(state.play)
  }
}
const index=new Vuex.Store({
state,mutations
})
export default index
