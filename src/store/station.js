import { defineStore } from 'pinia'
import { getRadioRecommend, getRadioRankData, getRadioTypeData, getRadioRankList } from '@/servies/AnchorStation'
export default defineStore('station', {
  state: () => {
    return {
      radioRecommendList: [],
      radioRankList: [],
      goodRadio: [],
      rankList: {}
    }
  },
  getters: {},
  actions: {
    // 获取推荐列表
    async getStationRecommend() {
      const { programs } = await getRadioRecommend()
      this.radioRecommendList = programs
    },
    // 获取节目排行列表
    getStationRank() {
      getRadioRankData().then(res => {
        res.toplist.map(item => {
          item.coverUrl = item.program.coverUrl
          return item
        })
        this.radioRankList = res.toplist
      })
    },
    // 获取分类中优秀电台列表
    getRadioCategoryList(id) {
      getRadioTypeData(id).then(res => {
        this.goodRadio = res.djRadios.slice(0, 5)
      })
    },
    // 获取电台排行榜数据
    getRadioRankList() {
      getRadioRankList(...arguments).then(res => {
        this.rankList = res
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
