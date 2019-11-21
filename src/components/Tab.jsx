import React from 'react'
import {
  activateTab
} from '../redux/tabnav/tabnavActions'
import { connect } from 'react-redux'

class Tab extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    const {
      item: {
        id
      },
      activateTab
    } = this.props

    activateTab(id)
  }

  render() {
    const {
      item: {
        fact
      }
    } = this.props

    return (
      <button onClick={this.handleClick}>
        {fact}
      </button>
    )
  }
}

const mapDispatchToProps = ({
  activateTab: (id) => activateTab(id)
})

export default connect(null, mapDispatchToProps)(Tab)
