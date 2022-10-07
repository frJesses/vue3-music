<script setup>
import { getRadioType } from '@/servies/AnchorStation'
import { onMounted, ref, watch } from 'vue'
import { useRouterInfo } from '@/hooks/useRouterInfo'
const { route } = useRouterInfo()

const currentIndex = ref(null)
// 电台类别
const isShow = ref(true)
const radioType = ref([])
onMounted(() => {
  // 获取电台类别
  getRadioType().then(res => {
    const showCount = 18
    const length = Math.ceil(res.categories.length / showCount)
    for (let index = 0; index < length; index++) {
      const start = index * showCount
      const end = start + showCount
      radioType.value.push(res.categories.slice(start, end))
    }
  })
})
// 监听路由信息是否改变
watch(route, (newVal, _) => {
  currentIndex.value = newVal.query.id
  isShow.value = !/(recommend|rank)/.test(newVal.path)
}, {
  immediate: true,
  deep: true
})
</script>

<template>
  <div class="anchor-station-wrapper">
    <el-carousel class="wrapper" height="194px" trigger="click" arrow="always" :autoplay="false"
      v-if="radioType.length && isShow">
      <el-carousel-item v-for="item, index in radioType" :key="index" class="scroll-item">
        <router-link v-for="types in item" :key="types.id"
          :class="{'active-radio': currentIndex == types.id, 'radio-type': true}"
          :to="`/discover/djradio/category?id=${types.id}`">
          <span class="icon" :style="`background: url(${types.picWebUrl});`"></span>
          <span class="name">{{types.name}}</span>
        </router-link>
      </el-carousel-item>
    </el-carousel>
    <router-view></router-view>
  </div>
</template>

<style lang="less" scoped>
@import "@/assets/css/common.less";

.anchor-station-wrapper {
  position: relative;
  .scroll-item {
    display: flex;
    flex-wrap: wrap;
    margin-left: -19px;

    .radio-type {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 0 25px 29px;
      width: 70px;
      height: 70px;
      border: 2px solid transparent;

      &.active-radio {
        border: 2px solid #d35757;
        border-radius: 6px;

        >.icon {
          background-position: -48px 0 !important;
        }

        >.name {
          color: #d35757;
        }
      }

      .icon {
        display: block;
        width: 48px;
        height: 48px;
      }

      .name {
        font-size: 12px;
        color: #888;
      }
    }
  }
}

.el-carousel--horizontal {
  padding: 40px 40px 0;

  :deep(.el-carousel__arrow--left) {
    left: -20px !important;
  }

  :deep(.el-carousel__arrow--right) {
    right: -12px;
  }

  :deep(.el-carousel__indicators--horizontal) {
    display: none;
  }
}
</style>
