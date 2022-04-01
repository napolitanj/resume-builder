import React, { Component } from 'react'
import Header from './previewComponents/Header'
import PreviewExperience from './previewComponents/PreviewExperience'

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
                        title={this.experience.title} 
                        location={this.experience.location} 
                        start={this.experience.start} 
                        end={this.experience.end}
                        />
                    </div>
                    <div className="previewBodyElement">
                        <p>Employment</p>
                        <hr></hr>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in aliquet metus, non fermentum arcu. Integer tempus nibh eu urna tincidunt lacinia.</p>
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
