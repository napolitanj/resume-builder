import React, { Component } from 'react'
import Job from './Job'

class PreviewEmployment extends Component {
  render() {
      const {jobs} = this.props
    return (
      <div>
          {jobs.map((job) => (
              <Job 
              key={job.id} 
              employer={job.employer} 
              location={job.location} 
              position={job.position} 
              start={job.start} 
              end={job.end} 
              duties={job.duties}
              /> 
          ))}
      </div>
    )
  }
}

export default PreviewEmployment;