import React, { Component } from 'react'

class PreviewEducation extends Component {
  render() {
      const {degree, school, location, start, end} = this.props
    return (
      <div>
            <h3>{degree}</h3>
            <div className="educationSubText">
                <p>{school}</p>
                <p style={{color:"#73808D"}}>{start} - {end} | {location}</p>
            </div>
      </div>
    )
  }
}

export default PreviewEducation;