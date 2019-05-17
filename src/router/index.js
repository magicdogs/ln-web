import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login/login'
import Index from '@/pages/index/index'
import Home from '@/pages/index/components/home'
import Test from '@/pages/index/components/test'
import GoJson from '@/pages/json/json'

Vue.use(Router)

const UserHome = { template: '<div>Home</div>' }

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/gojson',
      name: 'gojson',
      component: GoJson,
    },
    {
      path: '/index',
      component: Index,
      name: 'index',
      children: [
        // 当 /user/:id 匹配成功，
        // UserHome 会被渲染在 User 的 <router-view> 中
        { path: '', component: UserHome },
        { path: 'test1', component: Home },
        { path: 'test2', component: Test },
        // ...其他子路由
      ]
    },
    {
      // 会匹配所有路径
      path: '*', redirect: '/gojson'
    }
  ]
})
