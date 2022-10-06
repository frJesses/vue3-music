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
          { path: 'category', name: 'anchorStationCategory', component: () => import('@/views/AnchorStation/components/category') }
        ]
      }
    ]
  },
  {
    path: '/:catchAll(.*)',
    component: NotFound
  }
]
export default routes
