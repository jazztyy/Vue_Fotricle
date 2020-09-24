import Vue from 'vue'

import VueAxios from 'vue-axios'
import axios from 'axios'

import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

import VueTimepicker from 'vue2-timepicker'
import 'vue2-timepicker/dist/VueTimepicker.css'

import Multiselect from 'vue-multiselect'

import App from './App.vue'
import router from './router'
import './assets/css/tailwind.css'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import StarRating from 'vue-star-rating'
import VueCarousel from 'vue-carousel'
import 'vue-multiselect/dist/vue-multiselect.min.css'

Vue.config.productionTip = false

Vue.use(VueAxios, axios, Multiselect, VueCarousel)
Vue.use(VueSweetalert2)
Vue.component('Loading', Loading)
Vue.component('VueTimepicker', VueTimepicker)
Vue.component('star-rating', StarRating)
Vue.prototype.$bus = new Vue()

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
