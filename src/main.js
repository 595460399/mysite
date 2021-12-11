import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { goBackTop } from '@/utils'
import HeadImg from '@/plugins/HeadImage'
router.beforeEach((to, from, next) => {
  goBackTop()
  next()
})

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.component(HeadImg.name, HeadImg)
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
