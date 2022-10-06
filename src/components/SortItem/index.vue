<template>
  <div class="sort-item">
    <span class="index">{{newIndex}}</span>
    <span class="sort">
      <el-icon>
        <template v-if="diff > 0">
          <span class="increment"><Top class="icon" />{{diff}}</span>
        </template>
        <template v-else-if="diff < 0">
          <span class="decrement"><Bottom class="icon" />{{Math.abs(diff)}}</span>
        </template>
        <template v-else>
          <span class="equal"><SemiSelect class="icon" />{{diff}}</span>
        </template>
      </el-icon>
    </span>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  index: { // 索引值
    type: Number,
    default: 0
  },
  diff: { // 显示的差值
    type: Number,
    default: 0
  },
  isFormat: { // 是否显示成两位
    type: Boolean,
    default: true
  },
  layout: {
    type: String,
    default: 'column'
  }
})
// 重新计算index
const newIndex = computed(() => {
  if (props.isFormat) {
    if (String(props.index + 1).length > 1) return props.index + 1
    return '0' + (props.index + 1)
  } else {
    return props.index + 1
  }
})
</script>

<style lang="less" scoped>
.sort-item {
  padding-right: 10px;
  width: 40px;
  display: flex;
  flex-direction: v-bind(layout);
  justify-content: center;
  align-items: center;
  .sort {
    display: flex;
    .icon {
      font-size: 10px;
    }
    .increment,
    .decrement,
    .equal {
      display: flex;
      font-style: normal;
      justify-content: center;
      align-items: center;
    }

    .increment {
      color: #ba2226;
    }
    .decrement {
      color: #4abbeb;
    }
    .equal {
      color: #999;
    }
  }
  .index {
    font-size: 14px;
    color: #999;
    letter-spacing: 1px;
  }
}
</style>
