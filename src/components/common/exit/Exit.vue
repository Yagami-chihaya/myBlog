<template>
  <div class="del" :class="{DelEnter:isDel,DelLeave:!isDel}" @mouseenter="delEnter" @mouseleave="delLeave">

  </div>
</template>

<script>
export default {
  el: '',
  data () {
    return {
      isDel:false
    }
  },
  methods: {
    delEnter(){
      this.isDel = true
    },
    delLeave(){
      this.isDel = false
    },
  },
}
</script>

<style scoped>
  .del{
    width: 32px;
    height: 32px;
    position: absolute;
    
    
  }
  .DelLeave{
    background: url('../../../assets/img/叉.png');
  }
  .DelEnter{
    background: url('../../../assets/img/叉 (1).png');
  }
</style>
