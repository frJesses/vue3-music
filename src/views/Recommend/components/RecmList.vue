<template>
  <div class="list" v-if="songs">
    <div class="top">
      <router-link :to="`/discover/toplist?id=${id}`">
        <img :src="playlist.coverImgUrl" alt="">
      </router-link>
      <router-link class="label" :to="`/discover/toplist?id=${id}`">{{playlist.name}}</router-link>
    </div>
    <ul class="songs">
      <li v-for="(item,index) in songs?.slice(0,10)"  :key="item">
        <span class="no">{{index+1}}</span>
        <router-link :to="`/songs?id=${item.id}`">
          {{item.name}}
        </router-link>
      </li>
      <li class="more">
        <router-link  :to="`/discover/toplist?id=${id}`">查看全部></router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  id: {
    type: Number
  }
})
import { getSongList, getPlayList } from '@/servies/Home'
import { onMounted, ref } from '@vue/runtime-core'
const playlist = ref(null)
const songs = ref(null)
onMounted(async() => {
  playlist.value = (await getPlayList(props.id)).playlist
  songs.value = (await getSongList(props.id)).songs
  // console.log(playlist)
  // console.log(songs)
})
</script>

<style lang="less" scoped>
.list{
  float: left;
  border: 1px solid #ccc;
  background-color: #F4F4F4;
  width: 228px;
  img{
    width: 80px;
    box-shadow: 0px 10px 5px 0px rgba(0, 0, 0, .35);
  }
  .top{
    padding: 20px 0 20px 19px;
    display: flex;
    align-items: flex-start;
    .label{
      font-size: 14px;
      margin: 6px 0 0 10px;
      font-weight: bold;
    }
  }
  .songs{
    .more{
      justify-content: flex-end;
      a{
        flex-grow:unset !important;
      }
    }
    li{
      padding: 0 15px 0 19px;
      line-height: 32px;
      overflow: hidden;
      display: flex;
      .no{
        flex-shrink: 0;
        width: 35px;
        text-align: center;
      }
    }
    a{
      text-overflow: ellipsis;
      font-size: 12px;
      white-space: nowrap;
      overflow: hidden;
      flex-grow: 1;
      &:hover{
        text-decoration: underline;
      }
    }

    li:nth-child(odd){
      background-color: #E8E8E8;
    }
    li:nth-child(1) .no,
    li:nth-child(2) .no,
    li:nth-child(3) .no{
             color: #c10d0c;
    }
  }
}
</style>
