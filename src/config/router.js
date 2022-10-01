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
        redirect: '/discover/recommend'
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
      }
    ]
  },
  {
    path: '/:catchAll(.*)',
    component: NotFound
  }
]
export default routes
