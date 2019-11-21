import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from './redux/configureStore'
import TabNav from './components/TabNav'
import Pane from './components/Pane'

const store = configureStore()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <TabNav />
        <Pane />
      </Provider>
    )
  }
}

export default App
