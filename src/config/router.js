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
    name: 'home'
  },
  {
    path: '/404',
    name: '404',
    component: NotFound
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/404'
  }
]
export default routes
