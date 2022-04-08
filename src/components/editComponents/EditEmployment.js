import React, { Component } from 'react'
import { FaTimes} from 'react-icons/fa'

class EditEmployment extends Component {
    render() {
        const {mainProps, editEmployment, editDuty, deleteDuty, addNewDuty} = this.props;
      return (
        <div>
            <h2>Employment</h2>
            <hr style={{width:"100%", marginTop:"15px"}}></hr>
            {mainProps.employmentInfo.map(job =>
                <div className="editExpCategory">
                    <p>Position</p>
                    <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}> 
                        <input type="text" maxLength="60" defaultValue={job.position} style={{width:"85%"}} onChange={(e) => editEmployment(e,job.id, 'position')}></input>
                        <FaTimes 
                            style={{color:'gray',cursor:'pointer'}} 
                        />
                    </div>
                    <p>Employer</p>
                    <input type="text" maxLength="35" defaultValue={job.employer} onChange={(e) => editEmployment(e,job.id,'employer')}></input>
                    <p>Location</p>
                    <input type="text" maxLength="21" defaultValue={job.location} onChange={(e) => editEmployment(e,job.id, 'location')}></input>
                    <p>Start (month and year)</p>
                    <input type="text" maxLength="14" defaultValue={job.start} onChange={(e) => editEmployment(e,job.id, 'start')}></input>
                    <p>End (month and year)</p>
                    <input type="text" maxLength="14" defaultValue={job.end} onChange={(e) => editEmployment(e,job.id, 'end')}></input>
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
                    <hr style={{width:"100%", marginTop:"15px"}}></hr>
                </div>
            )}
        </div>
    )
  }
}

export default EditEmployment