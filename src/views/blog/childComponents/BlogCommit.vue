<template>
  <div class="blogCommit" :class="{activated:$store.state.commitIsActived}">
    <h1>🌈Start✨Your😎Blog📘Life🌈</h1>
    <div class="userText">
      <div class="title" >
        <span>🔖</span>
        <textarea ref="title" placeholder="输入标题"></textarea>
      </div>
      <div class="text">
        <span>📮</span>
        <textarea ref="text" placeholder="输入内容"></textarea>
      </div>
      <choose-file class="chooseFile" @getImgURL='getURL'></choose-file>
    </div>
    <div class="send" @click="getUserText" ><p>Send!</p></div>
    <exit class="exit" @click="exit"></exit>
  </div>
</template>

<script>
import exit from '../../../components/common/exit/Exit.vue'
import chooseFile from '../../../components/common/chooseFile/ChooseFile.vue'

export default {
  
  el: '',
  
  data () {
    return {
      url:''
    }
  },
  methods: {
    getUserText(){
      const userData = {
        title:'默认标题',
        msg:'然然我的然然😭',
        time:'1970-1-1',
        cover:require('../../../assets/img/152ad850352ac65c4eebdf36ecf2b21192138a32.jpg')
      }
      if(this.$refs.title.value) userData.title = this.$refs.title.value
      if(this.$refs.text.value) userData.msg = this.$refs.text.value
      if(this.url) userData.cover = this.url
      const currentTime = new Date()
      userData.time = currentTime.toLocaleString() 
      
      this.$store.state.userTextData.push(userData)

      console.log(this.userData);
      console.log(this.$store.state.userTextData);
      this.exit()
    },
    exit(){        //这个是提交页面的退出
      this.$store.state.commitIsActived = false
    },
    getURL(val){
      this.url = val
    }
    
  },
  components:{
    exit,
    chooseFile
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

  h1{
    text-align: center;
  }
  .blogCommit{
    position: fixed;
    top: 10%;
    left: 5%;
    width: 90%;
    height: 80%;
    background: rgba(14, 207, 255, 0.486);
    border-radius: 20px;
    display: none;
    animation: bigger .5s;
  }
  .userText{
    position: relative;
    width: 90%;
    height: 80%;
    margin-left: 5%;
    background: url('../../../assets/img/88479128_p0_master1200.jpg');
    
  }
  .title>span{
    position: absolute;
    font-size: 26px;
    left: 6%;
    top: 10%;
  }
  .text>span{
    position: absolute;
    font-size: 26px;
    left: 6%;
    bottom: 68%;
  }
  .title>textarea{
    position: absolute;
    top: 10%;
    left: 10%;
    border:0;
    border-radius:5px;
    background-color:rgba(0, 0, 0, 0.068);
    
    width: 40%;
    height: 5%;
    padding: 10px;
    resize: none;
    outline:none;
  }
  .text>textarea{
    position: absolute;
    border:0;
    border-radius:5px;
    background-color:rgba(0, 0, 0, 0.068);
    left: 10%;
    bottom: 20%;
    width: 80%;
    height: 50%;
    padding: 10px;
    resize: none;
    outline:none;
    
  }
  .exit{
    right: 1%;
    top:1%;
  }
  .send{
    position: absolute;
    left: 42.5%;
    top:80%;
    width: 15%;
    height: 12%;
    
    text-align: center;
    border-radius: 20px;
    background: rgb(0, 204, 255);
    cursor: pointer;
  }
  .send>p{
    margin-top: 10px;
    
    color: white;
    font-size: 40px;
    font-weight: bolder;
  }
  .chooseFile{
    right: 40%;
    top: 11%;
  }
  
  .activated{
    display: block;
  }
</style>
