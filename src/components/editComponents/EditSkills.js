import React, { Component } from 'react'
import { FaTimes} from 'react-icons/fa'


export default class EditSkills extends Component {
  render() {
      const {mainProps, changeSkill, deleteSkill, changeTitle, addSkill, deleteSkillCategory} = this.props
    return (
      <div>
            <h2>Skills</h2>
            <h3 style={{cursor:"pointer"}} onClick={() => addSkill()}>+ Add New</h3>

            <hr style={{width:"100%", marginTop:"15px"}}></hr>
            {mainProps.skills.map(category => 
                <div className="editExpCategory">
                    <h3>Category title</h3>
                    <input value={category.title} onChange={(e) => changeTitle(e,mainProps.skills.indexOf(category))}></input>
                    <h3>Skill list</h3>
                    {category.skillList.map(skill =>
                        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                            <input value={skill} onChange={(e) => changeSkill(e,mainProps.skills.indexOf(category),category.skillList.indexOf(skill))}></input>
                            <FaTimes style={{color:'gray',cursor:'pointer'}} onClick={() => deleteSkill(mainProps.skills.indexOf(category),category.skillList.indexOf(skill))} 
                        />
                        </div>
                    )}
                    <button style={{marginTop:"8px"}} onClick={() => deleteSkillCategory(mainProps.skills.indexOf(category))}>Remove</button>
                    <hr style={{width:"100%", marginTop:"15px"}}></hr>
                </div>
            )}
      </div>
    )
  }
}
