<template>
  <div class="blogButton">
    <div class="commitBtn" @click="commitBtnClick">发条Blog</div>
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
    commitBtnClick(){
      this.$store.state.commitIsActived = true
      console.log(this.$store.state.commitIsActived);
      
    }
  },
}
</script>

<style scoped>
  .blogButton{
    position: fixed;
    right: 10%;
    bottom: 0;
    width: 19%;
    height: 80%;
    margin-left: 60%;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.5);
  }
  .commitBtn{
    margin-left:calc((100% - 160px)/2);
    margin-top: 30px;
    width: 160px;
    height: 50px;
    border-radius: 20px;
    border: 2px solid rgb(0, 162, 255);;
    color: rgb(0, 162, 255);
    background: rgb(255, 255, 255);
    line-height: 50px;
    text-align: center;
    font-size: 32px;
  }
  .commitBtn:hover{
    background: rgb(0, 162, 255);
    color: white;
  }
  
</style>
