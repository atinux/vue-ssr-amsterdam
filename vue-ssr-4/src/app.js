import Vue from 'vue'
import App from './App.vue'

/*
** Export a factory function for creating fresh app,
** router and store instances
*/
export function createApp (context) {
	const app = new Vue(App)

	return { app }
}