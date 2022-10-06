import HyRequest from '../index'

// 获取电台类别
export function getRadioType() {
  return HyRequest.get({ url: '/dj/catelist' })
}

// 获取推荐节目
export function getRadioRecommend() {
  return HyRequest.get({ url: '/program/recommend', params: { limit: 100 }})
}

// 获取节目排行榜数据
export function getRadioRankData() {
  return HyRequest.get({ url: '/dj/program/toplist', params: { limit: 100 }})
}

// 获取推荐类型的数据(2-音乐推荐 6-生活 3-情感 2001-创作翻唱 11-知识)
export function getRadioTypeData(type = 2) {
  return HyRequest.get({ url: '/dj/recommend/type', params: { type: type }})
}
