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
        editTopicDescription
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
            topics={mainProps.experience.topics}
            editCategory={editCategory}
            editTopicTitle={editTopicTitle}
            editTopicDescription={editTopicDescription}
            />
          </div>
      )}
    }
}

export default EditMode;
