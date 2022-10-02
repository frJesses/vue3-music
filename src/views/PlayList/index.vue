<template>
  <div class="wrapper play-list">
    <SectionHeader>
      <template #left>
        <PlayListPopper/>
      </template>
      <template #right>
        <el-button color="#C20C0C" size="small" type="danger">热门</el-button>
      </template>
    </SectionHeader>
    <MusicItem :list="playList?.playlists" :total="5">
      <template v-slot="{item}">
        <div class="title">{{item.name}}</div>
        <div class="creator">
          <span class="by">by</span>
          <span class="nickname">{{item.creator.nickname}}</span>
        </div>
      </template>
    </MusicItem>
  </div>
</template>

<script setup>
import SectionHeader from '@/components/SectionHeader'
import MusicItem from '@/components/MusicItem'
import PlayListPopper from './component/PlayListPopper.vue'
import { getPlayList } from '@/servies/PlayList'
import { ref } from 'vue'

// 获取歌单列表数据
const playList = ref(null)
getPlayList().then(res => {
  playList.value = res
})
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
