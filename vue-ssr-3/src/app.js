const Vue = require('vue')

module.exports = (context) => {
	const app = new Vue({
		data: {
			url: context.url
		},
		template: `<div>
			<p>The visited URL is: {{ url }}</p>
			<button @click="sayHello">Hello</button>
		</div>`,
		methods: {
			sayHello() {
				window.alert('Hello!')
			}
		}
	})

	return app
}