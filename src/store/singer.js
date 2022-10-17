import { defineStore } from 'pinia'
import { getSingerCategoryList } from '@/servies/Singer'
export default defineStore('singer', {
  state: () => {
    return {
      leftNavCurrent: -1,
      singerTitle: '热门歌手',
      singerList: [],
      letterIndex: -1
    }
  },
  getters: {},
  actions: {
    // 左边tab切换
    changeLeftNav(item) {
      this.leftNavCurrent = item.id
      this.singerTitle = item.name
      // 发送请求获取歌手数据
      this.letterIndex = -1
      this.getSingerCategoryList(item.type, item.area)
    },
    // 获取歌手数据
    getSingerCategoryList(type = -1, area = -1, initial = -1, limit = 100) {
      getSingerCategoryList(type, area, initial, limit).then(res => {
        this.singerList = res.artists
      })
    },
    // 字母选中
    changeLetter(data, route) {
      this.letterIndex = data
      // 发送请求
      const { type = -1, area = -1 } = route.query
      this.getSingerCategoryList(type, area, data)
    }
  },
  persist: {
    // 修改存储中使用的键名称，默认为当前 Store的 id
    key: 'singer',
    // 修改为 sessionStorage，默认为 localStorage
    storage: window.sessionStorage,
    // 部分持久化状态的点符号路径数组，[]意味着没有状态被持久化(默认为undefined，持久化整个状态)
    paths: ['leftNavCurrent', 'singerTitle', 'singerList', 'letterIndex']
  }
})
