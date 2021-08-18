<template>
  <div class="rightBox">
    
    <div class="bilibiliConfirm">
      <div class="content">
        <img src="../../../assets/img/闪电.png" style="width:22px">
        <span>bilibili个人认证：国产知名女团A-SOUL 头号粉丝</span>
      </div>
    </div>

    <div class="mineInfo">
      <div class="content">
        <p class="title">个人信息</p>
        <div class="info">
          <p><span>🤵</span>昵称：优雅贝极星</p>
          <p><span>⚧</span>性别：不明</p>
          <p><span>💼</span>职业：卡车司机</p>
          <p><span>🏫</span>学校：枝江高级技术学院</p>
          <p><span>💗</span>兴趣：勇敢牛牛 不怕困难！</p>
          <p><span>🆙</span>年龄：比A手成员小</p>
          <p><span>📖</span>最喜欢看的书：拉姐给我的情书</p>
          <p><span>🎵</span>最喜欢听的歌：猫中毒</p>
        </div>
        <div class="introduce">
          <p class="title">个人介绍</p>
          <textarea placeholder="拉姐你带我走吧拉姐"></textarea>
        </div>
      </div>
    </div>
  
  </div>
</template>

<script>
export default {
  el: '',
  data () {
    return {
      
    }
  },
  methods: {

  },
}
</script>

<style scoped>
  .rightBox{
    position: absolute;
    width: 19vw;
    height: 66vh;
    top: 33vh;
    right: 10vw;
    overflow: hidden;
    
  }
  .bilibiliConfirm{
    width: 100%;
    height: 14%;
    
    
    background: rgb(255, 255, 255);
    border-radius: 5px;
    position: relative;
  }
  .bilibiliConfirm>.content{
    position: absolute;
    width: 86%;
    height: 60%;
    left: 7%;
    top: 20%;
    
  }
  .bilibiliConfirm>.content>img{
    vertical-align: middle;
  }
  .bilibiliConfirm>.content>span{
    vertical-align: middle;
    font-size: 14px;
  }

  .mineInfo{
    margin-top: 5%;
    width: 100%;
    height: 83.5%;
    background: rgb(255, 255, 255);
    border-radius: 5px;
    position: relative;
  }
  .mineInfo>.content{
    position: absolute;
    width: 86%;
    height: 94%;
    left: 7%;
    top: 3%;
    
  }
  .mineInfo>.content .title{
    font-weight: bold;
    padding-bottom: 5%;
    border-bottom: 1px solid rgb(192, 192, 192);
  }
  .mineInfo>.content>.info{
    margin-top: 5%;
    height: 61%;
    
  }
  .mineInfo>.content>.info>p{
    padding-bottom: 4%;
    color: grey;
  }
  .mineInfo>.content>.info>p>span{
    display: inline-block;
    width: 20px;
    text-align: center;
  }
  .mineInfo>.content>.introduce{
    height: 28%;
    position: relative;
  }
  .mineInfo>.content>.introduce>textarea{
    position: absolute;
    resize: none;
    outline: none;
    padding-left: 3%;
    left: -3%;
    width: 103%;
    padding-top: 5%;
    
    
    height: 60%;
    border-color: rgba(255, 255, 255, 0);
    border-radius: 2px;
    color:grey;
    font-family: Microsoft Yahei;
    z-index: 2;
  }
  .mineInfo>.content>.introduce>textarea:hover{
    border: 1px solid rgb(0, 153, 255);
  }
  .mineInfo>.content>.introduce>textarea::-webkit-input-placeholder{
    width: 99%;
    height: 60%;
    color:grey;
    font-family: Microsoft Yahei;
  }
</style>
