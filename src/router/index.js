import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: ()=>import('../views/home/Home.vue')
  },
  {
    path:'/blog',
    name:'Blog',
    component:()=>import('../views/blog/Blog.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
