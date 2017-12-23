import 'babel-polyfill'
import React from 'react'
import ReactDom from 'react-dom'
import { applyMiddleware, compose, createStore } from 'redux'
import reducers from 'reducers'
import thunk from 'redux-thunk'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import axios from 'axios'
import Routes from './Routes'

//region todo: move createStore to function
const axiosInstance = axios.create({
	baseURL: '/api'
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enhancer = composeEnhancers(
	applyMiddleware(thunk.withExtraArgument(axiosInstance))
)

const store = createStore(reducers, window.INITIAL_STATE, enhancer)
//endregion

ReactDom.hydrate(
	<Provider store={store}>
		<BrowserRouter>
			{renderRoutes(Routes)}
		</BrowserRouter>
	</Provider>,
	document.getElementById('content')
)
