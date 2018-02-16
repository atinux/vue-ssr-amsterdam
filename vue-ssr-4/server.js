const express = require('express')
const renderVueApp = require('./render-vue-app')
const app = express()

app.use('/dist', express.static('./dist'))
app.get('*', renderVueApp)

app.listen(3000)
console.log('Server listening on http://localhost:3000')