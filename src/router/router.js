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
      {
        path: 'recommend',
        name: 'recommend',
        component: () => import('@/views/Recommend')
      },
      {
        path: 'playlist',
        name: 'playlist',
        component: () => import('@/views/PlayList')
      },
      {
        path: 'djradio',
        name: 'anchorStation',
        component: () => import('@/views/AmchorStation')
      }
    ]
  },
  {
    path: '/:catchAll(.*)',
    component: NotFound
  }
]
export default routes
