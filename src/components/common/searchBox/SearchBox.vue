<template>
  <div class="searchBox">
    <div class="searchImg">
      <img src="../../../assets/img/搜索.png">
    </div>
    
    <input type="password">
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
  .searchBox{
    height: 100%;
    display: inline-block;
    position: relative;
  }
  .searchImg{
    width: 1.5rem;
    height: 1.5rem;
    position: absolute;
    top: calc((100% - 1.5rem)/2);
  }
  .searchImg img{
    width: 1.5rem;
    height: 1.5rem;
  }
  .searchBox input{
    width: calc(100% - 4rem);
    height: 1.5rem;
    display: inline;
    position: absolute;
    left: 2rem;
    top: calc((100% - 1.5rem)/2);
    border-radius: 10px;
    background-color: grey;
  }
</style>
