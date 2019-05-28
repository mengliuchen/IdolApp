<template>
  <div class="member_content">
    <img src="../../assets/violeta.jpg" width="100%" style="vertical-align:bottom;">
    <div class="title" >
      <span>成员信息</span>
    </div>
    <ul>
      <router-link
        tag="li"
        class="member"
        v-for="item of members"
        :key="item.no"
        :style="{'background-color':item.color}"
        :to="'/detail/'+item.no"
      >
        <img :src="item.image_url" height="200px" v-if="item.no%2==0" class="img animated slideInLeft">
        <img :src="item.image_url" height="200px" v-if="item.no%2==1" class="img animated slideInRight">
        <div class="text animated rubberBand" animate-delay="1s">
          <H1>{{item.name}}</H1>
          <span>{{item.call}}</span>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios'
    export default {
        name: "content",
      data(){
        return{
          members:[]
        }
      },
        methods:{
        getMembersInfo(){
          axios.get("https://easy-mock.com/mock/5ce215e3d7a2d534e30f9daa/izone_members/members").then(this.getMembersInfoSucc)
        },
        getMembersInfoSucc(res){
          res=res.data;
          if(res.ret&&res.data){
            let data=res.data
            this.members=data.members
          }
        }
      },
      created(){
          this.getMembersInfo()

      }
    }
</script>

<style>
  .member_content{
    position: absolute;
    top:50px;
    margin-bottom:50px;
  }
.member{
  height:200px;
  width:100%;
  display: flex;
  wrap: no-wrap;
  overflow: hidden;
}

  ul{
    list-style-type:none;
    margin:0px;
    padding:0px;
  }
li{
  padding:0;
  margin:0px;
}
  .img{
    float:left
  }
  .title{
    margin-top: 0;
    width:100%;
    height:50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color:white;
    background-color:#b7b2d0;
    font-size:30px;
    font-family:chinese;
  }
  .text{
    width:100%;
    height:auto;
    padding:0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    line-height: 20px;
    font-family: chinese;
  }

</style>
