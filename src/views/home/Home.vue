<template>
  <div class="home">
    <nav-bar class="navbar">

      <template v-slot:left >
        <div class="leftButton">
          <img src="../../assets/img/列表切换_卡片.png">
        </div>
      </template>

      <template v-slot:center>
        <nav-bar-item class="navbaritem" :title="navBarItem.home.title" :urlImg="navBarItem.home.urlImg">
        </nav-bar-item>
        <nav-bar-item class="navbaritem" :title="navBarItem.blog.title" :urlImg="navBarItem.blog.urlImg">
        </nav-bar-item>
        <nav-bar-item class="navbaritem" :title="navBarItem.communication.title" :urlImg="navBarItem.communication.urlImg">
        </nav-bar-item>
        <nav-bar-item class="navbaritem" :title="navBarItem.aboutMe.title" :urlImg="navBarItem.aboutMe.urlImg">
        </nav-bar-item>
      </template>

      <template v-slot:right>
        <avatar class="avatar"></avatar>
        <search-box class="searchbox"></search-box>
      </template>

    </nav-bar>
    <div class="background">
      <img src="../../assets/img/89464955_p0_master1200.jpg">
    </div>
    
  </div>
</template>

<script>
import navBar from '../../components/common/navBar/navBar.vue'
import navBarItem from '../../components/common/navBar/navBarItem.vue'
import avatar from '../../components/common/avatar/Avatar.vue'
import searchBox from '../../components/common/searchBox/SearchBox.vue'


export default {
  el: '',
  data () {
    return {
      navBarItem:{
        home:{
          title:'首页',
          urlImg:require('../../assets/img/哇.png')
        },
        blog:{
          title:'我的博客',
          urlImg:require('../../assets/img/给心心.png')
        },
        communication:{
          title:'技术分享',
          urlImg:require('../../assets/img/ybb.png')
        },
        aboutMe:{
          title:'关于我',
          urlImg:require('../../assets/img/哇.png')
        }
      }
    }
  },
  components:{
    navBar,
    navBarItem,
    avatar,
    searchBox,
  },
  methods: {

  },
}
</script>

<style scoped>
  .home{
    height: 100vh;
    width: 100vw;
    overflow: scroll;
  }
  .background{
    height: 600px;
    overflow: hidden;
    width: 100vw;
    position: absolute;
    top: 0;
    z-index: -1;
  }
  .background img{
    width: 100%;
  }
  .navbar{
    height: 60px;
  }
  .leftButton{
    height: 100%;
    position: relative;
    
  }
  .leftButton img{
    position: absolute;
    top:calc((100% - 32px)/2);
    left: 20px;
   
  }
  .avatar{
    
  }
  .searchbox{
    flex: 1;
  }
</style>
