<template>
  <el-pagination
    background
    layout="prev, pager, next"
    :prev-text="prevText"
    :next-text="nextText"
    :total="total"
    @current-change="currentPageChange"
    :hide-on-single-page="total == 0"
    :page-size="pageSize"
  />
</template>

<script setup>
const emit = defineEmits(['currentPageChange'])
defineProps({
  total: {
    type: Number,
    default: 0
  },
  prevText: {
    type: String,
    default: '上一页'
  },
  nextText: {
    type: String,
    default: '下一页'
  },
  pageSize: {
    type: Number,
    default: 50
  }
})
function currentPageChange(index) {
  emit('currentPageChange', index)
}
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
