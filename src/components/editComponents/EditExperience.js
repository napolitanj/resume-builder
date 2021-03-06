import React, { Component } from 'react'
import { FaTimes} from 'react-icons/fa'

class EditExperience extends Component {
  render() {
      const {experienceProps, editExperience, editTopicTitle, editTopicDescription, removeExpCategory, addExpCategory} = this.props;
    return (
      <div>
          <h2>Experience</h2>
            <p>Title</p>
            <input name="title" maxLength="30" defaultValue={experienceProps.title} onChange={(e) => editExperience(e)}></input>
            <p>Location (city and state)</p>
            <input name="location" maxLength="21" defaultValue={experienceProps.location} onChange={(e) => editExperience(e)}></input>
            <p>Start Date (month and year)</p>
            <input name="start" maxLength="14" defaultValue={experienceProps.start} onChange={(e) => editExperience(e)}></input>
            <p>End Date (month and year)</p>
            <input name="end" maxLength="14" defaultValue={experienceProps.end} onChange={(e) => editExperience(e)}></input>
            <hr></hr>
            <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
              <p style={{fontWeight:"700"}}>Categories</p>
              <p onClick={() => addExpCategory()}>+ Add New Category</p>
            </div>
            {experienceProps.topics.map(topic =>
                <div className="editExpCategory">
                    <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}> 
                        <input type="text" maxLength="40" defaultValue={topic.title} style={{width:"50%"}} onChange={(e) => editTopicTitle(e,topic.id)}></input>
                        <FaTimes 
                            style={{color:'gray',cursor:'pointer'}} onClick={() => removeExpCategory(experienceProps.topics.indexOf(topic))} 
                        />
                    </div>
                    <textarea type="text" maxLength="220" className="expInput" defaultValue={topic.description} onChange={(e) => editTopicDescription(e,topic.id)}></textarea>
                    <hr></hr>
                </div>
            )}
        </div>
    )
  }
}

export default EditExperience