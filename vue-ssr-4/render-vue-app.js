const { createBundleRenderer } = require('vue-server-renderer')

const template = require('fs').readFileSync('./src/index.template.html', 'utf-8')
const serverBundle = require('./dist/vue-ssr-server-bundle.json')
const clientManifest = require('./dist/vue-ssr-client-manifest.json')
const renderer = createBundleRenderer(serverBundle, {
	template,
	clientManifest
})

module.exports = async (req, res) => {
	try {
		const context = { url: req.url }
		const html = await renderer.renderToString(context)

		res.send(html)
	} catch (err) {
		res.status(500).end(err.message)
	}
}