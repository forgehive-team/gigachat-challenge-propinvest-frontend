import './assets/scss/index.scss'

import { createPinia } from 'pinia'
import { createApp } from 'vue'
import YmapPlugin from 'vue-yandex-maps'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

const settings = {
  apiKey: 'd4b2e171-fe8a-45ee-933e-7e8d9f1ee2d6',
  lang: 'ru_RU',
  coordorder: 'latlong'
}
app.use(YmapPlugin, settings)

app.mount('#app')
