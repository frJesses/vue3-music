<template>
  <div class="wrapper anchor-station-wrapper">1323</div>
</template>

<script setup>
import { getRadioType, getRadioRecommend, getRadioRankData, getRadioTypeData } from '@/servies/AnchorStation'
import { onMounted, reactive, ref } from 'vue'

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
    radioType.value = res.categories
  })
  // 获取推荐节目
  getRadioRecommend().then(res => {
    radioRecommendList.value = res.programs
  })
  // 获取节目排行榜数据
  getRadioRankData().then(res => {
    radioRankList.value = res.toplist
  })
  // 获取推荐类型的数据(2-音乐推荐 6-生活 3-情感 2001-创作翻唱 11-知识)
  typeArr.forEach(item => {
    getRadioTypeData(item.type).then(res => {
      const obj = {
        title: item.name,
        data: res.djRadios
      }
      radioTypeData.value.push(obj)
    })
  })
})
</script>

<style lang="less" scoped>

</style>
