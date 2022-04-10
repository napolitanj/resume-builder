import React, { Component } from 'react'
import Header from './previewComponents/Header'
import PreviewExperience from './previewComponents/PreviewExperience'
import PreviewEmployment from './previewComponents/PreviewEmployment'
import PreviewEducation from './previewComponents/PreviewEducation'
import Skill from './previewComponents/Skill'


class PreviewMode extends Component {
  render() {
    const {generalInfo, experience, employmentInfo, education, skills} = this.props
    return (
        <div className="previewWindow">
            <Header firstName={generalInfo.firstName} lastName={generalInfo.lastName} title={generalInfo.title} />
            <div className="previewBody">
                <div className="previewMainBody">
                    <div className="previewBodyElement">
                        <p className="categoryHeader">Experience</p>
                        <hr></hr>
                        <PreviewExperience 
                        title={experience.title} 
                        location={experience.location} 
                        start={experience.start} 
                        end={experience.end}
                        topics={experience.topics}
                        />
                    </div>
                    <div className="previewBodyElement">
                        <p className="categoryHeader">Employment</p>
                        <hr></hr>
                        <PreviewEmployment
                        jobs={employmentInfo}
                        />
                    </div>
                    <div className="previewBodyElement">
                        <p className="categoryHeader">Education</p>
                        <hr></hr>
                        {education.map((edu) => (
                        <PreviewEducation 
                        degree = {edu.degree}
                        school = {edu.school}
                        location = {edu.location}
                        start = {edu.start}
                        end = {edu.end}
                        />
                        ))}
                    </div>
                </div>
                <div className="previewSecondaryBody">
                    <div className="secondaryGeneralInfo">
                        <p style={{marginBottom:"-8px"}}>{generalInfo.email}</p>
                        <p style={{marginBottom:"-8px"}}>{generalInfo.phone}</p>
                        <p style={{marginBottom:"-6px"}}>{generalInfo.city}</p>
                        <div style={{marginTop:"22px"}}>
                            <p style={{fontWeight:700, fontSize:"15px", marginBottom:"-10px"}}>Web</p>
                            {generalInfo.websites.map((site) => (
                                <p style={{marginBottom:"-10px"}}>{site}</p>
                            ))}
                        </div>
                    </div>
                    <div className="skills">
                        {skills.map((skill) => (
                            <Skill 
                            category={skill.title} 
                            list={skill.skillList} 
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

export default PreviewMode;
