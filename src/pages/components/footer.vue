<template>
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
</template>
<script>
    export default {
        name: "footer"
    }
</script>

<style scoped>
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
</style>
