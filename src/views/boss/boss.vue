<template>
  <div>
    <NavBar :title="headerTitle"></NavBar>

    <div class="container">
      <router-view></router-view>
    </div>

    <Tabber :navList="navList"></Tabber>

  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'
  import NavBar from '../../components/NavBar/NavBar'
  import Tabber from '../../components/x-tabbar/x-tabbar'

  export default {
    name: "boss",
    data() {
      return {
        headerTitle:'',
        navList: [
          {
            path: '/boss/bossContainer',
            text: '牛人',
            icon: 'boss',
            title: '牛人列表',
          },
          {
            path: '/boss/msg',
            text: '消息中心',
            icon: 'msg',
            title: '消息列表'
          },
          {
            path: '/boss/me',
            text: '个人中心',
            icon: 'user',
            title: '个人中心'
          }
        ]
      }
    },
    components: {
      NavBar,
      Tabber
    },
    created(){
      this.getMsgList()
    },
    watch: {
      $route: {
        handler: function(to, from){
          let headerTitle = this.navList.find((v) => {
            return v.path === to.fullPath
          })
          this.headerTitle = headerTitle.text
        },
        immediate:true
      }
    },
    methods:{
      ...mapActions(['getMsgList'])
    }

  }
</script>

<style lang="stylus" scoped>

  .container {
    position: absolute
    top: 44px
    left: 0
    bottom: 53px
    width 100%
    background #f5f5f5
  }

</style>
