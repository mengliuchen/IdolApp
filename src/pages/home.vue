<template>
  <div>
    <home-header :isHeader="isheader" :title="Title"></home-header>
    <home-content></home-content>
    <music-tab :ishome="isheader" ></music-tab>
    <home-footer></home-footer>
  </div>
</template>

<script>
  import HomeHeader from "./components/Header"
  import HomeContent from "./components/content"
  import HomeFooter from "./components/footer"
  import MusicTab from "./components/musictab"
  import {player,currentmusic,musicmid,musicinfo} from "../api/player"
    export default {
        name: "home",
      components:{MusicTab, HomeHeader,HomeContent,HomeFooter},
      data()
        {
          return{
            Title:"Eyes on me",
            isheader:true,
          }
        },
      mounted(){

      }
    }
</script>

<style>

</style>
