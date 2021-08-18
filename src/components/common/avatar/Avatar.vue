<template>
  <div class="avatar" ref="image" >
    <div class="avatarBox"  :style="{width:border_size+'px',height:border_size+'px',top:top+'px',left:left+'px'}">
      
      <div class="tip">
        <input class="chooseAvatar" type="file" accept="image/*" ref="chooseAvatar" @change="chooseAvatar">
        <span>更换图片</span>
      </div>
      
      <img class="avatarImg"  :style="{width:img_size+'px',height:img_size+'px',marginLeft:'-'+img_margin+'px',marginTop:'-'+img_margin+'px'}" :src="$store.state.avatarURL">
    </div>
    
    <span class="name"><slot name="name"></slot></span>
  </div>
</template>

<script>


export default {
  el: '',
  data () {
    return {
      
      img_margin:(this.img_size-this.border_size-2)/2,
      left:{
        type:String,
        default:''
      },
      URL:"",
    }
  },
  props:{
    border_size:{
      type:Number,
      default:0,
    },
    top:{
      type:Number,
    },
    
    img_size:{
      type:Number,
    },
    
    
  },
 
  methods: {
    show(){
      this.left = (this.$refs.image.offsetWidth-this.border_size)/2;
      console.log(this.$refs.image.offsetWidth);
    },
    chooseAvatar(){
      const file = this.$refs.chooseAvatar.files[0]
      const url = window.URL.createObjectURL(file)
      
      this.$store.state.avatarURL = url
      
      console.log(this.$store.state.avatarURL);
    }
  },
  mounted(){
    this.show()
  }
  
}
</script>

<style scoped>
  .avatar{
    
  }
  .avatarBox{

    top: calc((100% - 3rem - 2px)/2);
    left: calc((100% - 3rem - 2px)/2);
    position: absolute;
    border: 1px solid rgb(255, 122, 148);
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    
    
  }
  
  .avatarImg{
    width: calc(3rem + 10px);
    
  }
  .name{
    text-align: center;
    display: inline-block;
    width: 100%;
    margin-top: 40%;
    color: rgb(252, 173, 173);
    font-weight: bold;
    font-size: 30px;
    
  }
  .chooseAvatar{
    display: inline-block;
    position: absolute;
    width: 100%;
    height: 100%;
    font-size: 200px;
    opacity: 0;
    z-index: 2;
    
  }
  
  .tip{
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.425);
    opacity: 0;
    
  }
  .tip:hover{
    opacity: 1;
    
  }
  .tip>span{
    display: inline-block;
    position: absolute;
    top: calc((100% - 16px)/2);
    left: calc((100% - 80px)/2);
    width: 80px;
    height: 16px;
    font-size: 8px;
    text-align: center;
    line-height: 16px;
    align-self: center;
    color: white;
  }
</style>
