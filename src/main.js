import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import { store } from './store';
import { router } from './router';
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false
Vue.use(BootstrapVue);


new Vue({
  el: '#app',
  router,
  store,
  vuetify,
  render: h => h(App)
})
