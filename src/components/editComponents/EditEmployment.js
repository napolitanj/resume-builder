import React, { Component } from 'react'
import { FaTimes} from 'react-icons/fa'

class EditEmployment extends Component {
    render() {
        const {mainProps, editEmployment, editDuty, deleteDuty, addNewDuty, deleteJob} = this.props;
      return (
        <div>
            <h2>Employment</h2>
            <hr style={{width:"100%", marginTop:"15px"}}></hr>
            {mainProps.employmentInfo.map(job =>
                <div className="editExpCategory">
                    <p>Position</p> 
                    <input key={job.position} type="text" maxLength="60" defaultValue={job.position} onChange={(e) => editEmployment(e,job.id, 'position')}></input>
                    <p>Employer</p>
                    <input key={job.employer} type="text" maxLength="35" defaultValue={job.employer} onChange={(e) => editEmployment(e,job.id,'employer')}></input>
                    <p>Location</p>
                    <input key={job.location} type="text" maxLength="21" defaultValue={job.location} onChange={(e) => editEmployment(e,job.id, 'location')}></input>
                    <p>Start (month and year)</p>
                    <input key={job.start} type="text" maxLength="14" defaultValue={job.start} onChange={(e) => editEmployment(e,job.id, 'start')}></input>
                    <p>End (month and year)</p>
                    <input key={job.end} type="text" maxLength="14" defaultValue={job.end} onChange={(e) => editEmployment(e,job.id, 'end')}></input>
                    <div style={{display:"flex", alignItems:"center", gap:"5px"}}>
                        <p >Duties</p>
                        <p style={{color:'gray',cursor:'pointer'}} onClick={() => addNewDuty(mainProps.employmentInfo.indexOf(job))}>+ Add New</p>
                    </div>
                    {job.duties.map(duty =>
                    <div key={duty} style={{display:"flex", alignItems:"center", gap:"5px"}}>
                        <textarea type="text" maxLength="170" className="expInput" defaultValue={duty} onChange={(e) => editDuty(e,mainProps.employmentInfo.indexOf(job),job.duties.indexOf(duty))}></textarea>
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