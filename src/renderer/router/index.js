import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    { path: '/', name: 'web', component: require('@/views/web').default },
    { path: '/connect', name: 'connect', component: require('@/views/connect').default },
    { path: '*', redirect: '/' }
  ]
})
