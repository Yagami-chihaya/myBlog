<template>
  <div class="blogCommit" :class="{activated:$store.state.commitIsActived}">
    <div class="userText">
      <textarea ref="text"></textarea>
    </div>
    <div class="send" @click="getUserText">发送</div>
    <div class="exit" @click="exit">X</div>
  </div>
</template>

<script>
export default {
  el: '',
  
  data () {
    return {
      userData:[
        
      ]
    }
  },
  methods: {
    getUserText(){
      this.userData.push({msg:this.$refs.text.value}) 
      
      setTimeout(() => {
        this.$store.state.userTextData = this.userData
        console.log(this.userData);
        console.log(this.$store.state.userTextData);
      }, 2000);
      
      
    },
    exit(){
      
      this.$store.state.commitIsActived = false
      
      
    }
  },
}
</script>

<style scoped>
  .blogCommit{
    position: fixed;
    top: 10%;
    left: 10%;
    width: 80%;
    height: 60%;
    background: white;
    border-radius: 10px;
    display: none;
  }
  .activated{
    display: block;
  }
</style>
