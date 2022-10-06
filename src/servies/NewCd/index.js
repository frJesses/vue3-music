import HyRequest from '../index'
export function getNewCd() {
  return HyRequest.get({ url: '/album/newest' })
}
