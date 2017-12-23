import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import serialize from 'serialize-javascript'
import Routes from '../../app/Routes'

export default (req, store, context) => {
	const content = renderToString(
		<Provider store={store}>
			<StaticRouter location={req.path} context={context}>
				{renderRoutes(Routes)}
			</StaticRouter>
		</Provider>
	)

	return `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Student/Tutor</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">
    </head>
    <body>
    	<div id="content">${content}</div>  
    
    	<script>
        window.INITIAL_STATE = ${serialize(store.getState())}
			</script>
    	<script src="bundle.js"></script>
    </body>
    </html>
  `
}
