import { createSSRApp } from 'vue'
import App from './App.vue'
import 'uno.css'
import api from '@/network/api/index'
import router from './router'
import { mPaaSJSAPIOn, mPaaSJSAPICall } from '@/utils/util_js_bridge'
import { setupPinia } from '@/pinia'

export function createApp() {
  const app = createSSRApp(App)
  app.use(router)
  setupPinia(app)
  return {
    app
  }
}

uni.$api = api
uni.$mPaaSJSAPICall = mPaaSJSAPICall
uni.$mPaaSJSAPIOn = mPaaSJSAPIOn
