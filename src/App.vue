<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>


  </div>
</template>

<script>
  import {player,play,musiclist,musicinfo,musicmid,currentmusic,getmusicinfo} from "./api/player.js"
export default {
  name: 'App',
  created(){
    getmusicinfo()
  }
}
</script>

<style>
  @import './common/font/font.css';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
  html,body{
    margin:0;
    padding:0;

  }
</style>
