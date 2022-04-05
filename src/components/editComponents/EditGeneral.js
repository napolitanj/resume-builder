import React, { Component } from 'react'
import AddWebsite from './AddWebsite'

class EditGeneral extends Component {
  render() {
      const {changeGeneral} = this.props;
    return (
        <div className="editWindow">
        <h2>General Info</h2>
            <p>First Name</p>
            <input name="firstName" onChange={(e) => changeGeneral(e)}></input>
            <p>Last Name</p>
            <input name="lastName" onChange={(e) => changeGeneral(e)}></input>
            <p>Title</p>
            <input name="title" onChange={(e) => changeGeneral(e)}></input>
            <p>City</p>
            <input name="city" onChange={(e) => changeGeneral(e)}></input>
            <p>Phone</p>
            <input name="phone" onChange={(e) => changeGeneral(e)}></input>
            <p>Email</p>
            <input name="email" onChange={(e) => changeGeneral(e)}></input>

        </div>
    )
  }
}

export default EditGeneral