const Vue = require('vue')
const renderer = require('vue-server-renderer').createRenderer()

module.exports = async (req, res) => {
	const app = new Vue({
		data: {
			url: req.url
		},
		template: `<p>The visited URL is: {{ url }}</p>`
	})
	
	try {
		const appHtml = await renderer.renderToString(app)

		res.send(`
			<!DOCTYPE html>
			<html lang="en">
				<head><title>Hello</title></head>
				<body>${appHtml}</body>
			</html>`
		)
	} catch (err) {
		res.status(500).end(err.message)
	}
}