import React, { Component } from 'react'

class EditTab extends Component {
  render() {
      const {tabName} = this.props
    return (
      <div className="editTab">{tabName}</div>
    )
  }
}

export default EditTab