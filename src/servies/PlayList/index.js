import HyRequest from '../index'

// 获取歌单标签列表
export function getPlayListTag() {
  return HyRequest.get({ url: '/playlist/catlist' })
}

// 获取歌单列表
export function getPlayList(order = 'hot', cat = '全部', limit = 50, offset = 0) {
  return HyRequest.get({
    url: '/top/playlist',
    params: {
      order,
      cat,
      limit,
      offset
    }
  })
}
