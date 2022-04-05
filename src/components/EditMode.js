import React, { Component } from 'react'
import EditGeneral from './editComponents/EditGeneral'


class EditMode extends Component {

    render() {
      const {changeGeneral, experience, employmentInfo, education, skills} = this.props
      return (
        <div className="editWindow">
            <EditGeneral changeGeneral={changeGeneral}></EditGeneral>
        </div>
      )
    }
}

export default EditMode;
