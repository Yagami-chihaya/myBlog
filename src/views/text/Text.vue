<template>
  <div class="text">
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


    <div class="textBox">
      <back class="back"></back>
      <div class="textContent">
        <p class="title">{{textItem.title}}</p>
        
        <p class="content">{{textItem.msg}}</p>
        <span class="date">{{textItem.time}}</span>
      </div>
      
    </div>
    
      <widgets :imgURL="require('../../assets/img/给心心.png')" img_left="15%" img_top="10%" img_deg="rotate(-30deg)" img_size="150px"></widgets>
      <widgets :imgURL="require('../../assets/img/一眼真.png')" img_left="80%" img_top="30%" img_deg="rotate(50deg)" img_size="250px"></widgets>
      <widgets :imgURL="require('../../assets/img/哇.png')" img_left="9%" img_top="70%" img_deg="rotate(70deg)" img_size="180px"></widgets>
      
    
    
    
  </div>
</template>

<script>

import navBar from '../../components/common/navBar/navBar.vue'
import navBarItem from '../../components/content/navBarItem/navBarItem.vue'
import avatar from '../../components/common/avatar/Avatar.vue'
import searchBox from '../../components/common/searchBox/SearchBox.vue'
import leftmenu from '../../components/content/leftMenu/LeftMenu.vue'
import leftButtonAnime from '../../common/leftButtonAnime'
import back from '../../components/common/back/Back.vue'
import widgets from '../../components/common/widgets/Widgets.vue'

import {getTextData} from '../../network/userData'

export default {
  mixins:[leftButtonAnime],
  el: '',
  data(){
    return {
      iid:'',
      textItem:{},
      isTurn:false,
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
    back,
    widgets,
  },
  activated(){
    this.iid = this.$route.params.iid
    getTextData().then(res=>{
      for(let item of res.data){
        if(item.id==this.iid){
          this.textItem = item
        }
      }
    })
  }
}
</script>


<style type='text/css'>
  @import url('../../assets/css/publicCss.css');
</style>
<style scoped>

  .text{
    width: 100vw;
    height: 100vh;
    overflow: scroll;
    position: relative;
    background: #e799b086 url('../../assets/img/wallhaven-dgeqoj.jpg') 0 0 no-repeat;
    background-size: 100vw 100vh;
  }
  .text::-webkit-scrollbar{
    display: none;
  }
  .textBox{
    width: 45%;
    height: 95%;
    margin-left: 27.5%;
    background: url('../../assets/img/QQ截图20210815191954.png') 0 0 no-repeat;
    background-size: 100% 100%;
    position: relative;
  }
  .back{
    position: absolute;
    right: 8%;
    top: 9%;
    cursor: pointer;
  }
  .textBox>.textContent{
    position: absolute;
    width: 80%;
    height: 75%;
    top: 18%;
    left: 10%;
    
    overflow: scroll;
  }
  .textBox>div::-webkit-scrollbar{
    display: none;
  }
  .title{
    
    margin-bottom: 3%;
    font-size: 32px;
    font-weight: bolder;
    color: white;
    text-shadow: 2px 0px 1px #e799b0,-2px 0px 1px #e799b0,0px 2px 1px #e799b0,0px -2px 1px #e799b0;
  }
  .date{
    margin-top: 3%;
    display: block;
    width: 100%;
    text-align: right;
    
  }
  .content{
    font-size: 20px;
    font-weight: bold;
    line-height: 40px;
    
  }
  


  
  .giveHeart{
    
    
  }
  .real{
    position: absolute;
    right: 9%;
    top: 30%;
    width: 250px;
    border-radius: 50%;
    overflow: hidden;
    transform: rotate(50deg);
    border-bottom: 1px solid black;
    background: white;
  }
  .wow{
    position: absolute;
    left: 9%;
    bottom: 10%;
    width: 180px;
    border-radius: 50%;
    overflow: hidden;
    transform: rotate(70deg);
    border-bottom: 1px solid black;
    background: white;
  }
  
</style>
