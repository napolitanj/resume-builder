import React, { Component } from 'react'

export default class EditSkills extends Component {
  render() {
      const {mainProps} = this.props
    return (
      <div>
            <h2>Skills</h2>
            <hr style={{width:"100%", marginTop:"15px"}}></hr>
            {mainProps.skills.map(category => 
                <div className="editExpCategory">
                    <h3>Category title</h3>
                    <input value={category.title}></input>
                    <h3>Skill list</h3>
                    {category.skillList.map(skill =>
                        <p>{skill}</p>
                    )}
                    <button>Remove</button>
                    <hr style={{width:"100%", marginTop:"15px"}}></hr>
                </div>
            )}
      </div>
    )
  }
}
