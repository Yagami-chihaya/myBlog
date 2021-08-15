<template>
  <div class="widgets">
    <img :src="imgURL" @mouseenter="turn" :class="{turn:isTurn}" :style="{left:img_left,top:img_top,width:img_size,transform:img_deg,src:imgURL}">
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
    imgURL:'',
    img_size:'',
    img_left:'',
    img_top:'',
    img_deg:''
  },
  methods: {
    turn(){
      this.isTurn = true
      setTimeout(() => {
        this.isTurn = false
      }, 400);
    }
  },
}
</script>

<style scoped>
@keyframes turn{
  0%{
    transform: rotate(0deg);
  }
  
  100%{
    transform: rotate(360deg);
  }
}
  .widgets{

  }
  .widgets img{
    position: absolute;
    
    
    
    border-radius: 50%;
    
    overflow: hidden;
    border-bottom: 1px solid black;
    background: white;
  }
  .turn{
    animation: turn .5s;
  }
</style>
