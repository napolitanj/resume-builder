import React, { Component } from 'react'

class EditTab extends Component {
  render() {
      const {activeTab, tabName, editCategory, changeValue} = this.props
    return (
        <div>
            <div className="editTab"  onClick={() => editCategory(changeValue)}>{tabName}</div>
        </div>
    )
  }
}

export default EditTab