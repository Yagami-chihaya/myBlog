<template>
  <div id="navbar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
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
  #navbar{
    width: 100vw;
    color: white;
    background-color: rgba(0, 0, 0, 0.425);
    display: flex;
  }
  .left{
    width: 10vw;
  }
  .center{
    flex: 1;
    display: flex;
  }
  .right{
    width:20vw;
    display: flex;
  }
</style>
