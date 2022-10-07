import { defineStore } from 'pinia'
import { getRadioRecommend, getRadioRankData } from '@/servies/AnchorStation'
export default defineStore('station', {
  state: () => {
    return {
      radioRecommendList: [],
      radioRankList: []
    }
  },
  getters: {},
  actions: {
    async getStationRecommend() {
      const { programs } = await getRadioRecommend()
      this.radioRecommendList = programs
    },
    getStationRank() {
      getRadioRankData().then(res => {
        res.toplist.map(item => {
          item.coverUrl = item.program.coverUrl
          return item
        })
        this.radioRankList = res.toplist
      })
    }
  },
  persist: {
    // 修改存储中使用的键名称，默认为当前 Store的 id
    key: 'station',
    // 修改为 sessionStorage，默认为 localStorage
    storage: window.sessionStorage,
    // 部分持久化状态的点符号路径数组，[]意味着没有状态被持久化(默认为undefined，持久化整个状态)
    paths: ['radioRecommendList', 'radioRankList']
  }
})
