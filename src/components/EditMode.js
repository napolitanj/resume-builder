import React, { Component } from 'react'
import EditGeneral from './editComponents/EditGeneral'


class EditMode extends Component {

    render() {
      const {changeGeneral, mainProps, setAddWeb, submitNewWebsite, deleteWebsite} = this.props
      return (
        <div className="editWindow">
            <EditGeneral 
            websites={mainProps.generalInfo.websites} 
            changeGeneral={changeGeneral} 
            addWeb={mainProps.addWebsite} 
            setAddWeb={setAddWeb}
            submitNewWebsite={submitNewWebsite}
            deleteWebsite={deleteWebsite}
            />
        </div>
      )
    }
}

export default EditMode;
