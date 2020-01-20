import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: App },
    { path: '/test', component: TestPage }
  ]
})

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
