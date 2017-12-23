import 'babel-polyfill'
import Express from 'express'
import { matchRoutes } from 'react-router-config'
import proxy from 'express-http-proxy'
import renderer from './helpers/renderer'
import createStore from './helpers/createStore'
import Routes from '../app/Routes'

const app = new Express()

app.use(
	'/api',
	proxy('http://react-ssr-api.herokuapp.com', {
		proxyReqOptDecorator (opts) {
			opts.headers['x-forwarded-host'] = 'localhost:3000'

			return opts
		}
	})
)

app.use(Express.static('public'))

app.get('*', (req, res) => {
	const store = createStore(req)

	const promises = matchRoutes(Routes, req.path)
		.map(({route: {loadData}}) => (loadData ? loadData(store) : null))
		.map(promise => promise && new Promise(resolve => promise.then(resolve).catch(resolve))) // todo: go deeper

	Promise.all(promises)
		.then(() => {
			const context = {}
			const content = renderer(req, store, context)

			if (context.url && context.action === 'REPLACE') {
			  return res.redirect(301, context.url)
			}

			if (context.notFound) {
				res.status(404)
			}

			res.send(content)
		})
})

const port = 3000

app.listen(port, () => {
	console.log(`Listening on port ${port}`)
})

process.on('SIGUSR2', () => {
	process.exit(0)
})
