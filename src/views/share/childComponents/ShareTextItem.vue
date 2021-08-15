<template>
  <div class="shareTextItem">
    <span class="title" @click="itemClick">📄 {{textData.title}}</span>
    <span class="time">创建于：{{textData.time}}</span>
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
    textData:{
        
    },
  },
  methods: {
    itemClick(){
      this.$router.push("/text/"+this.textData.id)
    }
  },
  created(){
    
  }
}
</script>

<style scoped>
  .shareTextItem{
    position: relative;
    width: 100%;
    height: 5%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.527);
    margin-bottom: .5%;
  }
  .title{
    color: white;
    font-size: 20px;
    cursor: pointer;
  }
  .time{
    position: absolute;
    top: 30%;
    right: 2%;
    font-size: 12px;
    color: rgb(170, 170, 170);
    text-align: right;
  }
</style>
