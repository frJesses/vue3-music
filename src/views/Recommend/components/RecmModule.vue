<template>
  <div class="recm-wrapper">
    <div class="recm-header">
      <router-link class="title" :to="title.path">{{title.title}}</router-link>
      <div class="recm_nav">
        <router-link :to="item.path" v-for="item in navs" :key="item">{{item.title}}</router-link>
      </div>
      <span class="more">
        <router-link :to="more">更多<el-icon color="#C10D0C"><CaretRight /></el-icon></router-link>
      </span>
    </div>
    <div class="recm-content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
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
.recm-header > *{
  float: left;
}
.recm-header{
  display: flow-root;
  line-height: 33px ;
  border-bottom: 2px solid #C10D0C;
  .title{
    margin-right: 10px;
    font-size: 20px;
  }
  a{
    &:hover{
      text-decoration: underline;
    }
  }
}
.recm-wrapper{
  .recm_nav{
    font-size: 12px;
    color: #666666;
    a{
      padding:0 10px;
      border-right: 1px solid #CCCCCC;
    }
  }
  .more{
    float: right;
     font-size: 12px;
     color: #666666;
  }
}
</style>
