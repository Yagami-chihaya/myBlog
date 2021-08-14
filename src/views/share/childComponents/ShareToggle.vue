<template>
  <div class="sharetoggle" @click="itemClick">
    <span class="video" :class="{active:isActived}">Video</span>
    <span class="img" :class="{active:!isActived}">Img</span>
  </div>
</template>

<script>
export default {
  el: '',
  data () {
    return {
      isActived:true
    }
  },
  methods: {
    itemClick(){
      this.isActived = !this.isActived
      this.$emit('isShow',this.isActived)
    }
  },
}
</script>

<style scoped>
  .sharetoggle{
    
    position: absolute;
    top: 1%;
    right: 2%;
    width: 90px;
    height: 25px;
    border-radius: 5px;
    overflow: hidden;
    background: rgb(122, 122, 122);
  }
  .sharetoggle span{
    text-align: center;
    
    display: inline-block;
    width: 44px;
    height: 100%;
    padding-top: 3px;
    font-size: 8px;
  }
  .video{
    border-right: 1px solid black;
  }
  .active{
    background: rgb(209, 209, 209);
  }
</style>
