const Vue = require('vue')
const renderer = require('vue-server-renderer').createRenderer({
  template: require('fs').readFileSync('./index.template.html', 'utf-8')
})

module.exports = async (req, res) => {
	const app = new Vue({
		data: {
			url: req.url
		},
		template: `<p>The visited URL is: {{ url }}</p>`
	})
	
	try {
		const html = await renderer.renderToString(app)

		res.send(html)
	} catch (err) {
		res.status(500).end(err.message)
	}
}