<template>
<div class="header">
    <font-awesome-icon :icon="['fas','angle-left']" v-show="!isHeader" class="header-left" @click="goback"/>
    <span>{{title}}</span>
</div>
</template>

<script>
    export default {
        name: "header",
      props:["isHeader","title"],
      data(){
          return{
          }
      },
      methods:{
          goback(){
            this.$router.go(-1)
          }
      }
    }
</script>

<style scoped>

  .header{
    display:flex;

    background-color: #ec56a0;
    color:white;
    height:50px;
    width:100%;
    justify-content: center;
    align-items: center;
    font-family:eom;
    font-size:30px;
    z-index: 2;
    position: fixed
  }
  .header-left{
    position:absolute;
    left:10px;
    font-size:30px;
  }
  span{

    line-height: 40px;
  }

</style>
