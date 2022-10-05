import { ref } from 'vue'

const useNavClick = () => {
  const cIndex = localStorage.getItem('currentIndex')
  const currentIndex = ref(cIndex || 0)
  const navChange = (index) => {
    currentIndex.value = index
    localStorage.setItem('currentIndex', index)
  }

  return {
    currentIndex,
    navChange
  }
}

export default useNavClick
