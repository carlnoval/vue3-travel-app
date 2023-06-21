import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// manually added import
import {createRouter, createWebHashHistory} from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [

  ]
})

createApp(App)
  .use(router)
  .mount('#app')
