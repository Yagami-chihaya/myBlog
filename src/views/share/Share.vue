<template>
  <div class="share">
    <nav-bar class="navbar" >

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
    <share-box></share-box>
    

    <div class="background">
      <img src="../../assets/img/91512300_p0_master1200.jpg">
    </div>
  </div>
</template>

<script>
import navBar from '../../components/common/navBar/navBar.vue'
import navBarItem from '../../components/content/navBarItem/navBarItem.vue'
import avatar from '../../components/common/avatar/Avatar.vue'
import searchBox from '../../components/common/searchBox/SearchBox.vue'
import leftmenu from '../../components/content/leftMenu/LeftMenu.vue'

import shareBox from './childComponents/ShareBox.vue'


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
    shareBox,
    
  }
}
</script>


<style type='text/css'>
  @import url('../../assets/css/publicCss.css');
</style>
<style scoped>
  .background{
    height: 100%;
    overflow: hidden;
    width: 100vw;
    position: absolute;
    top: 0;
    z-index: -1;
  }
  .background img{
    width: 100%;
  }
</style>
