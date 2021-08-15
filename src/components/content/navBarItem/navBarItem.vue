<template>
  <div class="navBarItem">
    <div class="item" v-for="item in navBarItem" :key="item"  @click="itemClick(item.router)">
      <img :src="item.urlImg">
      <span>{{item.title}}</span>
    </div>
    
  </div>
</template>

<script>
export default {
  el: '',
  data () {
    return {
      navBarItem:{
        home:{
          title:'首页',
          urlImg:require('../../../assets/img/哇.png'),
          router:'/home'
        },
        blog:{
          title:'我的博客',
          urlImg:require('../../../assets/img/给心心.png'),
          router:'/blog'
        },
        communication:{
          title:'技术分享',
          urlImg:require('../../../assets/img/ybb.png'),
          router:'/share'
        },
        aboutMe:{
          title:'关于我',
          urlImg:require('../../../assets/img/经典大头.png'),
          router:'/aboutMe'
        }
      },
    }
  },
  
  methods: {
    itemClick(router){
      this.$router.replace(router)
      this.$store.state.time = 0   //清空左菜单按钮点击次数，防止重复加载左菜单回退动画
    }
  },
}
</script>

<style scoped>
  .navBarItem{
    flex: 1;
    display: flex;
    height: 100%;
    
    
    position: relative;
    
    
  }
  .item{
    flex: 1;
    
    width: 120px;
    height: 100%;
    border-right: 2px solid white;
    position: relative;
  }
  .item:last(){
    border-right: none;
  }
  .item:hover{
    background-color: rgb(252, 130, 160);
  }
  .item img{
    width:40px;
    position: absolute;
    top:calc((100% - 40px)/2);
    
  }
  .item span{
    color: white;
    height: 40px;
    display: inline-block;
    top:calc((100% - 40px)/2);
    left: 45px;
    line-height: 40px;
    position: absolute;
    
    
  }
</style>
