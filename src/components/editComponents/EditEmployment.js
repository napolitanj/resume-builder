import React, { Component } from 'react'
import { FaTimes} from 'react-icons/fa'

class EditEmployment extends Component {
    render() {
        const {employmentProps} = this.props;
      return (
        <div>
            <h2>Employment</h2>
            <hr style={{width:"100%", marginTop:"15px"}}></hr>
            {employmentProps.map(job =>
                <div className="editExpCategory">
                    <p>Position</p>
                    <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}> 
                        <input type="text" maxLength="40" defaultValue={job.position} style={{width:"85%"}}></input>
                        <FaTimes 
                            style={{color:'gray',cursor:'pointer'}} 
                        />
                    </div>
                    <p>Employer</p>
                    <input type="text" maxLength="170" defaultValue={job.employer}></input>
                    <p>Location</p>
                    <input type="text" maxLength="170" defaultValue={job.location}></input>
                    <p>Start (month and year)</p>
                    <input type="text" maxLength="170" defaultValue={job.start}></input>
                    <p>End (month and year)</p>
                    <input type="text" maxLength="170" defaultValue={job.end}></input>
                    <p>Duties</p>
                    {job.duties.map(duty =>
                        <textarea type="text" maxLength="170" className="expInput" defaultValue={duty}></textarea>
                    )}
                    <hr style={{width:"100%", marginTop:"15px"}}></hr>
                </div>
            )}
        </div>
    )
  }
}

export default EditEmployment