<template>
  <div class="line-wrapper">
    <div class="item" v-for="(item, index) in list" :key="item.id">
      <slot :item="item" name="sort" :index="index"></slot>
      <div class="cover">
        <img :src="item[imgUrlField]" :style="{width: imgWidth + 'px', height: imgWidth + 'px'}" alt="" />
        <el-icon v-if="showPlayIcon" class="play"><VideoPlay /></el-icon>
      </div>
      <div class="info">
        <slot :item="item" name="info"></slot>
      </div>
      <div class="tag"><slot :item="item" name="tag"></slot></div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  list: { // 列表数据
    type: Array,
    default: () => []
  },
  imgUrlField: { // 图片字段,图片可能在深层下面
    type: String,
    default: 'coverUrl'
  },
  imgWidth: { // 图片宽度
    type: Number,
    default: 40
  },
  lineCount: { // 每列展示多少条数据
    type: Number,
    default: 1
  },
  tagWidth: { // 右边宽度
    type: String,
    default: '0px'
  },
  showPlayIcon: { // 是否展示播放图标
    type: Boolean,
    default: true
  }
})
</script>

<style lang="less" scoped>
.line-wrapper {
  display: flex;
  flex-wrap: wrap;

  .item {
    display: flex;
    align-items: center;
    width: calc(100% / v-bind(lineCount));
    padding: 10px 0;
    &:hover {
      .cover > .play {
        opacity: 1;
      }
    }

    .cover {
      margin-right: 10px;
      cursor: pointer;
      position: relative;
      .play {
        font-size: 24px;
        position: absolute;
        left: 50%;
        top: 50%;
        color: #ccc;
        transform: translate(-50%, -50%);
        opacity: 0;
        transition: opacity ease .3s;
        &:hover {
          opacity: 1;
          color: #fff;
        }
      }
    }

    .info {
      display: flex;
      flex-direction: column;
      height: 100%;
      justify-content: space-evenly;
      flex: 1;
      padding-right: 10px;
    }
    .tag {
      width: v-bind(tagWidth);
    }
  }
}
</style>
