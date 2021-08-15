<template>
  <div class="home">
    <nav-bar class="navbar">

      <template v-slot:left >
        <div class="leftButton">
          <img src="../../assets/img/列表切换_卡片.png" :class="{turnAnime:isTurn}" @mouseenter="turnToggle" @click='getLeftMenu'>
        </div>
      </template>

      <template v-slot:center>
        <nav-bar-item></nav-bar-item>
      </template>

      <template v-slot:right>
        <avatar class="avatar" border_size="50" top='' img_size="80"></avatar>
        <search-box class="searchbox"></search-box>
      </template>

    </nav-bar>
    <div class="background">
      <img src="../../assets/img/89464955_p0_master1200.jpg">
    </div>
    <home-post-card class="homePostCard"></home-post-card>
    
    <leftmenu :isPull="isPull"></leftmenu>

    <clock></clock>
  </div>
</template>

<script>
import navBar from '../../components/common/navBar/navBar.vue'
import navBarItem from '../../components/content/navBarItem/navBarItem.vue'
import avatar from '../../components/common/avatar/Avatar.vue'
import searchBox from '../../components/common/searchBox/SearchBox.vue'
import leftmenu from '../../components/content/leftMenu/LeftMenu.vue'
import leftButtonAnime from '../../common/leftButtonAnime'

import homePostCard from '../home/childComponents/homePostCard.vue'

import clock from '../../components/common/clock/Clock.vue'


export default {
  mixins:[leftButtonAnime],
  el: '',
  data () {
    return {
      
      
    }
  },
  components:{
    navBar,
    navBarItem,
    avatar,
    searchBox,
    leftmenu,
    homePostCard,
    clock
  },
  methods: {
    
    
  }

  
}
</script>

<style type='text/css'>
  @import url('../../assets/css/publicCss.css');
</style>
<style scoped>



  .home{
    height: 100vh;
    width: 100vw;
    overflow: scroll;
  }
  .background{
    height: 600px;
    overflow: hidden;
    width: 100vw;
    position: absolute;
    top: 0;
    z-index: -1;
  }
  .background img{
    width: 100%;
  }
  
  .homePostCard{
    animation: Ymove 1s;
  }
</style>
