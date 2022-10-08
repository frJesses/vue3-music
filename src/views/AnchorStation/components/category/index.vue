<template>
  <div class="wrapper radio-category">
    <SeactionHeader :title="'优秀新电台'" :more="''" class="category-header"/>
    <MusicItem :list="station.goodRadio" :total="5" :maskVisible="false" @imgClick="imgClick">
      <template v-slot="{item}">
        <router-link class="title" :to="`/djradio?id=${item.id}`">{{item.name}}</router-link>
        <div class="rcmd-text">{{item.rcmdtext}}</div>
      </template>
    </MusicItem>
    <SeactionHeader :title="'电台排行榜'" class="category-header">
      <template #right>
        <a class="order" @click="radioRank(1)" :class="{'active': order == 1}">上升最快</a>
        <span class="split">|</span>
        <a class="order" @click="radioRank(0)" :class="{'active': order == 0}">最热电台</a>
      </template>
    </SeactionHeader>
    <LayoutWrapper>

    </LayoutWrapper>
  </div>
</template>

<script setup>
import SeactionHeader from '@/components/SectionHeader'
import MusicItem from '@/components/MusicItem'
import LayoutWrapper from '@/components/LayoutWrapper'
import { useRouterInfo } from '@/hooks/useRouterInfo'
import useStore from '@/store'
import { ref } from 'vue'
const { station } = useStore()
const { router, route } = useRouterInfo()
const order = ref(route.query.order || 1)
// 优秀电台图片点击事件
const imgClick = (item) => {
  router.push(`/djradio?id=${item.id}`)
}
// 上升最快和最热电台点击事件
function radioRank(type) {
  const { id } = route.query
  order.value = type
  router.push(`/discover/djradio/category?id=${id}&order=${type}`)
}
</script>

<style lang="less" scoped>
  .radio-category {
    .category-header {
      :deep(.title) {
        cursor: crosshair;
        &:hover {
          text-decoration: auto;
        }
      }
      .split {
        margin: 0 10px;
      }
      .order {
        color: #666;
        &.active {
          color: #c20c0c;
        }
      }
    }
    .title {
      padding: 10px 0;
      display: block;
      font-size: 14px;
      color: #333;
    }
    .rcmd-text {
      color: #999;
    }
  }
</style>
