import HyRequest from '../index'

// 获取热门推荐接口
export function getPersonalized() {
  return HyRequest.get({ url: '/personalized' })
}
