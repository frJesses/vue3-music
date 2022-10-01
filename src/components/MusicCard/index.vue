<template>
  <div v-if="list">
    <li v-for="item in cardlist" :key="item">{{item}}</li>
    {{list}}
  </div>
</template>

<script setup>
const { ref, watch } = require('@vue/runtime-core')

const props = defineProps({
  list: Array
})
console.log(props)
const cardlist = ref(null)
watch(() => props.list, (newval, oldval) => {
  console.log(cardlist)
  console.log(newval)
  console.log(oldval)
})
// cardlist.value = ref(props.list.slice(0, 6))
// console.log(props.list.slice(0, 6))

</script>

<style lang="less" scoped>

</style>
