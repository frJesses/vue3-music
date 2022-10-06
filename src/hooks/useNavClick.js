import { ref } from 'vue'

const useNavClick = () => {
  const cIndex = sessionStorage.getItem('currentIndex')
  const currentIndex = ref(cIndex || 0)
  const navChange = (index) => {
    currentIndex.value = index
    sessionStorage.setItem('currentIndex', index)
  }

  return {
    currentIndex,
    navChange
  }
}

export default useNavClick
