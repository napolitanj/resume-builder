import React, { Component } from 'react'
import { FaTimes} from 'react-icons/fa'

class EditEmployment extends Component {
    render() {
        const {mainProps, addNewEmployment, editEmployment, editDuty, deleteDuty, addNewDuty, deleteJob} = this.props;
        const template = mainProps.employmentInfo[1]
      return (
        <div>
            <h2>Employment</h2>
            <h3 style={{cursor:"pointer"}} onClick={() => addNewEmployment(template)}>+ Add New</h3>
            <hr style={{width:"100%", marginTop:"15px"}}></hr>
            {mainProps.employmentInfo.map(job =>
                <div key={job}className="editExpCategory">
                    <p>Position</p>
                    <input maxLength="60" value={job.position} onChange={(e) => editEmployment(e,job.id, 'position')}></input>
                    <p>Employer</p>
                    <input maxLength="35" value={job.employer} onChange={(e) => editEmployment(e,job.id,'employer')}></input>
                    <p>Location</p>
                    <input maxLength="21" value={job.location} onChange={(e) => editEmployment(e,job.id, 'location')}></input>
                    <p>Start (month and year)</p>
                    <input maxLength="14" value={job.start} onChange={(e) => editEmployment(e,job.id, 'start')}></input>
                    <p>End (month and year)</p>
                    <input maxLength="14" value={job.end} onChange={(e) => editEmployment(e,job.id, 'end')}></input>
                    <div style={{display:"flex", alignItems:"center", gap:"5px"}}>
                        <p>Duties</p>
                        <p style={{color:'gray',cursor:'pointer'}} onClick={() => addNewDuty(mainProps.employmentInfo.indexOf(job))}>+ Add New</p>
                    </div>
                    {job.duties.map(duty =>
                    <div style={{display:"flex", alignItems:"center", gap:"5px"}}>
                        <textarea maxLength="170" className="expInput" value={duty} onChange={(e) => editDuty(e,mainProps.employmentInfo.indexOf(job),job.duties.indexOf(duty))}></textarea>
                        <FaTimes 
                            style={{color:'gray',cursor:'pointer'}} onClick={() => deleteDuty(mainProps.employmentInfo.indexOf(job),job.duties.indexOf(duty))} 
                        />
                    </div>
                    )}
                    <button style={{marginTop:"10px"}} onClick={() => deleteJob(mainProps.employmentInfo.indexOf(job))}>Remove Job</button>
                    <hr style={{width:"100%", marginTop:"15px"}}></hr>
                </div>
            )}
        </div>
    )
  }
}

export default EditEmployment