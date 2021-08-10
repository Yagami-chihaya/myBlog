<template>
  <div class="BlogBox">
    <div class="BlogItem" v-for="item in $store.state.userTextData" :key="item">
      <p>{{item.msg}}</p>
    </div>
  </div>
</template>

<script>
export default {
  el: '',
  data () {
    return {
      userTextData:{
        
      }
    }
  },
  methods: {

  },
}
</script>

<style scoped>
  .BlogBox{
    position: fixed;
    bottom: 0;
    left: 10%;
    width: 60%;
    height: 80%;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.5);
    overflow: scroll;
    scrollbar-width: 0;    
  }
  .BlogBox::-webkit-scrollbar{
    display: none;
  }
  .BlogItem{
    width: 100%;
    height: 200px;
    background: rgba(0, 0, 0, 0);
    
  }
  .BlogItem:hover{
    background: rgba(0, 0, 0, 0.411);
  }
</style>
