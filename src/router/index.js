import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  {
    path:'/',
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
  },
  {
    path:'/share',
    name:'share',
    component:()=>import('../views/share/Share.vue')
  },
  {
    path:'/aboutMe',
    name:'aboutMe',
    component:()=>import('../views/aboutMe/AboutMe.vue')
  },
  {
    path:'/text/:iid',
    name:'text',
    component:()=>import('../views/text/Text.vue')
  },
  
]

const router = createRouter({
  
  history: createWebHashHistory(),
  
  routes
})

export default router
