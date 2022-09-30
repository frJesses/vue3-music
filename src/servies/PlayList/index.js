import HyRequest from '../index'

// 获取歌单标签列表
export function getPlayListTag() {
  return HyRequest.get({ url: '/playlist/catlist' })
}
