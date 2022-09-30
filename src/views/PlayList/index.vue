<template>
  <div class="wrapper play-list">
    <SectionHeader>
      <template #left>
        <div class="seaction-left">
          <h3 class="title">全部</h3>
          <el-button plain>
            选择分类<el-icon>
              <ArrowDown />
            </el-icon>
          </el-button>
        </div>
      </template>
      <template #right>
        <el-button color="#C20C0C" size="small" type="danger">热门</el-button>
      </template>
    </SectionHeader>
    <MusicItem />
  </div>
</template>

<script setup>
import SectionHeader from '@/components/SectionHeader'
import MusicItem from '@/components/MusicItem'
import { onMounted, ref } from 'vue'
import { getPlayListTag } from '@/servies/PlayList'

// 获取歌单tag
const tagList = ref(null)
onMounted(async() => {
  const { categories, sub } = await getPlayListTag()
  // 处理数据，进行拼接
  const obj = {}
  Object.keys(categories).forEach(item => {
    obj[categories[item]] = []
    sub.forEach(list => {
      if (item == list.category) {
        obj[categories[item]].push(list)
      }
    })
  })
  tagList.value = obj
})
console.log(tagList, 'tagList')
</script>

<style lang="less" scoped>
.play-list {
  .seaction-left {
    display: flex;

    h3 {
      font-weight: normal;
      font-size: 24px;

      &.title {
        margin-right: 10px;
      }
    }
  }
}
</style>
