import React from 'react'
import Tab from './Tab'
import { connect } from 'react-redux'

class TabNav extends React.Component {
  constructor(props) {
    super(props)

    this.mapItemsToComponents = this.mapItemsToComponents.bind(this)
  }

  mapItemsToComponents() {
    const { items } = this.props

    return items.map((item) => {
      return <Tab item={item} />
    })
  }

  render() {
    return (
      <nav>
        <ul>
          {this.mapItemsToComponents()}
        </ul>
      </nav>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items.items
  }
}

export default connect(mapStateToProps)(TabNav)

