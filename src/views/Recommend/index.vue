<template>
  <div>
    <Banner/>
    <RecmModule >
      <MusicCard :list="PersonList"></MusicCard>
    </RecmModule>
  </div>
</template>

<script setup>
import Banner from './components/Banner'
import RecmModule from './components/RecmModule'
import MusicCard from '@/components/MusicCard'
import { getPersonalized } from '@/servies/Personalized'
import { onMounted, ref } from '@vue/runtime-core'
const PersonList = ref(null)
onMounted(async() => {
  const res = (await getPersonalized()).result
  PersonList.value = ref(res)
  console.log(PersonList.value)
})
</script>

<style>

</style>
