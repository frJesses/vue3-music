<template>
  <div class="music-list">
    <div class="item">
      <div class="cover">
        <img src="https://p2.music.126.net/4hCpqWeNupK-7KbawyB-3w==/109951167330131366.jpg?param=140y140" alt="">
      </div>
      <div class="info">
        <div class="title">12345</div>
        <div class="author">4555</div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  list: Array, // 数据列表
  total: Number // 每行展示条数
})
console.log(props)
</script>

<style lang="less" scoped>
.music-list {
  display: flex;
  justify-content: space-between;
  margin-left: -30px;
  margin-top: 20px;

  .item {
    width: calc(100% / v-bind(total));
    padding: 0 0 30px 30px;

    .cover {
      position: relative;
      overflow: hidden;
      width: 140px;
      height: 140px;

      img {
        display: block;
        object-fit: cover;
      }
    }

    .info {}
  }
}
</style>
