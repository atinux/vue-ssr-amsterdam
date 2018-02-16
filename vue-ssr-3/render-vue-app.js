const renderer = require('vue-server-renderer').createRenderer({
  template: require('fs').readFileSync('./src/index.template.html', 'utf-8')
})
const createApp = require('./src/app')

module.exports = async (req, res) => {
	try {
		const context = { url: req.url }
		const app = createApp(context)
		const html = await renderer.renderToString(app)

		res.send(html)
	} catch (err) {
		res.status(500).end(err.message)
	}
}