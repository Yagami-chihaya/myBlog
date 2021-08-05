<template>
  <div class="navBarItem">
    <img :src="urlImg">
    <span>{{title}}</span>
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
    urlImg:String,
    title:String,
  },
  methods: {

  },
}
</script>

<style scoped>
  .navBarItem{
    flex: 1;
    height: 100%;
    width: 120px;
    display: inline-block;
    position: relative;
    border-right: 2px solid white;
    background-color: rgba(252, 130, 161, 0.801);
  }
  .navBarItem:last(){
    border-right: none;
  }
  .navBarItem:hover{
    background-color: rgb(252, 130, 160);
  }
  .navBarItem img{
    width:40px;
    position: absolute;
    top:calc((100% - 40px)/2);
    
  }
  .navBarItem span{
    color: white;
    height: 40px;
    display: inline-block;
    top:calc((100% - 40px)/2);
    left: 45px;
    line-height: 40px;
    position: absolute;
    
    
  }
</style>
