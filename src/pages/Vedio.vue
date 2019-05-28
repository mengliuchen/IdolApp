<template>
<div>
  <vedio-header :isHeader="ishome" :title="title" >
  </vedio-header>
  <div class="contain">
    <ul class="vedio-content">

    </ul>
  </div>
</div>
</template>

<script>
  import axios from "axios"
  import VedioHeader from "./components/Header"
    export default {
        name: "Vedio",
      components:{VedioHeader},
      data(){
          return {
            ishome:false,
            title:"Vedio",
            vedios:{},
            avs:{}
          }
      },
      methods:{
        getVideoInfo(){
          axios.get("https://www.easy-mock.com/mock/5ce215e3d7a2d534e30f9daa/izone_members/vedio").then(this.getVideoAv)
        },
        getVideoAv(res){
          res=res.data;
          this.avs=res.data;
          let da={}
         for(let key in this.avs)
         {
           da[key]=[]
           for(let i=0;i<this.avs[key].length;i++)
           axios.get("https://api.kaaass.net/biliapi/video/info?id="+this.avs[key][i]).then(function(res){da[key].push(res.data)})

         }
          this.avs=da;


        }
      },
      created(){
          this.getVideoInfo();
      }

    }
</script>

<style scoped>

</style>
