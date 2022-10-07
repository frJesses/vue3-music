<template>
  <div class="wrapper station-recommend" v-if="station.radioRecommendList.length">
    <SeationHeader :more="''">
      <template #left>
        <h3 class="title">推荐节目</h3>
        <span class="update">(每日更新)</span>
      </template>
    </SeationHeader>
    <LayoutWrapper :list="station.radioRecommendList" :tagWidth="'100px'" class="recommend-wrapper">
      <template v-slot:info="{item}">
        <router-link class="name" :to="`/program?id=${item.id}`">{{item.name}}</router-link>
        <router-link class="rick-name" :to="`/djradio?id=${item.radio.id}`">{{item.radio.name}}</router-link>
        <div class="play">播放{{item.listenerCount}}</div>
        <div class="like">赞{{item.likedCount}}</div>
      </template>
      <template v-slot:tag="{item}">
        <router-link class="tag" :to="`/discover/djradio/category?id=${item.radio.categoryId}`">{{item.radio.category}}</router-link>
      </template>
    </LayoutWrapper>
  </div>
</template>

<script setup>
import SeationHeader from '@/components/SectionHeader'
import LayoutWrapper from '@/components/LayoutWrapper'
import useStore from '@/store'
const { station } = useStore()
</script>

<style lang="less" scoped>
@import "@/assets/css/common.less";
.station-recommend {
  .title {
    font-weight: normal;
    font-size: 24px;
    margin-right: 10px;
    display: inline-block;
  }
  .update {
    color: #999;
    font-size: 12px;
  }
  .recommend-wrapper {
    border: 1px solid #e2e2e2;
    border-width: 0 1px;
    :deep(.info) {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
    }
    font-size: 12px;
    a {
      .hover-underline;
    }
    :deep(.item) {
      padding: 10px 20px;
      &:nth-child(even) {
        background: #f7f7f7;
      }
    }
    .name {
      width: 304px;
      color: #333;
      .text-ellipies(1);
    }
    .rick-name,
    .play,
    .like {
      margin-left: 10px;
      color: #666;
    }
    .rick-name {
      width: 166px;
      .text-ellipies(1);
    }
    .play {
      width: 90px;
    }
    .like{
      width: 126px;
    }
    .tag {
      border: 1px solid #999;
      line-height: 15px;
      height: 16px;
      padding: 0 6px;
      font-size: 12px;
      color: #999;
      margin-right: 10px;

      &:hover {
        border-color: #666;
        color: #666;
        text-decoration: none;
      }
    }
  }
}
</style>
