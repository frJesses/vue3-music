<template>
  <div class="cd_banner">
    <swiper
    :speed="1000"
    :navigation="true"
    :loop="true"
    :modules="modules"
    :slidesPerGroup="showslide"
    :slides-per-view="showslide"
    :space-between="11"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide v-for="item in lists" :key="item">
      <AlbumItem
      :label ="item.name"
      :cover ="item.picUrl"
      :albumId="item.id"
      :authorId="item.artist.id"
      :author="item.artist.name"
      ></AlbumItem>
    </swiper-slide>
  </swiper>
  </div>
</template>

<script setup>
import AlbumItem from '@/components/AlbumItem'
import 'swiper/less'
import 'swiper/less/navigation'
import 'swiper/less/pagination'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper'
import { getNewCd } from '@/servies/Home/index'
const { onMounted, ref } = require('@vue/runtime-core')
const modules = [Navigation]
// cd轮播一屏显示的数量
const showslide = 5
const lists = ref(null)
onMounted(async() => {
  const res = (await getNewCd()).albums
  lists.value = res
  // console.log(res)
})
const onSwiper = (swiper) => {
  console.log(swiper)
}
const onSlideChange = () => {
  console.log('slide change')
}
</script>

<style lang="less" scoped>
.cd_banner{
  padding: 20px;
  background-color: #F5F5F5;
  border: 1px solid #d3d3d3;
  .swiper{
    overflow:hidden;
    height: 180px;
    :deep(.swiper-button-prev){
      // left: 0 !important;
    }
  }
}
</style>
