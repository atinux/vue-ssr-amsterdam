<template>
	<div>
		<h1>About page</h1>
		<p>Counter: {{ $store.state.counter }}<p>
		<p><button @click="$store.commit('INCREMENT')">+</button></p>
		<router-link to="/">Home page</router-link>
	</div>
</template>

<script>
let timer

export default {
	asyncData({ store }) {
		store.commit('INCREMENT')
	},
	created() {
		timer = setInterval(() => console.log(Date.now()), 1000)
	},
	beforeDestroy() {
		clearInterval(timer)
	}
}
</script>

<style scoped>
h1 {
	color: red;
}
</style>