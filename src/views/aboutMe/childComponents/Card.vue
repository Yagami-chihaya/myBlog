<template>
  <div class="card">
  
    <img class="backgroundImg" src="../../../assets/img/1e457fa3a2b3834e475d6041f20e4ec3cc134527.png@2560w_400h_100q_1o.jpg">
  
    <div class="bottomBox">
      <avatar class="avatar" border_size="70" top='100' img_size="90"></avatar>
      <div class="mineInfo">
        <p class="mineName">Yagami千早</p>
        <textarea class="motto" placeholder="然然你好可爱捏"></textarea>
      </div>
    </div>
    
    
  </div>
</template>

<script>
import avatar from '../../../components/common/avatar/Avatar.vue'

export default {
  el: '',
  data () {
    return {
      
    }
  },
  methods: {

  },
  components:{
    avatar
  }
}
</script>

<style scoped>
@keyframes border_show{
  0%{
    border-color: rgba(255, 255, 255, 0);
  }
  100%{
    border-color: white;
  }
}
  .card{
    position: absolute;
    
    right: 10vw;
    
    width: 80vw;
    height: 24%;
    z-index: 1;
    background: black;
    overflow: hidden;
    
    
  }
  .backgroundImg{
    width: 100%;
    margin-bottom: 100px;
    
    z-index: -5;
  }
  .bottomBox{
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(rgba(0, 0, 0, 0),rgba(0,0,0,0.8));
    z-index: 1;
  }
  .avatar{
    position: absolute;

    left: -10%;
    top: -55%;
  }
  .mineInfo{
    width: 50%;
    height: 35%;
    position: absolute;
    background: rgba(0, 0, 0, 0);
    top: 5%;
    left: 10%;
    color: white;
    overflow: hidden;
  }
  .mineInfo .mineName{
    font-size: 20px;
    font-weight: bolder;
  }
  .mineInfo .motto{
    background: rgba(255, 0, 0, 0);
    border: 1px solid rgba(255, 255, 255, 0);
    resize: none;
    outline: none;
    width: 90%;
    height: 25px;
    margin-top: 5px;
    overflow: hidden;
    line-height: 25px;
    color:hsla(0,0%,100%,.8);
    font-family: Microsoft Yahei;
  }
  .mineInfo .motto::-webkit-input-placeholder{
    height: 25px;
    line-height: 25px;
    left: 10px;
    font-size: 12px;
    font-weight: 500;
    color:hsla(0,0%,100%,.8);
    font-family: Microsoft Yahei;
  }
  .mineInfo .motto:hover{
    border: 1px solid white;
    border-radius: 5px;
    animation: border_show .5s;
  }
</style>
