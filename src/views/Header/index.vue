<template>
  <el-header class="header">
    <div class="nav">
      <router-link to="/" class="logo"></router-link>
      <router-link v-for="(item, index) in navList" :key="item.url" :to="item.url" @click="navChange(index)"
        :class="{'nav-active': currentIndex == index}">{{item.title}}</router-link>
    </div>
    <div class="info">
      <el-input v-model="keywords" class="w-50 m-2 search" size="default" placeholder="音乐/视频/电台/用户" />
      <a href="#" class="crt_center">创作者中心</a>
      <a href="#" class="crt_center">登录</a>
    </div>
  </el-header>
</template>

<script setup>
import useNavClick from '@/hooks/useNavClick'
import { reactive, ref } from 'vue'

const keywords = ref('')

const navList = reactive([
  { title: '发现音乐', url: '/discover' },
  { title: '我的音乐', url: '/my' },
  { title: '关注', url: '/friend' },
  { title: '商城', url: '/product' },
  { title: '音乐人', url: '/musician' },
  { title: '下载客户端', url: '/download' }
])

// 调用导航路由改变的hooks函数
const { currentIndex, navChange } = useNavClick()

</script>

<style lang="less" scoped>
@img: "https://s2.music.126.net/style/web2/img/frame/topbar.png?cdfc587f0ca0e40bb6a09f700cb968b2";

.header {
  background: #242424;
  height: 70px;
  display: flex;
  justify-content: center;

  .nav {
    display: flex;
    flex-shrink: 0;

    .logo {
      width: 177px;
      background-image: url("@{img}");
    }

    .active,
    a:not(.logo):hover {
      background: #000;
      color: #ffffff;
    }

    .active {
      position: relative;
    }

    .active::after {
      content: "";
      position: absolute;
      bottom: 0px;
      left: 50%;
      transform: translateX(-50%);
      border: 6px solid transparent;
      border-bottom-color: #c20c0c;
    }
  }

  .info {
    margin-left: 85px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .el-input {
      width: 158px;
      height: 32px;
      overflow: hidden;
      border-radius: 32px !important;

      .el-input__inner::placeholder {
        font-size: 14px;
      }
    }

    .crt_center {
      margin-left: 10px;
      font-size: 12px;
      line-height: 32px;
      padding: 0 15px;
      border-radius: 30px;
      border: 1px solid #4f4f4f;

      &:hover {
        background-color: inherit;
        border-color: #ffffff;
      }
    }
  }

  a {
    color: #ccc;
    font-size: 14px;
    line-height: 70px;
    padding: 0 19px;
  }
}
</style>
