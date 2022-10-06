<script setup>
import SeationHeader from '@/components/SectionHeader'
import LayoutWrapper from '@/components/LayoutWrapper'
import SortItem from '@/components/SortItem'
import { getRadioType, getRadioRecommend, getRadioRankData, getRadioTypeData } from '@/servies/AnchorStation'
import { onMounted, reactive, ref, watch } from 'vue'
import { useRouterInfo } from '@/hooks/useRouterInfo'
const { route } = useRouterInfo()

const currentIndex = ref(null)
// 定义数组，存储类型
const typeArr = reactive([
  { type: 2, name: '音乐推荐' },
  { type: 6, name: '生活' },
  { type: 3, name: '情感' },
  { type: 2001, name: '创作翻唱' },
  { type: 11, name: '知识' }
])
// 电台类别
const radioType = ref([])
const radioRecommendList = ref([])
const radioRankList = ref([])
const radioTypeData = ref([])
onMounted(() => {
  // 获取电台类别
  getRadioType().then(res => {
    const showCount = 18
    const length = Math.ceil(res.categories.length / showCount)
    for (let index = 0; index < length; index++) {
      const start = index * showCount
      const end = start + showCount
      radioType.value.push(res.categories.slice(start, end))
    }
  })
  // 获取推荐节目
  getRadioRecommend().then(res => {
    radioRecommendList.value = res.programs
  })
  // 获取节目排行榜数据
  getRadioRankData().then(res => {
    res.toplist.map(item => {
      item.coverUrl = item.program.coverUrl
      return item
    })
    radioRankList.value = res.toplist
  })
  // 获取推荐类型的数据(2-音乐推荐 6-生活 3-情感 2001-创作翻唱 11-知识)
  typeArr.forEach(item => {
    getRadioTypeData(item.type).then(res => {
      const obj = {
        title: item.name,
        data: res.djRadios.slice(0, 4)
      }
      radioTypeData.value.push(obj)
    })
  })
})
// 监听路由信息是否改变
watch(route, (newVal, oldVal) => {
  currentIndex.value = newVal.query.id
}, {
  immediate: true,
  deep: true
})
console.log(radioTypeData, 'radioTypeData')
</script>

<template>
  <div class="anchor-station-wrapper">
    <el-carousel class="wrapper" height="194px" trigger="click" arrow="always" :autoplay="false"
      v-if="radioType.length">
      <el-carousel-item v-for="item, index in radioType" :key="index" class="scroll-item">
        <router-link v-for="types in item" :key="types.id"
          :class="{'active-radio': currentIndex == types.id, 'radio-type': true}"
          :to="`/discover/djradio/category?id=${types.id}`">
          <span class="icon" :style="`background: url(${types.picWebUrl});`"></span>
          <span class="name">{{types.name}}</span>
        </router-link>
      </el-carousel-item>
    </el-carousel>
    <div class="station-list wrapper">
      <div class="left">
        <SeationHeader :title="'推荐节目'"></SeationHeader>
        <LayoutWrapper :list="radioRecommendList.slice(0, 10)" :tagWidth="'80px'" class="layout-wrapper">
          <template v-slot:info="{item}">
            <router-link class="name" :to="`/program?id=${item.id}`">{{item.name}}</router-link>
            <router-link class="source" :to="`/djradio?id=${item.id}`">{{item.dj.brand}}</router-link>
          </template>
          <template v-slot:tag="{item}">
            <router-link class="tag" :to="`/discover/djradio/category?id=${item.radio.categoryId}`">
              {{item.radio.category}}</router-link>
          </template>
        </LayoutWrapper>
      </div>
      <div class="right">
        <SeationHeader :title="'节目排行榜'"></SeationHeader>
        <LayoutWrapper :list="radioRankList.slice(0, 10)" class="layout-wrapper">
          <template v-slot:info="{item}">
            <router-link class="name" :to="`/program?id=${item.id}`">{{item.program.name}}</router-link>
            <router-link class="source" :to="`/djradio?id=${item.id}`">{{item.program.radio.name}}</router-link>
          </template>
          <template v-slot:sort="{item, index}">
            <SortItem :index="index" :diff="(item.lastRank - item.rank)" class="layout-sort"></SortItem>
          </template>
        </LayoutWrapper>
      </div>
    </div>
    <div class="station-category wrapper">
      <template v-for="item in radioTypeData" :key="item.title">
        <SeationHeader :title="item.title + ' · 电台'"></SeationHeader>
        <LayoutWrapper :list="item.data" :imgWidth="120" :lineCount="2" :imgUrlField="'picUrl'" class="layout-category">
          <template v-slot:info="{item}">
            <router-link class="name" :to="`/djradio?id=${item.id}`">{{item.name}}</router-link>
            <span class="source">{{item.rcmdtext}}</span>
          </template>
        </LayoutWrapper>
      </template>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import "@/assets/css/common.less";

.anchor-station-wrapper {
  .scroll-item {
    display: flex;
    flex-wrap: wrap;
    margin-left: -19px;

    .radio-type {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 0 25px 29px;
      width: 70px;
      height: 70px;
      border: 2px solid transparent;

      &.active-radio {
        border: 2px solid #d35757;
        border-radius: 6px;

        >.icon {
          background-position: -48px 0 !important;
        }

        >.name {
          color: #d35757;
        }
      }

      .icon {
        display: block;
        width: 48px;
        height: 48px;
      }

      .name {
        font-size: 12px;
        color: #888;
      }
    }
  }

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
}

.el-carousel--horizontal {
  padding: 40px 40px 0;

  :deep(.el-carousel__arrow--left) {
    left: -20px !important;
  }

  :deep(.el-carousel__arrow--right) {
    right: -12px;
  }

  :deep(.el-carousel__indicators--horizontal) {
    display: none;
  }
}
</style>
