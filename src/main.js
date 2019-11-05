import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import '@/assets/styles/tailwind.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

axios.defaults.baseURL = `https://ghibliapi.herokuapp.com`
Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
