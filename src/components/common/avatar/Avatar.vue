<template>
  <div class="avatar">
    <div class="avatarBox">
      <img class="avatarImg" src="../../../assets/img/bdf80cccc5fce34b48b62d68f5d1a237445b3b01.jpg@518w.webp">
    </div>
    
    <span class="name"><slot name="name"></slot></span>
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
  .avatar{
    height: 100%;
    width: 4rem;
    margin-left: 20px;
    display: inline-block;
    position: relative;
  }
  .avatarBox{
    
    width: 3rem;
    height: 3rem;
    top: calc((100% - 3rem)/2);
    
    position: absolute;
    border: 1px solid rgb(255, 122, 148);
    border-radius: 50%;
    overflow: hidden;
  }
  .avatarImg{
    width: calc(3rem + 10px);
    margin-left: -4px;
    margin-top: -4px;
  }
  
</style>
