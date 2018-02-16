import Vue from 'vue'
import App from './App.vue'
import { createStore } from './store'
import { createRouter } from './router'

/*
** Export a factory function for creating fresh app,
** router and store instances
*/
export function createApp (context) {
	// create store and router instances
  const store = createStore()
	const router = createRouter()

	const app = new Vue({
		router,
		store,
		render: h => h(App)
	})

	return { app, router, store }
}