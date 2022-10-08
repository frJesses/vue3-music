<template>
  <div class="aside">
    <div class="header">
      <h3>{{title}}</h3>
      <router-link :to="more" v-if="more">查看全部></router-link>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String
  },
  more: {
    type: String,
    default: null
  },
  list: {
    type: Array,
    default: () => []
  }
})
</script>

<style lang="less" scoped>
.aside{
  padding: 20px;
}
.header{
  display: flex;
  justify-content: space-between;
}
</style>
