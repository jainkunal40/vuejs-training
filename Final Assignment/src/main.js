import Vue from 'vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import VueFire from 'vuefire';

import './config/firebase';
import 'bootstrap/dist/css/bootstrap.min.css'; 

import App from './App.vue'
import { routes } from './routes';
import store from './store/store';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueFire);
const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
