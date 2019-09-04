import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const router = [{
    path: '/home',
    name: 'home',
    meta: {
      title: "首页"
    },
    component: () => import('@/views/home/Home.vue')
  },
  {
    path: '*',
    redirect: '/home',
    hidden: true
  }
]

export default new Router({
  linkActiveClass: 'is-active',
  routes: router
})