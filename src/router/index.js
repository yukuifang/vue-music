import Vue from 'vue'
import Router from 'vue-router'
import Recommend from 'components/recommend/recommend'
import Rank from 'components/rank/rank'
import Singer from  'components/singer/singer'
import Search from  'components/search/search'

// 注册路由
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/recommend',
      component: Recommend
    },
    {
      path: '/rank',
      component: Rank
    },
    {
      path: '/singer',
      component: Singer
    },
    {
      path: '/search',
      component: Search
    }
  ]
})