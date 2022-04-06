import React, { Component } from 'react'
import AddWebsite from './AddWebsite'
import { FaTimes} from 'react-icons/fa'

class EditExperience extends Component {
  render() {
      const {changeExperience, topics} = this.props;
    return (
      <div>
          <h2>Experience</h2>
            <p>Title</p>
            <input name="title" onChange={(e) => changeExperience(e)}></input>
            <p>Location</p>
            <input name="location" onChange={(e) => changeExperience(e)}></input>
            <p>Start Date</p>
            <input name="start" onChange={(e) => changeExperience(e)}></input>
            <p>End Date</p>
            <input name="end" onChange={(e) => changeExperience(e)}></input>
            <hr></hr>
            <p style={{fontWeight:"700"}}>Categories</p>
            {topics.map(topic => <p>{topic.title}</p>)}
        </div>
    )
  }
}

export default EditExperience