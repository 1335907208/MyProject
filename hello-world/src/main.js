import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BaiduMap from 'vue-baidu-map'
import website from './config/website'
import './styles/common.scss'

Vue.config.productionTip = false


Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥
  ak: website.baiduMapAK
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
