import Vue from 'vue'
import App from './App.vue'
import VueTypedJs from 'vue-typed-js'
import i18n from './i18n'
import { ModalPlugin, ButtonPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './styles/style.css'

Vue.use(ModalPlugin)
Vue.use(ButtonPlugin)
Vue.use(VueTypedJs)
Vue.config.productionTip = false

new Vue({
  i18n,
  render: h => h(App)
}).$mount('#app')
