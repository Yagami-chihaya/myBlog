<template>
  <div class="leftBox" ref="leftBox">
    <recommend></recommend>
    <div class="middleBox"></div>
    <div class="countBox" ref="countBox" :style="{left:left}">
      <span>My Other Account:</span>
      <other-account class="bilibili" :Imgurl="require('../../../assets/img/bilibili.png')" url="https://space.bilibili.com/1580182" ></other-account>
      <other-account class="github" :Imgurl="require('../../../assets/img/Logo GitHub.png')" url="https://github.com/Yagami-chihaya?tab=repositories" ></other-account>
    </div>
  </div>
</template>

<script>
import recommend from './Recommend.vue'
import otherAccount from '../../../components/common/otherAccount/OtherAccount.vue'

export default {
  el: '',
  data () {
    return {
      left:''
    }
  },
  methods: {

  },
  components:{
    recommend,
    otherAccount,
  },
  activated(){
    let boxWidth =  this.$refs.leftBox.offsetWidth
    let width = this.$refs.countBox.offsetWidth
    let left = (boxWidth-width)/2 + 'px'
    
    this.left = left
  }
}
</script>

<style scoped>
  .leftBox{
    position: absolute;
    top: 33vh;
    left: 10vw;
    width: 60vw;
    height: 66vh;
    background: rgb(255, 255, 255);
    border-radius: 5px;
    overflow: hidden;
    
  }
  .countBox{
    
    height: 60px;
    position: absolute;
    
    bottom: 5%;
    background: grey;
    border-radius: 5px;
    color: white;
    
  }
  .countBox>span{
    font-size: 24px;
    vertical-align: middle;
  }
  .countBox>div{
    margin-top: 6px;
    vertical-align: middle;
  }
 
  .middleBox{
    position: absolute;
    width: 96%;
    height: 25%;
    top: 53%;
    left: 2%;
    
    border-top: 1px solid rgb(192, 192, 192);
    border-bottom: 1px solid rgb(192, 192, 192);
  }
  
</style>
