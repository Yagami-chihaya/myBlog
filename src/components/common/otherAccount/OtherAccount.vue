<template>
  <div class="otherAccount">
    <a :href="url">
      <div class="img" >
        <img :src="Imgurl" @mouseenter="turn" :class="{turn:isTurn}">
      </div>
    </a>
  </div>
</template>

<script>
export default {
  el: '',
  data () {
    return {
      isTurn:false
    }
  },
  props:{
    url:'',
    Imgurl:''
  },
  methods: {
    turn(){
      clearTimeout()
      this.isTurn = true
      setTimeout(() => {
        this.isTurn = false
      }, 2000);
    }
  },
}
</script>

<style scoped>
@keyframes turn{
  0%{
    transform: scale(1);
    bottom: 0;
  }
  50%{
    
    bottom:50px;
    transform: rotate(0) scale(2);
  }
  100%{
    transform: rotate(360deg);
    bottom: 0px;
  }
}
  .otherAccount{
    width: 108px;
    height: 48px;
    display: inline-block;
    
  }
  .img{
    position: relative;
    width: 48px;
    height: 48px;
    
    margin-right: 30px;
    margin-left: 30px;
    
  }
  .img img{
    position: absolute;
    width: 100%;
    border-radius: 50%;
    overflow: hidden;
    animation-fill-mode: forwards;
    background: white;
  }
  .turn{
    animation: turn 2s;
    
  }
  .bigger{
    
  }
</style>
