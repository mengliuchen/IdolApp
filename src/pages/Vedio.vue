<template>
<div>
  <vedio-header :isHeader="ishome" :title="title" >

  </vedio-header>
  <div class="vedio-box">
  <p class="video">
    <iframe src="//player.bilibili.com/player.html?aid=34974790&cid=63935247&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
  </p>
  </div>

</div>
</template>

<script>
  import VedioHeader from "./components/Header"
    export default {
        name: "Vedio",
      components:{VedioHeader},
      data(){
          return {
            ishome:false,
            title:"Vedio"
          }
      }
    }
</script>

<style scoped>
.vedio-box{
  position:absolute;
  top:40px;
  width:100%;
}
.video {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
}
.video iframe,
.video object,
.video embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

</style>
