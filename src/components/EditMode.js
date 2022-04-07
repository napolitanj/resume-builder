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
        deleteWebsite,
        editCategory,
        editTopicTitle,
        editTopicDescription,
        editExperience
      } = this.props

      if (mainProps.activeTab === 1) {
        return (
          <div className="editWindow">
              <EditGeneral
              general={mainProps.generalInfo} 
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
            experienceProps={mainProps.experience}
            editCategory={editCategory}
            editTopicTitle={editTopicTitle}
            editTopicDescription={editTopicDescription}
            editExperience={editExperience}
            />
          </div>
      )}
    }
}

export default EditMode;
