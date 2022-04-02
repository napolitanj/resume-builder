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
                        <p>Experience</p>
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
                        <p>Employment</p>
                        <hr></hr>
                        <PreviewEmployment
                        jobs={employmentInfo}
                        />
                    </div>
                    <div className="previewBodyElement">
                        <p>Education</p>
                        <hr></hr>
                        {education.map((edu) => (
                        <PreviewEducation
                        key = {edu.id} 
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
                        <p>{generalInfo.email}</p>
                        <p>{generalInfo.phone}</p>
                        <p>{generalInfo.city}</p>
                    </div>
                    <div>
                        <p>Web</p>
                        {generalInfo.websites.map((site) => (
                            <p>{site}</p>
                        ))}
                    </div>
                    <div className="skills">
                        {skills.map((skill) => (
                            <Skill 
                            key={skill.id} 
                            category={skill.category} 
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
