import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import TestPage from './components/TestPage.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Home },
    { path: '/test', component: TestPage }
  ]
})

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
