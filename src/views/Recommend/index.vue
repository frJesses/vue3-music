<template>
  <div>
    <Banner/>
    <div class="recm-wrapper wrapper">
      <RecmModule class="recm-left" v-if="PersonList?.length">
          <template #nav>
            <RecmNav
            :title="title.title"
            :path ="title.path"
            :navs ="navs"
            :more ="more"
            ></RecmNav>
          </template>
          <template #content>
            <MusicItem :list="PersonList?.slice(0, 8)" :total="4"></MusicItem>
          </template>
      </RecmModule>
      <RecmModule>
          <template #nav>
            <RecmNav
            title="新碟上架"
            path ="/discover/album"
            ></RecmNav>
          </template>
          <template #content>
            <NewCd></NewCd>
          </template>
      </RecmModule>
      <RecmModule class="lists">
          <template #nav>
            <RecmNav
            title="榜单"
            path ="/discover/toplist"
            ></RecmNav>
          </template>
          <template #content >
            <RecmList :id="19723756"></RecmList>
            <RecmList :id="3779629"></RecmList>
            <RecmList :id="2884035"></RecmList>
          </template>
      </RecmModule>
      <div class="recm-right">
        <RecmAside title="入驻歌手" more="/discover/artist/signed"></RecmAside>
      </div>
    </div>
  </div>
</template>

<script setup>
import Banner from './components/Banner'
import RecmModule from './components/RecmModule'
import MusicItem from '@/components/MusicItem'
import RecmNav from './components/RecmNav.vue'
import NewCd from './components/NewCd'
import RecmAside from './components/RecmAside.vue'
import RecmList from './components/RecmList.vue'
import { getPersonalized } from '@/servies/Personalized'
import { onMounted, ref } from '@vue/runtime-core'
const PersonList = ref(null)
onMounted(async() => {
  const res = (await getPersonalized()).result
  PersonList.value = res
  // const lists = (await getList())
  // console.log(lists)
})
const title = {
  path: '/discover/playlist',
  title: '热门推荐'
}
const navs = [
  { path: '/discover/playlist/?cat=华语', title: '华语' },
  { path: '/discover/playlist/?cat=流行', title: '流行' },
  { path: '/discover/playlist/?cat=摇滚', title: '摇滚' },
  { path: '/discover/playlist/?cat=民谣', title: '民谣' },
  { path: '/discover/playlist/?cat=电子', title: '电子' }
]
const more = '/discover/playlist'
</script>

<style lang="less" scoped>
.wrapper{
  padding: 20px 270px 20px 20px;
  position: relative;
  .recm-right{
    width: 250px;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    border-left: 1px solid #d3d3d3;
  }
}
</style>
