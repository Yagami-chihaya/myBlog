<template>
  <div class="ShareBox">

    <navbar class="nav">
      <template v-slot:center>
        <p class="title">🎥Share</p>
      </template>
      <template v-slot:right class="right">
        <sharetoggle @isShow="toggleClick"></sharetoggle>
      </template>
    </navbar>


    <div class="itemBox">
      <share-video-item v-for="item in videoData" :key="item" :videoData="item" v-show="isShow"></share-video-item>
      <share-text-item v-for="item in textData" :key="item" :textData="item" v-show="!isShow"></share-text-item>
    </div>
    
  </div>
</template>

<script>
import navbar from '../../../components/common/navBar/navBar.vue'
import sharetoggle from './ShareToggle.vue'
import shareVideoItem from './ShareVideoItem.vue'
import shareTextItem from './ShareTextItem.vue'

import {getTextData, getVideoData} from '../../../network/userData'

export default {
  el: '',
  data () {
    return {
      videoData:{},
      textData:{},
      isShow:true
    }
  },
  methods: {
    toggleClick(val){
      console.log(val);
      this.isShow = val
    }
  },
  components:{
    navbar,
    sharetoggle,
    shareVideoItem,
    shareTextItem,
  },
  created(){
    getVideoData().then(res=>{
      this.videoData = res.data
    }),
    getTextData().then(res=>{
      this.textData = res.data
    })
  }
}
</script>

<style scoped>
  @keyframes bigger{
    0%{
      transform: scale(0);
    }
    100%{
      transform: scale(1);
    }
  }
  .ShareBox{
    position: absolute;
    left: 5%;
    top: 8%;
    border-radius: 20px;
    background: rgba(0, 0, 0, 0.719);
    width: 90%;
    height: 90%;
    overflow: hidden;
    animation: bigger 1s;
  }
  .nav{
    width: 100% !important;
    height: 5%;
  }
  .right{
    position: relative;
  }
  .title{
    font-size: 26px;
  }
  .itemBox{
    width: 95%;
    height: 87%;
    margin-left: 2.5%;
    margin-top: 3%;
    overflow: scroll;
  }
  .itemBox::-webkit-scrollbar{
    display: none;
  }
</style>
