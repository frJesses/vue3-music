<template>
  <div class="music-list" v-if="list?.length">
    <div class="item" v-for="item in lists" :key="item">
      <div class="cover">
        <div class="bg"></div>
        <img :src="item.coverImgUrl || item.picUrl" alt="">
        <div class="mask">
          <el-icon class="listen">
            <Service />
          </el-icon>
          <span class="count">{{$filters.formatPlayCount(item.playCount)}}</span>
          <el-icon class="play">
            <VideoPlay />
          </el-icon>
        </div>
      </div>
      <div class="info">
        <slot :item="item">
          <div class="title">{{item.name}}</div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup>
const { onMounted, watch, ref } = require('@vue/runtime-core')

const props = defineProps({
  list: { // 数据列表
    type: Array,
    default: () => []
  },
  total: { // 每行展示多少条数据
    type: Number,
    default: 4
  },
  visible: { // mask是否展示
    type: Boolean,
    default: true
  },
  num: { // 显示总记录数
    type: Number,
    default: 30
  }
})
const lists = ref('')
onMounted(() => {
  // lists.value = props.list._rawValue
  console.log(props.list)
})
watch(props, (newval, oldval) => {
  lists.value = newval.list
  lists.value = lists.value.slice(0, props.num)
  console.log(lists.value)
})
</script>

<style lang="less" scoped>
@import "@/assets/css/common.less";

.music-list {
  display: flex;
  justify-content: space-between;
  margin-left: -30px;
  margin-top: 20px;
  flex-wrap: wrap;

  .item {
    width: calc(100% / v-bind(total));
    padding: 0 0 30px 30px;

    .cover {
      position: relative;
      overflow: hidden;
      cursor: pointer;

      img {
        display: block;
        object-fit: cover;
        width: 100%;
        height: 100%;
      }

      .mask {
        display: flex;
        align-items: center;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, .4);
        color: #fff;
        font-size: 12px;
        height: 27px;
        padding: 0 10px;

        .count {
          flex: 1;
          margin-left: 6px;
        }

        .play {
          font-size: 18px;
          color: #bbb;

          &:hover {
            color: #fff;
          }
        }
        .listen {
          font-size: 14px;
        }
      }

      .bg {
        position: absolute;
        width: 200%;
        height: 200%;
        background: rgba(255, 255, 255, .3);
        transform: translate(-68%, -52%) rotate(45deg);
      }
    }

    .info {
      .title {
        .text-ellipies(1);
        margin-top: 10px;
        cursor: pointer;
      }
    }
  }
}
</style>
