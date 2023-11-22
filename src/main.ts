import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { toLine } from './utils/index'
import 'normalize.css'
import './assets/css/index.scss'
import mUI from './components'


const app = createApp(App)

// 全局注册icon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(`el-icon-${toLine(key)}`, component)
}
app.use(router).use(ElementPlus).use(mUI)
app.mount('#app')