<template>
  <div class="choosefile">
    
    选择文件<input type="file" accept="image/*" @change="chooseFile" ref="chooseFile">
      
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
    chooseFile(){
      const file = this.$refs.chooseFile.files[0]
      
      const url = window.URL.createObjectURL(file)
      
      console.log(url);
      this.$emit('getImgURL',url)
      console.log(file);
      alert('图片已上传')
    }
  },
}
</script>

<style scoped>
  .choosefile{
    
    position: absolute;
    display: inline-block;
    background: #D0EEFF;
    border: 1px solid #99D3F5;
    border-radius: 4px;
    padding: 4px 12px;
    overflow: hidden;
    color: #1E88C7;
    text-decoration: none;
    text-indent: 0;
    line-height: 20px;
  }
  .choosefile input{
    position: absolute;
    font-size: 100px;
    right: 0;
    top: 0;
    opacity: 0;
  }
  .choosefile:hover{
    background: #AADFFD;
    border-color: #78C3F3;
    color: #004974;
    text-decoration: none;
  }
</style>
