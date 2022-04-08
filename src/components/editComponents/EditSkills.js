import React, { Component } from 'react'
import { FaTimes} from 'react-icons/fa'


export default class EditSkills extends Component {
  render() {
      const {mainProps, changeSkill} = this.props
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
                        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                            <input value={skill} onChange={(e) => changeSkill(e,mainProps.skills.indexOf(category),category.skillList.indexOf(skill))}></input>
                            <FaTimes 
                            style={{color:'gray',cursor:'pointer'}} 
                        />
                        </div>
                    )}
                    <button style={{marginTop:"8px"}}>Remove</button>
                    <hr style={{width:"100%", marginTop:"15px"}}></hr>
                </div>
            )}
      </div>
    )
  }
}
