import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: ()=>import('@/views/Login.vue')
  },
  // () => import(/* webpackChunkName: "about" */ '../views/About.vue')
]

const router = new VueRouter({
  routes
})

export default router
