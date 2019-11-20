import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './redux/configureStore'
import App from './components/App'

const store = configureStore()

function Root() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

export default Root
