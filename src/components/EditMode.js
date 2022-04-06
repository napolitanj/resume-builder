import React, { Component } from 'react'
import EditGeneral from './editComponents/EditGeneral'
import EditExperience from './editComponents/EditExperience'

class EditMode extends Component {
    render() {
      const {
        changeGeneral, 
        mainProps, 
        setAddWeb, 
        submitNewWebsite, 
        deleteWebsite
      } = this.props

      if (mainProps.activeTab === 1) {
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
        )} else {
          return (
          <div className="editWindow">
            <EditExperience
            topics={mainProps.experience.topics} 
            />
          </div>
      )}
    }
}

export default EditMode;
