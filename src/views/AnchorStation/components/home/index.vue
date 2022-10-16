<template>
  <div class="station-list wrapper">
    <div class="left">
      <SeationHeader :title="'推荐节目'" @showDetailInfo="showMoreInfo('recommend')" @showMore="showMoreInfo('recommend')"></SeationHeader>
      <LayoutWrapper :list="stationStore.radioRecommendList?.slice(0, 10)" :tagWidth="'80px'" class="layout-wrapper">
        <template v-slot:info="{item}">
          <router-link class="name" :to="`/program?id=${item.id}`">{{item.name}}</router-link>
          <router-link class="source" :to="`/djradio?id=${item.radio.id}`">{{item.dj.brand}}</router-link>
        </template>
        <template v-slot:tag="{item}">
          <router-link class="tag" :to="`/discover/djradio/category?id=${item.radio.categoryId}`">
            {{item.radio.category}}</router-link>
        </template>
      </LayoutWrapper>
    </div>
    <div class="right">
      <SeationHeader :title="'节目排行榜'" @showDetailInfo="showMoreInfo('rank')" @showMore="showMoreInfo('rank')"></SeationHeader>
      <LayoutWrapper :list="stationStore.radioRankList?.slice(0, 10)" class="layout-wrapper">
        <template v-slot:info="{item}">
          <router-link class="name" :to="`/program?id=${item.program.id}`">{{item.program.name}}</router-link>
          <router-link class="source" :to="`/djradio?id=${item.program.radio.id}`">{{item.program.radio.name}}
          </router-link>
        </template>
        <template v-slot:sort="{item, index}">
          <SortItem :index="index" :diff="(item.lastRank - item.rank)" class="layout-sort"></SortItem>
        </template>
      </LayoutWrapper>
    </div>
  </div>
  <div class="station-category wrapper">
    <template v-for="item in radioTypeData" :key="item.title">
      <SeationHeader :title="item.title + ' · 电台'" @showDetailInfo="showMoreInfo(item.type)" @showMore="showMoreInfo(item.type)"></SeationHeader>
      <LayoutWrapper @imgClick="imgClick" :list="item.data" :imgWidth="120" :lineCount="2" :imgUrlField="'picUrl'"
        :showPlayIcon="false" class="layout-category">
        <template v-slot:info="{item}">
          <router-link class="name" :to="`/djradio?id=${item.id}`">{{item.name}}</router-link>
          <span class="source">{{item.rcmdtext}}</span>
        </template>
      </LayoutWrapper>
    </template>
  </div>
</template>

<script setup>
import SeationHeader from '@/components/SectionHeader'
import LayoutWrapper from '@/components/LayoutWrapper'
import SortItem from '@/components/SortItem'
import { onMounted, ref, reactive } from 'vue'
import { getRadioTypeData } from '@/servies/AnchorStation'
import { useRouterInfo } from '@/hooks/useRouterInfo'
import useStation from '@/store/station'
const stationStore = useStation()
const { router } = useRouterInfo()
// const radioRankList = ref([])
const radioTypeData = ref([])
// 定义数组，存储类型
const typeArr = reactive([
  { type: 2, name: '音乐推荐' },
  { type: 6, name: '生活' },
  { type: 3, name: '情感' },
  { type: 2001, name: '创作翻唱' },
  { type: 11, name: '知识' }
])
onMounted(() => {
  // 获取推荐节目
  stationStore.getStationRecommend()
  // 获取节目排行榜数据
  stationStore.getStationRank()
  // 获取推荐类型的数据(2-音乐推荐 6-生活 3-情感 2001-创作翻唱 11-知识)
  typeArr.forEach(item => {
    getRadioTypeData(item.type).then(res => {
      const obj = {
        type: item.type,
        title: item.name,
        data: res.djRadios.slice(0, 4)
      }
      radioTypeData.value.push(obj)
    })
  })
})
// 点击标题展示更多
function showMoreInfo(flag) {
  if (flag === 'recommend') {
    router.push('/discover/djradio/recommend')
  } else if (flag === 'rank') {
    router.push('/discover/djradio/rank')
  } else {
    router.push(`/discover/djradio/category?id=${flag}`)
  }
}
// 点击图片跳转
function imgClick(items) {
  router.push(`/discover/djradio/category?id=${items.categoryId}`)
}
</script>

<style lang="less" scoped>
@import "@/assets/css/common.less";

.station-list {
  padding: 0 40px 40px;
  display: flex;
  justify-content: space-between;

  .left {
    flex: 0 0 426px;

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

  .right {
    flex: 0 0 426px;
  }

  a {
    .hover-underline;
  }

  .layout-wrapper {
    font-size: 12px;
    border: 1px solid #e2e2e2;
    border-top: none;

    :deep(.item) {
      padding: 10px;

      &:nth-child(even) {
        background-color: #f7f7f7;
      }

      .name {
        color: #888;
        .text-ellipies(1);
      }

      .source {
        color: #999;
      }
    }
  }
}

.station-category {
  padding: 0 40px 40px;

  :deep(.info) {
    padding-left: 20px;
  }

  .name {
    color: #333;
    font-size: 18px;
    font-weight: 700;
  }

  .source {
    color: #999;
    font-size: 12px;
  }

  .layout-category {
    margin-bottom: 20px;
    justify-content: space-between;

    a {
      .hover-underline;
    }

    :deep(.item) {
      padding: 20px 0;
      width: 49%;

      &:nth-child(1),
      &:nth-child(2) {
        border-bottom: 1px solid #ccc;
        border-width: 99%;
      }
    }
  }
}
</style>
