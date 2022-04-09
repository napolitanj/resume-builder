import React, { Component } from 'react'
import ExperienceTopic from './ExperienceTopic'

class PreviewExperience extends Component {
  render() {
      const {title, location, start, end, topics} = this.props
    return (
      <div style={{marginBottom:"-10px"}}>
            <div className="experienceTitle">
                <h3 >{title}</h3>
                <div style={{overflowWrap:"wrap", textAlign:"right"}}>
                  <p style={{color:"#73808D"}}>{start} - {end} | {location}</p>
                </div>
            </div>
            <div>
                {topics.map((topic) => (
                    <ExperienceTopic title={topic.title} description={topic.description} key={topic.id}/>
                ))}
            </div>
      </div>
    )
  }
}

export default PreviewExperience;