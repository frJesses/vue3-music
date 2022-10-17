<template>
      <div class="recm-header">
      <router-link class="title" :to="path">{{title}}</router-link>
      <div class="recm_nav" v-if="navs.length !== 0">
        <router-link :to="item.path" v-for="item in navs" :key="item">{{item.title}}</router-link>
      </div>
      <span class="more">
        <router-link :to="path">更多<el-icon color="#C10D0C"><CaretRight /></el-icon></router-link>
      </span>
    </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: '标题'
  },
  path: {
    type: String
  },
  navs: {
    type: Array,
    default: () => []
  }
})
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
