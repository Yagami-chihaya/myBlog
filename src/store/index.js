import { createStore } from 'vuex'

export default createStore({
  state: {
    time:0,  //左菜单按钮点击次数
    commitIsActived:false,  //检测发表博客界面是否显示
    avatarURL:require('../assets/img/bdf80cccc5fce34b48b62d68f5d1a237445b3b01.jpg@518w.webp') ,  //头像链接
    userTextData:[]  
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
