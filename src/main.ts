import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Add main styling
import './assets/main.css'

createApp(App)
  .use(router)
  .mount('#app')
