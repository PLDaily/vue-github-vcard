import Vue from 'vue'
import App from './components/App.vue'
import VueResource from 'vue-resource'
require('./css/reset.css')

Vue.use(VueResource)
new Vue({
  el: 'body',
  components: { App }
})
