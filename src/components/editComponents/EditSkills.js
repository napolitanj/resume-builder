import React, { Component } from 'react'
import { FaTimes} from 'react-icons/fa'


export default class EditSkills extends Component {
  render() {
      const {mainProps, changeSkill, deleteSkill, changeTitle, addSkill, addSkillCategory, deleteSkillCategory} = this.props
    return (
      <div>
            <h2>Skills</h2>
            <h3 style={{cursor:"pointer"}} onClick={() => addSkillCategory()}>+ Add New</h3>

            <hr style={{width:"100%", marginTop:"15px"}}></hr>
            {mainProps.skills.map(category => 
                <div className="editExpCategory">
                    <h3>Category title</h3>
                    <input
                    maxLength="30" 
                    value={category.title} 
                    onChange={(e) => changeTitle(e,mainProps.skills.indexOf(category))}></input>
                    <div style={{
                      cursor:"pointer", 
                      display:"flex", 
                      justifyContent:"space-between", 
                      alignItems:"center"}} 
                      >
                      <h3>Skill list</h3>
                      <p onClick={() => addSkill(mainProps.skills.indexOf(category))}>+ Add New</p>
                    </div>
                    {category.skillList.map(skill =>
                        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                            <input maxLength="32" value={skill} onChange={(e) => changeSkill(e,mainProps.skills.indexOf(category),category.skillList.indexOf(skill))}></input>
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
