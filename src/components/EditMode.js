import React, { Component } from 'react'
import EditGeneral from './editComponents/EditGeneral'
import EditExperience from './editComponents/EditExperience'
import EditEmployment from './editComponents/EditEmployment'
import EditEducation from './editComponents/EditEducation'
import EditSkills from './editComponents/EditSkills'


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
        editExperience,
        editEmployment,
        editDuty,
        deleteDuty,
        addNewDuty,
        deleteJob,
        editEducation,
        deleteEducation,
        addNewEducation
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
        )
      } else if (mainProps.activeTab === 2) {
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
        )
      } else if (mainProps.activeTab === 3) {
        return (
          <div className="editWindow">
            <EditEmployment 
            mainProps={mainProps}
            editEmployment={editEmployment}
            editDuty={editDuty}
            deleteDuty={deleteDuty}
            addNewDuty={addNewDuty}
            deleteJob={deleteJob}
            />
          </div>
        )
      } else if (mainProps.activeTab === 4) {
          return (
          <div className="editWindow">
            <EditEducation
            mainProps={mainProps}
            editEducation={editEducation}
            deleteEducation={deleteEducation}
            addNewEducation={addNewEducation}
            />
          </div>
        )
      } else if (mainProps.activeTab === 5) {
          return (
            <div className="editWindow">
              <EditSkills 
              mainProps={mainProps}
              />
            </div>
            )
          }
    }
}

export default EditMode;
