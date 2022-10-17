<template>
  <div class="wrapper station-rank" v-if="station.radioRankList.length">
    <SeationHeader :more="''">
      <template #left>
        <h3 class="title">推荐节目</h3>
        <span class="update">最近更新: {{moment(new Date()).format('MM月DD日')}}</span>
      </template>
    </SeationHeader>
    <LayoutWrapper :list="station.radioRankList" class="rank-wrapper">
      <template v-slot:info="{item}">
        <router-link class="name" :to="`/program?id=${item.program.id}`">{{item.program.name}}</router-link>
        <router-link class="rick-name" :to="`/djradio?id=${item.program.radio.id}`">{{item.program.radio.name}}
        </router-link>
        <router-link class="tag" :to="`/discover/djradio/category?id=${item.program.radio.categoryId}`">
          {{item.program.radio.category}}</router-link>
      </template>
    </LayoutWrapper>
  </div>
</template>

<script setup>
import SeationHeader from '@/components/SectionHeader'
import LayoutWrapper from '@/components/LayoutWrapper'
import useStore from '@/store'
import moment from 'moment'
const { station } = useStore()
</script>

<style lang="less" scoped>
@import "@/assets/css/common.less";

.station-rank {
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
  .rank-wrapper {
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

    .rick-name {
      margin-left: 10px;
      color: #666;
    }

    .rick-name {
      width: 176px;
      .text-ellipies(1);
    }

    .tag {
      border: 1px solid #999;
      line-height: 15px;
      height: 16px;
      padding: 0 6px;
      font-size: 12px;
      color: #999;
      margin-left: 10px;

      &:hover {
        border-color: #666;
        color: #666;
        text-decoration: none;
      }
    }
  }
}
</style>
