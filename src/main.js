import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import Axios from 'axios'
// 引用css样式
import 'normalize.css'
import './assets/css/index.less'

// 引用vue-router
import router from './router'

// 引入pinia
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

// 使用图片懒加载
import VueLazyload from 'vue-lazyload'

const app = createApp(App)
// 全局注册ElementUI的ICON
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

// 注册全局过滤器
app.config.globalProperties.$filters = {
  formatPlayCount(value) {
    if (String(value).length < 6) {
      return value
    } else {
      return parseInt(value / 10000) + '万'
    }
  }
}

app.use(router)
app.use(pinia)
app.use(VueLazyload, {
  error: require('./assets/image/default.jpg'),
  loading: require('./assets/image/default.jpg')
})
app.use(ElementPlus)
app.mount('#app')
app.config.globalProperties.$http = Axios
