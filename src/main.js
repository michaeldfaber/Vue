import Vue from 'vue'
import App from './App.vue'
import TestPage from './components/TestPage.vue'
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
  template: `
    <div id="app">
      <router-link class="navbar-link" to="/">Home</router-link>
      <router-link class="navbar-link" to="/test">Test Page</router-link>
      <router-view></router-view>
    </div>
  `,
  el: '#app'
  // render: h => h(App)
})
