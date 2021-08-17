<template>
  <div class="changeRecommend">
    <h2>选择你要修改的文章</h2>
    <div class="shareTextItem" v-for="item in textData" :key="item">
      <span class="title" @click="change(item)">📄 {{item.title}}</span>
      <span class="time">创建于：{{item.time}}</span>
    </div>
  </div>
</template>

<script>
import {getTextData} from '../../../network/userData'

export default {
  el: '',
  data () {
    return {
      textData:{},
      isShow:false
    }
  },
  methods: {
    change(item){
      this.$emit('getTextItemData',item)
      setTimeout(() => {
        this.$emit('showOff',this.isShow)
      }, 500);
    }
  },
  activated(){
    getTextData().then(res=>{
      this.textData = res.data
    })
  }
}
</script>

<style scoped>
  .changeRecommend{
    position: fixed;
    width: 50vw;
    height: 70vh;
    left: 25vw;
    top: 15vh;
    background: rgba(0, 0, 0, 0.425);  
    z-index: 2;
    display: none;
  }
  .shareTextItem{
    position: relative;
    width: 100%;
    height: 5%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.527);
    margin-bottom: .5%;
    margin-top: 1%;
  }
  .title{
    color: white;
    font-size: 20px;
    cursor: pointer;
  }
  .time{
    position: absolute;
    top: 30%;
    right: 2%;
    font-size: 12px;
    color: rgb(170, 170, 170);
    text-align: right;
  }
  h2{
    color: white;
  }
</style>
