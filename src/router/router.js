const Home = () => import('@/views/MusicHome/index')
const NotFound = () => import('@/views/NotFound/index')

const routes = [
  {
    path: '/',
    redirect: '/discover'
  },
  {
    path: '/discover',
    component: Home,
    name: 'home',
    children: [
      {
        path: '',
        redirect: '/discover/recommend',
        name: 'homeRedirect'
      },
      { // 推荐页面
        path: 'recommend',
        name: 'recommend',
        component: () => import('@/views/Recommend')
      },
      { // 歌单页面
        path: 'playlist',
        name: 'playlist',
        component: () => import('@/views/PlayList')
      },
      { // 主播电台界面
        path: 'djradio',
        name: 'anchorStation',
        component: () => import('@/views/AnchorStation'),
        children: [
          { path: '', name: 'anchorStationHome', component: () => import('@/views/AnchorStation/components/home') },
          { path: 'category', name: 'anchorStationCategory', component: () => import('@/views/AnchorStation/components/category') },
          { path: 'recommend', name: 'anchorStationRecommend', component: () => import('@/views/AnchorStation/components/recommend') },
          { path: 'rank', name: 'anchorStationRank', component: () => import('@/views/AnchorStation/components/rank') }
        ]
      },
      { // 歌手界面
        path: 'artist',
        name: 'artist',
        component: () => import('@/views/Singer')
      }
    ]
  },
  {
    path: '/:catchAll(.*)',
    component: NotFound
  }
]
export default routes
