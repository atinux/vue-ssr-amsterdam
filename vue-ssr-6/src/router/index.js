import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// route-level code splitting
import Home from '../pages/index.vue'
import About from '../pages/about.vue'

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      { path: '/', component: Home },
      { path: '/about', component: About }
    ]
  })
}