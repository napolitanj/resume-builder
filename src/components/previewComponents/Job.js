import React, { Component } from 'react'

class Job extends Component {
  render() {
    const {employer, location, position, start, end, duties} = this.props
    return (
      <div>
            <h3 style={{marginTop:'20px', marginBottom:'-5px'}}>{position}</h3>
            <div className="jobSubHeader">
                <p style={{fontSize:'14px'}}>{employer}</p>
                <p style={{color:"#73808D"}}>{start} - {end} | {location}</p>
            </div>
            {duties.map((duty) => (
                <li className="duty">{duty}</li>
            ))}
      </div>
    )
  }
}

export default Job;
