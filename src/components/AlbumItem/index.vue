<template>
  <div class="Album">
    <router-link class="cover" :to="albumPath+albumId">
      <img :src="cover">
    </router-link>
    <router-link class="des" :to="albumPath+albumId">{{label}}</router-link>
    <router-link class="author" :to="artistPath+authorId">{{author}}</router-link>
  </div>
</template>

<script setup>
const albumPath = '/album?id='
const artistPath = '/artist?id='
defineProps({
  // 专辑id
  albumId: {
    type: Number
  },
  // 作者id
  authorId: {
    type: Number
  },
  // 封面地址
  cover: {
    type: String
  },
  // 专辑描述
  label: {
    type: String
  },
  // 作者名字
  author: {
    type: String
  }
})
// console.log(props)
</script>

<style lang="less" scoped>
.Album{
  display: flex;
  flex-direction: column;
  .cover{
    box-shadow: 0px 7px 5px 1px rgba(0, 0, 0, 0.3);
  }
  img{
    width: 100%;
  }
  a{
    font-size: 12px;
    margin-top: 10px;
    &:hover{
      text-decoration: underline;
    }
  }
  .author{
    color: #666666;
  }
  .des{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
