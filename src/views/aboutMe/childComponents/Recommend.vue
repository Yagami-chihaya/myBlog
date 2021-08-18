<template>
  <div class="recommend">
      <div class="content">
        <p class="title">最推荐的文章</p>
        <p class="changeButton" @click="show">更改</p>
        <div class="text">
          <div class="cover">
            <img :src="textItemData.cover">
          </div>
          <div class="rightContent">
            <p class="itemTitle">{{textItemData.title}}</p>
            <p class="readBtn" @click="itemClick(textItemData.id)">阅读文章</p>
            <div class="itemInfo">
              <img src="../../../assets/img/钟.png"><span>{{textItemData.time}}</span>
            </div>
            <p class="itemContent">{{textItemData.msg}}</p>
          </div>
        </div>
      </div>
      <change-recommend :class="{show:isShow}" @showOff='showOff' @getTextItemData='getTextItemData'></change-recommend>
  </div>
</template>

<script>
import changeRecommend from './ChangeRecommend.vue'

export default {
  el: '',
  data () {
    return {
      textItemData:{
        id:"text01",
        title:"嘉然の爱犬",
        msg:"Asoul配lovelive，就像鹅肝配果酒，我一听lovelive后，灵魂就开始激荡，嘴唇止不住的颤抖，当我又听到了asoul，我的膝盖终究是软了，扑通跪了下去，我感到一股上流和高雅的情感狂暴鸿儒了我脆弱的心灵。泪，流了下来。原来过去二十年里，没有asoul和lovelive的人生是那么的悲惨。而拥有了asoul和lovelive的我，现在又是那么的幸福，玩着lovelive，看着asoul，我笑了，笑的那么温柔，笑的那么洒脱，笑的那么释然",
        cover:"https://wx2.sinaimg.cn/mw690/005QPr5Ngy1gtgc8vauf2j60xc0irjzj02.jpg",
        time:"2021/3/7 下午8:00:00"
        
      },
      isShow:false
    }
  },
  methods: {
    show(){
      this.isShow = true
    },
    showOff(val){
      this.isShow = val
    },
    getTextItemData(val){
      this.textItemData = val
      
    },
    itemClick(iid){
      this.$router.push('/text/'+iid) 
    }
  },
  components:{
    changeRecommend
  }
}
</script>

<style scoped>
  .recommend{
    width: 100%;
    height: 100%;
    position: relative;
  }
  .content{
    position: absolute;
    top: 2%;
    left: 2%;
    width: 96%;
    height: 96%;
    
  }
  .title{
    height: 9%;
    font-size: 24px;
    font-weight: bolder;
    color: #E799B0;
    border-bottom: 1px solid rgb(192, 192, 192);
  }
  .text{
    margin-top: 1%;
    margin-bottom: 1%;
    width: 100%;
    height: 40%;
    
    position: relative;
    
  }
  .cover{
    position: absolute;
    top: 5%;
    width: 34%;
    height: 90%;
    overflow: hidden;
    border-radius: 10px;
  }
  .cover img{
    width: 100%;
  }
  .rightContent{
    position: absolute;
    width: 63%;
    height: 90%;
    top: 5%;
    left: 37%;
    

  }
  .itemTitle{
    font-family: Microsoft Yahei;
    margin-bottom: 2%;
  }
  .itemInfo{
    width: 80%;
    height: 20px;
    overflow: hidden;
    
    position: relative;
    margin-bottom: 2%;
  }
  .itemInfo img{
    border-radius: 50%;
    width: 16px;
    overflow: hidden;
    vertical-align: middle;
  }
  .itemInfo span{
    display: inline-block;
    height: 100%;
    color: rgb(163, 162, 162);
    font-size: 12px;
  }
  .itemContent{
    width: 100%;
    height: 64%;
    
    overflow: hidden;
    font-family: Microsoft Yahei;
    font-size: 12px;
    color: rgb(212, 212, 212);
    line-height: 20px;
  }

  .changeButton{
    position: absolute;
    top: 0;
    right: 0;
    width: 80px;
    height: 30px;
    line-height: 30px;
    color: white;
    background: rgb(31, 255, 31);
    border-radius: 5px;
    text-align: center;
  }
  .show{
    display: block;
  }
  .readBtn{
    position: absolute;
    width: 100px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 20px;
    background: #E799B0;
    color: white;
    top: 10px;
    right: 0;
  }
  .readBtn:hover{
    background: rgb(253, 37, 138);
  }
</style>
