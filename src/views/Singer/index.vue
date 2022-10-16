<script setup>
import { onMounted, ref } from 'vue'
import { getSingerCategoryList, getSingerNavList } from '@/servies/Singer'
import SectionHeader from '@/components/SectionHeader'
import useSinger from '@/store/singer'
// import { computed } from '@vue/reactivity'
const singerStore = useSinger()
const singerNav = ref([])
const singerList = ref([])
onMounted(() => {
  getSingerCategoryList().then(res => {
    singerList.value = res.artists
  })
  singerNav.value = getSingerNavList()
})
console.log(singerList, 'singerList')
// 动态获取标题
// const singerTitle = computed(() => {

// })
</script>

<template>
  <div class="singer-wrapper wrapper">
    <div class="left">
      <div class="left-nav" v-for="item in singerNav" :key="item.title">
        <h2 class="left-title">{{item.title}}</h2>
        <ul v-for="list in item.data" :key="list.id" class="left-item">
          <li :class="{'active': singerStore.leftNavCurrent === list.id}" @click="singerStore.changeLeftNav(list.id)">{{list.name}}</li>
        </ul>
      </div>
    </div>
    <div class="right wrapper">
      <SectionHeader :title="123" />
    </div>
  </div>
</template>

<style lang="less" scoped>
  .singer-wrapper {
    display: flex;
    padding: 0;
    .left {
      width: 180px;
      padding: 40px 10px 0;
      .left-nav {
        border-bottom: 1px solid #d3d3d3;
        padding: 10px 0;
        &:last-child {
          border-bottom: none;
        }
        .left-title {
          font-size: 16px;
          padding: 10px 0;
        }
        .left-item {
          li {
            line-height: 29px;
            padding-left: 20px;
            border: 1px solid transparent;
            cursor: pointer;
            &.active {
              color: #9b0909;
              border-color: #d3d3d3;
            }
          }
        }
      }
    }
    .right {
      flex: 1;
      border-right: none;
    }
  }
</style>
