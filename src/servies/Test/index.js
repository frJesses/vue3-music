import HyRequest from '../index'

export function getPersonalized() {
  return HyRequest.get({ url: '/personalized' })
}
