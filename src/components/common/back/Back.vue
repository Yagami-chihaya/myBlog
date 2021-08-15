<template>
  <div class="back">
    <img src="../../../assets/img/上一步.png" @click="itemClick">
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
    itemClick(){
      this.$router.go(-1)
    }
  },
}
</script>

<style scoped>
  .back img{
    width: 48px;
  }
</style>
