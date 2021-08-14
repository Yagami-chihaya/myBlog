<template>
  <div class="BlogBox">
    <div class="BlogItem" v-for="(item,index) in $store.state.userTextData" :key="index" :class="{deleteItem:isDel}">
      <p class="title">##{{item.title}}</p>
      <exit class="exit" @click="delItem(index)"></exit>
      <div class="content">
        <div class="cover">
          <img :src="item.cover">
        </div>
        
        <!--Asoul配lovelive，就像鹅肝配果酒，我一听lovelive后，灵魂就开始激荡，嘴唇止不住的颤抖，当我又听到了asoul，
        我的膝盖终究是软了，扑通跪了下去，我感到一股上流和高雅的情感狂暴鸿儒了我脆弱的心灵。泪，流了下来。
        原来过去二十年里，没有asoul和lovelive的人生是那么的悲惨。而拥有了asoul和lovelive的我，现在又是那么的幸福，玩着lovelive，
        看着asoul，我笑了，笑的那么温柔，笑的那么洒脱，笑的那么释然。-->
        <p class="text">{{item.msg}}​</p>
        <p class="date">编辑于:{{item.time}}</p>
        <p class="readBtn">阅读文章</p>
      </div>
      
    </div>
  </div>
</template>

<script>
import exit from '../../../components/common/exit/Exit.vue'
import {getTextData} from '../../../network/userData'
export default {
  el: '',
  data () {
    return {
      userTextData:{
        
      },
      isDel:false,
    }
  },
  methods: {
    delItem(index){
      this.isDel = true
      
      setTimeout(() => {
        this.$store.state.userTextData.splice(index,1)
        this.isDel = false
      }, 300);

      
      
      
    }
    
  },
  created(){
    getTextData().then(res=>{
      
      for(let item of res.data){
        this.$store.state.userTextData.push(item)
      }
      
      console.log(this.$store.state.userTextData);
    }); 
  },
  components:{
    exit
  }
}
</script>

<style scoped>
  @keyframes moveUp{
    0%{
      transform: translateY(1000px);
    }
    100%{
      transform: translateY(0);
    }
  }
  @keyframes moveLeft{
    0%{
      transform: translateX(1000px);
    }
    100%{
      transform: translateX(0);
    }
  }
  @keyframes moveRight{
    0%{
      transform: translateX(0px);
    }
    100%{
      transform: translateX(1000px);
    }
  }
  .BlogBox{
    position: fixed;
    bottom: 5%;
    left: 10%;
    width: 60%;
    height: 80%;
    border-radius: 30px;
    background: rgba(0, 0, 0, 0.5);
    overflow: scroll;
    scrollbar-width: 0;    
    animation: moveUp 1s;
    
    
  }
  .BlogBox::-webkit-scrollbar{
    display: none;
  }
  .BlogItem{
    margin-top: 20px;
    margin-left: 5%;
    border-radius: 20px;
    width: 90%;
    height: 200px;
    background: rgba(0, 0, 0, 0.411);
    position: relative;
    animation: moveLeft 1s;
  }
  .deleteItem{
    animation: moveRight .6s;
  }
  .BlogItem:hover{
    background: rgba(73, 73, 73, 0.801);
  }
  .title{
    color: rgb(255, 255, 255);
    height: 17%;
    
    font-size: 26px;
    font-weight: bold;
    margin-left: 3%;
    border-bottom: 2px solid white;
    border-image: linear-gradient(90deg, rgba(255,255,255,0.00) 0%,#ffffff 50%, rgba(255,255,255,0.00) 100%) 1;
  }
  
  .exit{
    right: 1%;
    top: 0;
  }
  
  .content{
    margin-top: 1%;
    position: relative;
    color: white;
    width: 95%;
    height: 80%;
    margin-left: 2.5%;
  }
  .cover{
    position: absolute;
    width: 30%;
    height: 95%;
    border-radius: 10px;
    overflow: hidden;
  }
  .cover>img{
    width: 100%;
    height: 100%;
    transform: scale(1);
    transition: all .5s linear;
  }
  
  .cover>img:hover{
    transform: scale(1.2);
    transition: all .2s linear;
  }
  
  
  .text{
    position: absolute;
    width: 67%;
    height: 53%;
    overflow: hidden;
    right: 0;
    top: 5%;
  }
  .date{
    position: absolute;
    left: 33%;
    bottom: 10px;
  }
  .readBtn{
    position: absolute;
    width: 200px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border-radius: 20px;
    background: brown;
    bottom: 10px;
    right: 0;
  }
  .readBtn:hover{
    background: crimson;
  }
</style>
