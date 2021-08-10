<template>
  <div class="avatar" ref="image" >
    <div class="avatarBox"  :style="{width:border_size+'px',height:border_size+'px',top:top+'px',left:left+'px'}">
      <img class="avatarImg"   :style="{width:img_size+'px',marginLeft:'-'+img_margin+'px',marginTop:'-'+img_margin+'px'}" src="../../../assets/img/bdf80cccc5fce34b48b62d68f5d1a237445b3b01.jpg@518w.webp">
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
  
</style>
