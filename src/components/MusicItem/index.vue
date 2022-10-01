<template>
  <div class="music-list">
    <div class="item" v-for="item in list" :key="item.id">
      <div class="cover">
        <div class="bg"></div>
        <img :src="item.coverImgUrl" alt="">
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
defineProps({
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
  }
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
        transform: rotate(43deg);
        transform: translate(-155px, -220px) rotate(45deg);
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
