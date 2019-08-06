import Vue from 'vue'
import Router from 'vue-router'
import Start from '@/components/start'
import Home from '@/components/home'
import Score from '@/components/score'
import Main from '@/components/main'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'start',
      component: Start,
      // children:[{
      //   path: 'home',
      //   name: 'home',
      //   component: Home,
      // },
      // ]
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/main',
      name: 'main',
      component: Main,
    },
    {
      path: '/score',
      name: 'score',
      component: Score,
    }
  ]
})
