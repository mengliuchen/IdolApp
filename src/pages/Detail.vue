<template>
  <div>
    <detail-header :isheader="isHeader" :title="Title"></detail-header>
    <div class="content" width="150px">
      <div class="image" >
        <img :src="member.image_url" width="150px">
        <div class="basicinfo">
          <div class="basicinfo_title">
            <span>基本信息</span>
          </div>
          <table>
            <tr>
              <td>姓名</td>
              <td>{{member.name}}</td>
            </tr>
            <tr>
              <td>出生日期</td>
              <td>{{member.birthday}}</td>
            </tr>
            <tr>
              <td>血型</td>
              <td>{{member.blood}}</td>
            </tr>
            <tr>
              <td>星座</td>
              <td>{{member.constellation}}</td>
            </tr>
          </table>
        </div>
        <div class="basicinfo">
          <div class="basicinfo_title">
            <span>自我评价</span>
          </div>
          <table>
            <tr>
              <td>性格</td>
              <td>{{member.character}}</td>
            </tr>
            <tr>
              <td>兴趣</td>
              <td>{{member.interest}}</td>
            </tr>
            <tr>
              <td>优点</td>
              <td>{{member.advantage}}</td>
            </tr>
            <tr>
              <td>缺点</td>
              <td>{{member.disadvantage}}</td>
            </tr>
          </table>
        </div>
      </div>
      <div class="info">
        <div class="info-box">
        <div class="info-title">
          <span>座右铭</span>
        </div>
        <div class="info-content">
          {{member.motto}}
        </div>
      </div>
        <div class="info-box">
          <div class="info-title">
            <span>圈粉日常</span>
          </div>
          <ul>
            <li v-for="item in member.details">
              {{item}}
            </li>
          </ul>
        </div>
        <div class="info-box">
          <div class="info-title">
            <span>成员间化学反应</span>
          </div>
          <ul>
            <li v-for="description in member.impression">
              {{description}}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <music-tab :ishome="isHeader" ></music-tab>
  </div>

</template>

<script>
  import axios from 'axios'
  import DetailHeader from "./components/Header"
  import MusicTab from "./components/musictab"
    export default {
        name: "Detail",
      components:{DetailHeader,MusicTab},
      data(){
          return {
            isHeader:false,
            Title:"",
            member:{}
          }
      },
     mounted(){
        this.getDetailInfo()
      },
      methods:{
          getDetailInfo(){
            axios.get("https://easy-mock.com/mock/5ce215e3d7a2d534e30f9daa/izone_members/detail",{
              params: {
                id:this.$route.params.id
              }
            }).then(this.getDetailSucc)
          },
        getDetailSucc(res){
            console.log(this.$route.params.id)
            res=res.data;
            if(res.success&&res.data){
              let data=res.data.info;
              console.log(data)
              this.member=data
              this.Title=data.ename
              console.log(this.Title)
            }
        }
      },
    }
</script>

<style scoped>
.content{
  position:absolute;
  top:50px;
  margin-bottom:50px;
  width:100%;
  display: flex;
  font-family: chinese;
}
.image{
  display: flex;
  flex-direction: column;
  align-items: center;

}
.basicinfo{
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.basicinfo_title{
  width:120px;
  background-color: #f9eded ;
  font-size:20px;
  height:20px;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 20px;
  padding:5px;

}
.info{
    width:100%;

    display: flex;
    flex-direction: column;
  }
  table{
    margin-top: 10px;
    font-size:13px;
    font-family:chinese;
    border: #f9eded 2px solid;
    width:140px;
  }
  td{
    text-align:left;
  }
  .info-box{
    padding-top: 30px;
    padding-left:30px;
    text-align: left;
    background-color: #f9eded;
  }
  .info-title{
    display: inline;
    padding:5px;
    color:white;
    background-color:#6d6d6d;
    margin-right:20px;
    font-size:20px;
  }
  .info-content{
    margin-top: 15px;
    font-size:18px;
    font-family: lishu;
  }
  ul{
    padding-left: 0;
    padding-right:20px;
    margin-left: 20px;
    margin-top: 10px;
    font-size:18px;
    list-style-type:circle;
  }
  li{
    padding-top: 10px;
    line-height: 20px;
    font-family: lishu;
  }
</style>
