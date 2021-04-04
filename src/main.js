import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin, LayoutPlugin, ModalPlugin, CardPlugin, DropdownPlugin, TablePlugin } from 'bootstrap-vue'
import VueMq from 'vue-mq'
import Vuelidate from 'vuelidate'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(LayoutPlugin)
Vue.use(ModalPlugin)
Vue.use(CardPlugin)
Vue.use(DropdownPlugin)
Vue.use(TablePlugin)

Vue.use(VueMq, {
  breakpoints: {
      sm: 768,
      md: 992,
      lg: 1200,
      xl: Infinity,
  }
})

Vue.use(Vuelidate)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
