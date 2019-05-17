import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueCookies from 'vue-cookies'
import VueLocalStorage from 'vue-localstorage'


Vue.use(BootstrapVue)
Vue.use(VueCookies)
Vue.use(VueLocalStorage)
Vue.config.productionTip = false

Vue.use(require('vue-cookies'))

// set default config
VueCookies.config('7d')

// set global cookie
VueCookies.set('theme','default');
VueCookies.set('hover-time','1s');
// Vue.localStorage.set('todoList')
// Vue.localStorage.get('todoList')

new Vue({
  render: h => h(App),
}).$mount('#app')
