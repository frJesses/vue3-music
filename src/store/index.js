import homeStore from './home'
export default function useStore() {
  return {
    home: homeStore()
  }
}
