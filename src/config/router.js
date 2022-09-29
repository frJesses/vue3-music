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
