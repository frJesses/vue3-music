import HyRequest from '../index'

// 获取热门歌手
export function getHotSinger() {
  return HyRequest.get({ url: '/top/artists?limit=100' })
}

// 获取歌手分类
export function getSingerCategoryList(type = 1, area = 7, limit = 100) {
  return HyRequest.get({
    url: '/artist/list',
    params: {
      type,
      area,
      limit
    }
  })
}

// 获取左边数据（未找到相对应的接口，暂时写死）
export function getSingerNavList() {
  const list = [
    { title: '推荐', data: [{ name: '推荐歌手', type: -1, area: -1 }] },
    {
      title: '华语',
      data: [
        { name: '华语男歌手', type: 1, area: 7 },
        { name: '华语女歌手', type: 2, area: 7 },
        { name: '华语组合/乐队', type: 3, area: 7 }
      ]
    },
    {
      title: '欧美',
      data: [
        { name: '欧美男歌手', type: 1, area: 96 },
        { name: '欧美女歌手', type: 2, area: 96 },
        { name: '欧美组合/乐队', type: 3, area: 96 }
      ]
    },
    {
      title: '日本',
      data: [
        { name: '日本男歌手', type: 1, area: 8 },
        { name: '日本女歌手', type: 2, area: 8 },
        { name: '日本组合/乐队', type: 3, area: 8 }
      ]
    },
    {
      title: '韩国',
      data: [
        { name: '韩国男歌手', type: 1, area: 16 },
        { name: '韩国女歌手', type: 2, area: 16 },
        { name: '韩国组合/乐队', type: 3, area: 16 }
      ]
    },
    {
      title: '其他',
      data: [
        { name: '其他男歌手', type: 1, area: 0 },
        { name: '其他女歌手', type: 2, area: 0 },
        { name: '其他组合/乐队', type: 3, area: 0 }
      ]
    }
  ]
  return list
}
