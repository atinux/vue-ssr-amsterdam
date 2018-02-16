<template>
	<div id="app">
		<p>The visited URL is: {{ url }}</p>
		<button @click="sayHello">Hello</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			url: 'Lost it'
		}
	},
	methods: {
		sayHello() {
			window.alert('Hello!')
		}
	}
}
</script>