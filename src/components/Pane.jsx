import React, { Component } from 'react'
import ItemList from './ItemList'
import ItemInput from './ItemInput'

class Pane extends Component {
  render() {
    return (
      <>
        <ItemList />
        <ItemInput />
      </>
    )
  }
}

export default Pane

