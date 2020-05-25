import Vue from 'vue'
import VueRouter from 'vue-router'
import VideoPlayer from '../views/VideoPlayer.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/video/6'
  },
  {
    path: '/video/:id',
    name: 'VideoPlayer',
    component: VideoPlayer
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
