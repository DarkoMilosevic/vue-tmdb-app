// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App'
import router from './router'
import 'vue-awesome/icons'

import Icon from 'vue-awesome/components/Icon'
Vue.component('icon', Icon)

Vue.use(VueAxios, axios);

Vue.config.productionTip = false

export const EventBus = new Vue();

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

var hub = require('vue');

window.Hub = new Vue;