<template>
  <el-carousel class="banner" trigger="click" height="286px" v-if="BannerList">
      <el-carousel-item v-for="item in BannerList" :key="item">
        <!-- <router-link :to="item.url"> -->
          <img  :src="item.imageUrl" alt="">
        <!-- </router-link> -->
      </el-carousel-item>
    </el-carousel>
</template>

<script setup>
import { getBannerList } from '@/servies/Banner'
import { onMounted, ref } from '@vue/runtime-core'
const BannerList = ref(null)
onMounted(async() => {
  const res = await getBannerList()
  // console.log(res)
  // res.banners.forEach(item => {
  //   if (!item.url) return
  //   const path = (item.url).split('/')
  //   console.log(path)
  //   // item.url = path[path.length]
  // })
  BannerList.value = res.banners
})
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
