import React, { Component } from 'react'
import ExperienceTopic from './ExperienceTopic'

class PreviewExperience extends Component {
  render() {
      const {title, location, start, end, topics} = this.props
    return (
      <div>
            <div className="experienceTitle">
                <h3>{title}</h3>
                <p>{start} - {end} | {location}</p>
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