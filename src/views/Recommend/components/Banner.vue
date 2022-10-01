<template>
 <div ref="bg">
    <el-carousel  class="banner" trigger="click" height="286px" v-if="BannerList" @change="changeBg">
      <el-carousel-item v-for="item in BannerList" :key="item">
        <!-- <router-link :to="item.url"> -->
          <img  :src="item.imageUrl" alt="">
        <!-- </router-link> -->
      </el-carousel-item>
    </el-carousel>
 </div>
</template>

<script setup>
import { getBannerList } from '@/servies/Banner'
// import { getPersonalized } from '@/servies/Test'
import { onMounted, ref } from '@vue/runtime-core'
const BannerList = ref(null)
const bg = ref(null)
onMounted(async() => {
  const res = await getBannerList()
  BannerList.value = res.banners
  console.log(BannerList)
  changeBg(0)
})
function changeBg(val) {
  const img = BannerList.value[val].imageUrl
  const bgcolor = bg.value
  bgcolor.style = `
  background-image: url("${img}?imageView&blur=40x20"); background-size: 6000px; background-position: center center;
  `
  // bgcolor.style.background = `url(\"${img}?imageView&blur=40x20\")`
  // bgcolor.style.backgroundSize = '6000px'
  // bgcolor.style.backgroundPosition = 'center center'
}
</script>

<style lang="less" scoped>
.banner{
//  height: 286px !important;
 width: 980px;
 margin: 0 auto;
 img {
   height: 100%;
 }
}

</style>
