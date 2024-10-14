import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import { store } from './app/store'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(store)
app.mount('#app')
