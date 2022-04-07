import React, { Component } from 'react'

class EditTab extends Component {
  render() {
      const {tabName, editCategory} = this.props
    return (
        <div>
            <div className="editTab" onClick={() => editCategory()}>{tabName}</div>
        </div>
    )
  }
}

export default EditTab