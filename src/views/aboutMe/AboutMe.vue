<template>
  <div class="aboutme">
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
    
    <leftmenu :isPull="isPull"></leftmenu>
    <card></card>
    <left-box></left-box>
    <right-box></right-box>


  </div>
</template>

<script>
import navBar from '../../components/common/navBar/navBar.vue'

import navBarItem from '../../components/content/navBarItem/navBarItem.vue'
import avatar from '../../components/common/avatar/Avatar.vue'
import searchBox from '../../components/common/searchBox/SearchBox.vue'
import leftmenu from '../../components/content/leftMenu/LeftMenu.vue'
import card from './childComponents/Card.vue'
import leftBox from './childComponents/leftBox.vue'
import rightBox from './childComponents/RightBox.vue'


import leftButtonAnime from '../../common/leftButtonAnime'


export default {
  mixins:[leftButtonAnime],
  el: '',
  data () {
    return {
      
    }
  },
  methods: {

  },
  components:{
    navBar,
    navBarItem,
    avatar,
    searchBox,
    leftmenu,
    card,
    leftBox,
    rightBox,
  }
}
</script>


<style type='text/css'>
  @import url('../../assets/css/publicCss.css');
</style>
<style scoped>
  .navbar{
    
    background: url('../../assets/img/wallhaven-kwvy91.png');
    background-position-y: 58%;
    background-size: 100%;
  }
  .aboutme{
    width: 100vw;
    height: 100vh;
    
    background: rgb(241, 241, 241);
    
  }
</style>
