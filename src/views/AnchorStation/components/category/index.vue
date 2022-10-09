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
    <LayoutWrapper
      :list="station.rankList.djRadios"
      :imgUrlField="'picUrl'"
      :imgWidth="120"
      :lineCount="2"
      :showPlayIcon="false"
      @imgClick="imgClick"
      class="category-layout"
    >
      <template v-slot:info="{item}">
        <h3 class="title"><router-link :to="`/djradio?id=${item.id}`">{{item.name}}</router-link></h3>
        <div class="user">
          <el-icon class="user-icon"><User /></el-icon>
          <router-link :to="`/user/home?id=${item.dj.userId}`" class="nick-name">{{item.dj.nickname}}</router-link>
          <img :src="item.dj.avatarDetail?.identityIcon" alt="">
        </div>
        <div class="count">
          <span class="count-total">共{{item.programCount}}期</span>
          <span class="count-total">订阅{{item.subCount}}次</span>
        </div>
      </template>
    </LayoutWrapper>
    <Pagination :total="station.rankList.count" :pageSize="22" @currentPageChange="currentPageChange"/>
  </div>
</template>

<script setup>
import SeactionHeader from '@/components/SectionHeader'
import MusicItem from '@/components/MusicItem'
import LayoutWrapper from '@/components/LayoutWrapper'
import Pagination from '@/components/Pagination'
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
// 分页
function currentPageChange(index) {
  const limit = 20
  const offset = (index - 1) * limit
  station.getRadioRankList(route.query.id, limit, offset)
  document.documentElement.scrollTop = 700
}
</script>

<style lang="less" scoped>
@import "@/assets/css/common.less";
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
    .category-layout {
      justify-content: space-between;
      margin-bottom: 15px;
      :deep(.item) {
        width: 49%;
        border-bottom: 1px solid #e7e7e7;
        padding: 20px 0;
      }
      .title {
        font-size: 18px;
        .text-ellipies(1);
        .hover-underline;
      }
      .user {
        display: flex;
        align-items: center;
        .user-icon {
          font-size: 18px;
          color: #999;
        }
        .nick-name {
          margin-left: 10px;
          .hover-underline;
        }
      }
      .count {
        color: #999;
        .count-total {
          margin-right: 10px;
        }
      }
    }
  }
</style>
