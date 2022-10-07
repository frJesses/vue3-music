import homeStore from './home'
import stationStore from './station'
export default function useStore() {
  return {
    home: homeStore(),
    station: stationStore()
  }
}
