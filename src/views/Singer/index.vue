<template>
  <div class="singer-wrapper wrapper">
    <div class="left">left</div>
    <div class="right wrapper">
      right
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { getSingerCategoryList, getHotSinger, getSingerNavList } from '@/servies/singer'
const singerNav = ref([])
onMounted(() => {
  getSingerCategoryList().then(res => {
    console.log(res, 'getSingerCategoryList')
  })
  getHotSinger().then(res => {
    console.log(res, 'getHotSinger')
  })
  singerNav.value = getSingerNavList()
})
</script>

<style lang="less" scoped>
  .singer-wrapper {
    display: flex;
    padding: 0;
    .left {
      width: 180px;
    }
    .right {
      flex: 1;
      border-right: none;
    }
  }
</style>
