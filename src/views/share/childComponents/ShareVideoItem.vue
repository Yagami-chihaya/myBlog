<template>
  <div class="shareBoxItem">
    <a :href="videoData.url">

    
    <div class="cover">
      <img :src="videoData.cover_url">
      <div class="info">
        <div class="infoBox">
          <p>播放：{{videoData.view}}</p>
          <p>收藏：{{videoData.favorite}}</p>
          <p>UP主：{{videoData.author}}</p>
        </div>
      </div>
    </div>
    
    <p class="title">{{videoData.title}}</p>
    <span class="date">创建于:{{videoData.date}}</span>
    </a>
  </div>
</template>

<script>
export default {
  el: '',
  data () {
    return {
      
    }
  },
  props:{
    videoData:{}
  },
  methods: {

  },
}
</script>

<style scoped>
  @keyframes show{
    0%{
      opacity: 0;
    }
    100%{
      opacity: 1;
    }
  }

  .shareBoxItem{
    
    display: inline-block;
    width: 15%;
    height: 30%;
    overflow: hidden;
    margin-right: 3%;
    margin-bottom: 5%;
    background: rgba(255, 255, 255, 0.082);
    border-radius: 5px;
    position: relative;
  }
  .cover{
    position: relative;
    width: 98%;
    height: 65%;
    margin-left: 1%;
    
  }
  .cover img{
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
  .cover .info{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    opacity: 0;
    background: rgba(0, 0, 0, 0.623);
    
    color: white;
  }
  .cover .info:hover{
    animation: show 0.5s;
    animation-fill-mode: forwards;
  }
  .info .infoBox{
    width: 80%;
    height: 60%;
    
    margin-top: 15%;
    margin-left: 10%;
  }
  .info p{
    margin-bottom: 3%;
  }
  .title{
    color: white;
    font-size: 12px;
    height: 18%;
    overflow: hidden;
  }
  .date{
    position: absolute;
    color: white;
    font-size: 14px;
    bottom: 2%;

  }
</style>
