<template>
  <div class="postcard">
    <avatar class="avatar" border_size="100" top="20" left='' img_size="100">
      <template v-slot:name>
        我是然然最爱❤嘉心糖❤捏
      </template>
    </avatar>
    
  </div>
</template>

<script>
import avatar from '../../../components/common/avatar/Avatar.vue'

export default {
  el: '',
  data () {
    return {
      
    }
  },
  components:{
    avatar
  },
  methods: {

  },
}
</script>

<style scoped>
  .postcard{
    margin-left:10%; 
    width: 80%;
    height: 50vh;
    background-color: rgba(255, 255, 255, 0.877);
    position: fixed;
    bottom: 0;
    border-radius: 10px;
  }
  .avatar{
    height: 100%;
    width: 30%;
    left:calc((100% - 30%)/2);
    display: inline-block;
    position: relative;
  }
</style>
