import { createPinia } from 'pinia'

// 引入持久化插件
import piniaPluginPersistState from 'pinia-plugin-persistedstate'

const pinia = createPinia()

pinia.use(piniaPluginPersistState)
export default pinia
