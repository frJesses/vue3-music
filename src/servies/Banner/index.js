import HyRequest from '../index'

export function getBannerList() {
  return HyRequest.get({ url: '/banner' })
}
