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
  console.log(res, 'res')
  PersonList.value = res
  console.log(Array.isArray(PersonList))
})
</script>

<style>

</style>
