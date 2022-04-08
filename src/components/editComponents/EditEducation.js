import React, { Component } from 'react'

class EditEducation extends Component {
  render() {
      const {mainProps} = this.props
    return (
      <div>
        <h2>Education</h2>
            <hr style={{width:"100%", marginTop:"15px"}}></hr>
            {mainProps.education.map(school =>
                <div className="editExpCategory">
                    <p>Degree/Certification</p>
                    <input maxLength="60" value={school.degree}></input>
                    <p>School Name</p>
                    <input maxLength="60" value={school.school}></input>
                    <p>School Location</p>
                    <input maxLength="60" value={school.location}></input>
                    <p>Start</p>
                    <input maxLength="60" value={school.start}></input>
                    <p>End</p>
                    <input maxLength="60" value={school.end}></input>
                    <hr style={{width:"100%", marginTop:"15px"}}></hr>
                </div>
            )}
        </div>
    )
  }
}

export default EditEducation