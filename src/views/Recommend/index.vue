<template>
  <div>
    <Banner/>
    <RecmModule >
      <MusicItem :list="PersonList" :total="5"></MusicItem>
    </RecmModule>
  </div>
</template>

<script setup>
import Banner from './components/Banner'
import RecmModule from './components/RecmModule'
import MusicItem from '@/components/MusicItem'
import { getPersonalized } from '@/servies/Personalized'
import { onMounted, ref } from '@vue/runtime-core'
const PersonList = ref(null)
onMounted(async() => {
  const res = (await getPersonalized()).result
  PersonList.value = res
})
</script>

<style>

</style>
