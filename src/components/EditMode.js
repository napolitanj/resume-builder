import React, { Component } from 'react'
import Input from './editComponents/Input'

class EditMode extends Component {

    render() {
      const {handleChange, generalInfo, experience, employmentInfo, education, skills} = this.props
      return (
        <div className="editWindow">
        <h2>General Info</h2>
            <p>First Name</p>
            <input name="firstName" onChange={(e) => handleChange(e)}></input>
        </div>
      )
    }
}

export default EditMode;
