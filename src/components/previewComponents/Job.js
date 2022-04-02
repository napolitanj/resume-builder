import React, { Component } from 'react'

class Job extends Component {
  render() {
    const {employer, location, position, start, end, duties} = this.props
    return (
      <div>
            <h3>{position}</h3>
            <div className="jobSubHeader">
                <p>{employer}</p>
                <p>{start} - {end} | {location}</p>
            </div>
            {duties.map((duty) => (
                <p className="duty">{duty}</p>
            ))}
      </div>
    )
  }
}

export default Job;
