import Vue from 'vue'
import Router from 'vue-router'
import home from "../pages/home"
import Detail from "../pages/Detail"
import music from "../pages/music"
import Vedio from "../pages/Vedio"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path:"/detail/:id",
      //动态参数为id
      name:"Detail",
      component:Detail
    },
    {
      path:"/music",
      //动态参数为id
      name:"music",
      component:music
    },
    {
      path:"/vedio",
      //动态参数为id
      name:"Vedio",
      component:Vedio
    }
  ]
})
