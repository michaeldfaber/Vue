import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource';

import App from './App.vue'
import Home from './pages/Home.vue'
import RandomPerson from './pages/RandomPerson.vue'

Vue.use(VueRouter)
Vue.use(VueResource);

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Home },
    { path: '/randomPerson', component: RandomPerson }
  ]
})

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
