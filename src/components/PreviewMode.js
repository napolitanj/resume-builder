import React, { Component } from 'react'
import Header from './previewComponents/Header'

class PreviewMode extends Component {
  render() {
    const {generalInfo, experience, employmentInfo, education, skills} = this.props
    return (
        <div className="previewWindow">
            <Header firstName={generalInfo.firstName} lastName={generalInfo.lastName} title={generalInfo.title} />
            <div className="previewBody">
                <div className="previewMainBody">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in aliquet metus, non fermentum arcu. Integer tempus nibh eu urna tincidunt lacinia.</p>
                </div>
                <div className="previewSkillsBody">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in aliquet metus, non fermentum arcu. Integer tempus nibh eu urna tincidunt lacinia.</p>
                </div>
            </div>
        </div>
    )
  }
}

export default PreviewMode;
