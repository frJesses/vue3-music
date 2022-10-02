import { ref } from 'vue'

const useNavClick = () => {
  const currentIndex = ref('0')
  const navChange = (index) => {
    currentIndex.value = index
  }

  return {
    currentIndex,
    navChange
  }
}

export default useNavClick
