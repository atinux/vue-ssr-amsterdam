import { createApp } from './app'

const { app } = createApp()

// This assumes App.vue template root element has `id="app"`
app.$mount('#app')