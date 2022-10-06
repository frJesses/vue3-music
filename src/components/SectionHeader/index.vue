<template>
  <div class="section-header">
    <div class="header-left">
      <slot name="left">
        <h3 class="title" @click="showDetailInfo">{{title}}</h3>
      </slot>
    </div>
    <div class="header-right">
      <slot name="right">
        <span v-if="more" class="more" @click="showDetailInfo">{{more}}<el-icon>
            <ArrowRight />
          </el-icon></span>
      </slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: '默认标题'
  },
  more: {
    type: String,
    default: '更多'
  },
  showDetailInfo: {
    type: Function,
    default: () => { }
  }
})
</script>

<style lang="less" scoped>
@import "@/assets/css/common.less";

.section-header {
  height: 42px;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #c20c0c;
  align-items: center;

  .title {
    font-weight: normal;
    font-size: 24px;
    margin-right: 10px;
    cursor: pointer;
    .hover-underline;
  }

  .more {
    color: #666;
    font-size: 14px;
    display: flex;
    align-items: center;
    cursor: pointer;
    .hover-underline;
  }
}
</style>
