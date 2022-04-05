import React, { Component } from 'react'
import EditGeneral from './editComponents/EditGeneral'


class EditMode extends Component {

    render() {
      const {changeGeneral, mainProps, setAddWeb} = this.props
      return (
        <div className="editWindow">
            <EditGeneral changeGeneral={changeGeneral} addWeb={mainProps.addWebsite} setAddWeb={setAddWeb}></EditGeneral>
        </div>
      )
    }
}

export default EditMode;
