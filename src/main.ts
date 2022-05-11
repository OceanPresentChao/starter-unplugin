import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { Icon } from '@iconify/vue';
const app = createApp(App)
app.component("Icon", Icon)
app.mount('#app')
