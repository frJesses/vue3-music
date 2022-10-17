<template>
  <div class="letter-wrapper">
    <template v-for="item in letterArr" :key="item.title">
      <router-link class="letter-item" :class="{'letter-active': singerStore.letterIndex == item.data}"
        :to="`/discover/artist?type=${route.query.type || -1}&area=${route.query.area || -1}&initial=${item.data}`"
        @click="singerStore.changeLetter(item.data, route)">{{item.title}}</router-link>
    </template>
  </div>
</template>

<script setup>
import useSinger from '@/store/singer'
import { useRoute } from 'vue-router'
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const letterArr = []
for (const key of letters) {
  const obj = {}
  obj.title = key
  obj.data = key.toLowerCase()
  letterArr.push(obj)
}
letterArr.unshift({ title: '热门', data: -1 })
letterArr.push({ title: '其他', data: 0 })
const singerStore = useSinger()
const route = useRoute()
</script>

<style lang="less" scoped>
.letter-wrapper {
  padding: 20px 0 0 0;
  display: flex;

  .letter-item {
    width: 21px;
    line-height: 24px;
    margin-left: 3px;
    font-size: 14px;
    text-align: center;

    &:first-child,
    &:last-child {
      width: 45px;
    }

    &.letter-active {
      background: #c20c0c;
      border-radius: 2px;
      color: #fff;
    }
  }
}
</style>
