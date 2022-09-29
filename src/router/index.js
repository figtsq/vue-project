import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Forget from '@/views/Forget'
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
    component: () => import('@/views/Login.vue')
  },

  {
    path: '/forget',
    name: 'forget',
    component: Forget

  },
  // () => import(/* webpackChunkName: "about" */ '../views/About.vue')
]

const router = new VueRouter({
  routes
})

export default router
