import React, { Component } from 'react'
import EditGeneral from './editComponents/EditGeneral'
import EditExperience from './editComponents/EditExperience'
import EditEmployment from './editComponents/EditEmployment'


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
        )} else if (mainProps.activeTab === 2) {
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
      )} else if (mainProps.activeTab === 3) {
        return (
          <div className="editWindow">
            <EditEmployment 
            employmentProps={mainProps.employmentInfo}/>
          </div>
        )
      }
    }
}

export default EditMode;
