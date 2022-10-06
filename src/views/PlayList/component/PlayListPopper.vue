<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { getPlayListTag } from '@/servies/PlayList'
import { useRouterInfo } from '@/hooks/useRouterInfo'
const { router, route } = useRouterInfo()

// 接收的props
const props = defineProps({
  getPlayList: {
    type: Function,
    default: () => { }
  }
})
const title = ref(route.query.cat || '全部')
const visible = ref(false)
const tagList = ref(null)
onMounted(async() => {
  const { categories, sub } = await getPlayListTag()
  // 获取歌单tag处理数据，进行拼接
  const tagArr = []
  Object.keys(categories).forEach(item => {
    const obj = {}
    obj.name = categories[item]
    obj.data = []
    sub.forEach(list => {
      if (item == list.category) {
        obj.data.push(list)
      }
    })
    tagArr.push(obj)
  })
  tagList.value = tagArr
  // 事件监听
  window.addEventListener('click', pageClick, true)
})

onUnmounted(() => {
  window.removeEventListener('click', pageClick)
})

// 注册事件，
const pageClick = () => {
  visible.value = false
}

// 点击具体标签
const tagClick = (tagName) => {
  title.value = tagName
  // 发送请求改变数据
  props.getPlayList('hot', tagName)
  // 改变路由地址
  let url = `/discover/playlist/?cat=${tagName}`
  if (route.query.order) url = `/discover/playlist/?cat=${tagName}&order=${route.query.order}`
  router.push(url)
}

// poppver显示触发
const poppverTrigger = () => {
  visible.value = !visible.value
}
</script>

<template>
  <div class="seaction-left">
    <h3 class="title">{{title}}</h3>
    <el-popover placement="bottom-start" :width="700" trigger="click" popper-class="playlist-popper" :visible="visible">
      <template #reference>
        <el-button plain @click="poppverTrigger">
          选择分类<el-icon>
            <ArrowDown />
          </el-icon>
        </el-button>
      </template>
      <template #default>
        <div class="wrapper">
          <div class="header">
            <el-Button @click="tagClick('全部')">全部风格</el-Button>
          </div>
          <div class="content">
            <dl v-for="item in tagList" :key="item.name">
              <dt>{{item.name}}</dt>
              <dd>
                <template v-for="tags in item.data" :key="tags.name">
                  <a @click="tagClick(tags.name)" :class="{'active': title === tags.name}">{{tags.name}}</a>
                  <span>|</span>
                </template>
              </dd>
            </dl>
          </div>
        </div>
      </template>
    </el-popover>
  </div>
</template>

<style lang="less" scoped>
.seaction-left {
  display: flex;

  h3 {
    font-weight: normal;
    font-size: 24px;

    &.title {
      margin-right: 10px;
    }
  }
}

.wrapper {
  padding: 0;
  width: inherit;

  .header {
    padding: 10px 0 10px 13px;
    border-bottom: 1px solid #e6e6e6;
  }

  .content {
    >dl {
      display: flex;
      flex-wrap: wrap;

      &:last-child {
        >dd {
          padding-bottom: 30px;
        }
      }

      >dt {
        width: 100px;
        text-align: center;
        margin-top: 18px;
      }

      >dd {
        flex: 1;
        padding: 16px 15px 0 15px;
        border-left: 1px solid #e6e6e6;
        line-height: 24px;

        >a {
          white-space: nowrap;
          color: #333;
          padding: 2px 3px;
          cursor: pointer;

          &.active {
            color: #fff;
            background: #a7a7a7;
          }
        }

        >span {
          margin: 0 8px;
          color: #d8d8d8;
        }
      }
    }
  }
}
</style>
