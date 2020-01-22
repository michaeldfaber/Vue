import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './pages/Home.vue'
import RandomPerson from './pages/RandomPerson.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Home },
    { path: '/test', component: RandomPerson }
  ]
})

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
