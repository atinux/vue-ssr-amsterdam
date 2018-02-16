import Vue from 'vue'
import { createApp } from './app'

const { app, router, store } = createApp()

if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__)
}

// This assumes App.vue template root element has `id="app"`
app.$mount('#app')