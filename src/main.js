import Vue from 'vue'
import App from './App.vue'

import  './mixin.js'
import store from './store'
import {router} from './routes'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'popper.js'
import 'jquery'
import './forms'
import './httpClient'
import './filters'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
