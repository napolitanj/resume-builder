import React, { Component } from 'react'
import Header from './previewComponents/Header'
import PreviewExperience from './previewComponents/PreviewExperience'
import PreviewEmployment from './previewComponents/PreviewEmployment'

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
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in aliquet metus, non fermentum arcu. Integer tempus nibh eu urna tincidunt lacinia.</p>
                    </div>
                </div>
                <div className="previewSecondaryBody">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in aliquet metus, non fermentum arcu. Integer tempus nibh eu urna tincidunt lacinia.</p>
                </div>
            </div>
        </div>
    )
  }
}

export default PreviewMode;
