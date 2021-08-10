<template>
  <div class="leftmenu" :class="{backAnime:$store.state.time>=1&&!isBack,pullAnime:isBack||isPull}">
    <div class="real">
      <img src="../../../assets/img/一眼真.png">
      <span>一眼真~</span>
    </div>
    <div class="menuList">
      <p class="menuItem">首页</p>
      <p class="menuItem">我的博客</p>
      <p class="menuItem">技术分享</p>
      <p class="menuItem">关于我</p>
    </div>
    <div class="back" @click="isBackToggle">
      <img src="../../../assets/img/返回.png" :style="isBack?{transform: 'rotate(-180deg)'}:{}">
    </div>
  </div>
</template>

<script>
export default {
  el: '',
  data () {
    return {
      
      isBack:false
    }
  },
  props:{
    isPull:{
      default:false
    }
  },
  methods: {
    
    isBackToggle(){
      this.$store.state.time++
      console.log(this.$store.state.time);
      this.isBack = !this.isBack
      
    }
  },
  
}
</script>

<style scoped>
@keyframes backAnime{
  0%{
    transform: translate(300px);
  }
  100%{
    transform: translate(0px);
    
  }
}
@keyframes pullAnime{
  0%{
    transform: translate(0px);
  }
  100%{
    transform: translate(300px);
  }
}

  .backAnime{
    animation: backAnime 1s;
    
    animation-fill-mode:forwards;
  }
  .pullAnime{
    animation: pullAnime 1s;
    animation-fill-mode: forwards;
    
    
  }
  .leftmenu{
    position: fixed;
    top: 0;
    left: -300px;
    width: 300px;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.582);
    color: white;
    z-index: 9;
  }
  .real {
    position: relative;
    height: 200px;
   
  }
  .real span{
    display: inline-block;
    width: 100%;
    text-align: center;
    margin-top: 150px;
    font-size: 30px;
    color: rgb(255, 130, 182);
    text-shadow: rgb(255, 255, 255) 2px 0 0, rgb(255, 255, 255) 0 2px 0, rgb(255, 255, 255) -2px 0 0, rgb(255, 255, 255) 0 -2px 0;
  }
  .real img{
    position: absolute;
    left: 80px;
    top: 20px;
    width: 120px;
  }
  .menuList{

  }
  .menuItem{
    height: 60px;
    line-height: 60px;
    text-align: center;
    border-bottom: 1px solid white ;
    border-radius: 5px;
    border-image: linear-gradient(90deg, rgba(255,255,255,0.00) 0%,#ff7cc4 50%, rgba(255,255,255,0.00) 100%) 1;
  }
  .menuItem:hover{
    background-color: rgb(0, 255, 0);
  }
  .back{
    position: absolute;
    right: -16px;
    top:calc((100% - 32px)/2)
  }
  .back img{
    
    width:32px
  }
</style>
