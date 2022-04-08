import React, { Component } from 'react'

class EditEducation extends Component {
  render() {
      const {mainProps, editEducation, deleteEducation} = this.props
    return (
      <div>
        <h2>Education</h2>
            <hr style={{width:"100%", marginTop:"15px"}}></hr>
            {mainProps.education.map(school =>
                <div className="editExpCategory">
                    <p>Degree/Certification</p>
                    <input name="degree" maxLength="35" value={school.degree} onChange={(e) => editEducation(e, mainProps.education.indexOf(school))}></input>
                    <p>School Name</p>
                    <input name="school" maxLength="45" value={school.school} onChange={(e) => editEducation(e, mainProps.education.indexOf(school))}></input>
                    <p>School Location</p>
                    <input name="location" maxLength="21" value={school.location} onChange={(e) => editEducation(e, mainProps.education.indexOf(school))}></input>
                    <p>Start</p>
                    <input name="start" maxLength="14" value={school.start} onChange={(e) => editEducation(e, mainProps.education.indexOf(school))}></input>
                    <p>End</p>
                    <input name="end" maxLength="14" value={school.end}  onChange={(e) => editEducation(e, mainProps.education.indexOf(school))}></input>
                    <button style={{marginTop:"10px"}} onClick={() => deleteEducation(mainProps.education.indexOf(school))}>Delete</button>
                    <hr style={{width:"100%", marginTop:"15px"}}></hr>
                </div>
            )}
        </div>
    )
  }
}

export default EditEducation