import React, { Component } from 'react'

class ExperienceTopic extends Component {
  render() {
      const {title, description} = this.props;
    return (
      <div className="experienceTopic">
          <p className="experienceSubTitle">{title}</p>
          <p>{description}</p>
      </div>
    )
  }
}

export default ExperienceTopic;
