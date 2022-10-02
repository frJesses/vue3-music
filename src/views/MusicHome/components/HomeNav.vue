<template>
  <div class="sub-nav">
    <ul class="nav">
      <li
        v-for="(item, index) in navList"
        :key="item.url"
        @click="navChange(index)"
        :class="{'nav-active': currentIndex == index}"
      >
        <router-link :to="item.url">{{ item.title }}</router-link>
      </li>
    </ul>
  </div>
  <router-view></router-view>
</template>

<script setup>
import { reactive } from 'vue'
import useNavClick from '@/hooks/useNavClick'

const navList = reactive([
  { title: '推荐', url: '/discover' },
  { title: '排行榜', url: '/discover/toplist' },
  { title: '歌单', url: '/discover/playlist' },
  { title: '主播电台', url: '/discover/djradio' },
  { title: '歌手', url: '/discover/artist' },
  { title: '新碟上架', url: '/discover/album' }
])

// 使用封装好的nav路由导航hooks
const { currentIndex, navChange } = useNavClick()
</script>

<style lang="less" scoped>
.sub-nav {
  display: flex;
  justify-content: center;
  background-color: #c20c0c;
  border-bottom: 1px solid #a40011;
  margin: 0 auto;
  .nav {
    display: flex;
    align-items: center;
    height: 35px;
    width: 1100px;
    padding-left: 200px;
    li {
      display: flex;
      align-items: center;
      line-height: 35px;
      &.nav-active {
        a {
          background: #9b0909;
        }
      }
      a {
        font-size: 12px;
        color: white;
        padding: 0 13px;
        border-radius: 20px;
        line-height: 21px;
        margin-right: 35px;
      }
    }
  }
}
</style>
