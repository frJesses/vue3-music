<template>
  <el-pagination background layout="prev, pager, next" :prev-text="prevText" :next-text="nextText"
    :total="total" @current-change="currentPageChange" :hide-on-single-page="total == 0" />
</template>

<script setup>
defineProps({
  total: {
    type: Number,
    default: 0
  },
  currentPageChange: {
    type: Function,
    default: () => { }
  },
  prevText: {
    type: String,
    default: '上一页'
  },
  nextText: {
    type: String,
    default: '下一页'
  }
})
</script>

<style lang="less">
.el-pagination {
  display: flex;
  justify-content: center;
  .btn-prev,
  .btn-next {
    padding: 0 10px !important;
  }
}
</style>
