import Vue from 'vue'
import App from './App.vue'
import VueTypedJs from 'vue-typed-js'
import i18n from './i18n'

Vue.use(VueTypedJs)
Vue.config.productionTip = false

new Vue({
  i18n,
  render: h => h(App)
}).$mount('#app')
