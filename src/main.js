import './assets/main.css'

import { createApp } from './node_modules/vue/dist/vue.esm-bundler.js'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

import './icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
