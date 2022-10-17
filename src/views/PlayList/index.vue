<template>
  <div class="wrapper play-list">
    <SectionHeader>
      <template #left>
        <PlayListPopper :getPlayList="getPlayListArray" />
      </template>
      <template #right>
        <el-button color="#C20C0C" size="small" type="danger" @click="getHotPalyList">热门</el-button>
      </template>
    </SectionHeader>
    <MusicItem :list="playList?.playlists" :total="5" :imgUrlField="'coverImgUrl'">
      <template v-slot="{item}">
        <div class="title">{{item.name}}</div>
        <div class="creator">
          <span class="by">by</span>
          <span class="nickname">{{item.creator.nickname}}</span>
        </div>
      </template>
    </MusicItem>
    <Pagintion :total="playList?.total" @currentPageChange="pageChange" />
  </div>
</template>

<script setup>
import SectionHeader from '@/components/SectionHeader'
import MusicItem from '@/components/MusicItem'
import PlayListPopper from './component/PlayListPopper.vue'
import Pagintion from '@/components/Pagination'
import { getPlayList } from '@/servies/PlayList'
import { useRouterInfo } from '@/hooks/useRouterInfo'
import { ref } from 'vue'
const { router, route } = useRouterInfo()

// 获取歌单列表数据
const playList = ref(null)
getPlayListArray()
function getPlayListArray(...args) {
  getPlayList(...args).then(res => {
    playList.value = res
  })
}
// 点击热门按钮触发
const getHotPalyList = () => {
  const cat = route.query.cat || '全部'
  getPlayListArray('hot', cat)
  let url = `/discover/playlist/?cat=${route.query.cat}&order=hot`
  if (!route.query.cat) url = `/discover/playlist/?order=hot`
  router.push(url)
}
// 分页
function pageChange(pageIndex) {
  // 获取原有的cat和order
  const { cat, order } = route.query
  // 重新设置limit和offset
  const limit = 50
  const offset = (pageIndex - 1) * limit
  getPlayListArray(order || 'hot', cat || '全部', limit, offset)
  // 设置滚动条位置
  document.documentElement.scrollTop = 0
}
</script>

<style lang="less" scoped>
@import "@/assets/css/common.less";

.play-list {
  .title {
    .text-ellipies(1);
    margin: 8px 0;
    cursor: pointer;
    .hover-underline;
  }

  .creator {
    font-size: 12px;
    color: #999;
    display: flex;

    .by {
      color: #999;
    }

    .nickname {
      margin-left: 2px;
      flex: 1;
      .text-ellipies(1);
      cursor: pointer;
      .hover-underline;
    }
  }
}
</style>
