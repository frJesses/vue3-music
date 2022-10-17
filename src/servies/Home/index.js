import HyRequest from '../index'
// 获取新碟上架接口
export function getNewCd() {
  return HyRequest.get({ url: '/album/newest' })
}
// 获取榜单信息接口
export function getPlayList(id) {
  return HyRequest.get({ url: `/playlist/detail?id=${id}` })
}
// 获取榜单具体歌曲接口
export function getSongList(id) {
  return HyRequest.get({ url: `/playlist/track/all?id=${id}` })
}
// 获取轮播接口
export function getBannerList() {
  return HyRequest.get({ url: '/banner' })
}
