import React, { Component } from 'react'
import PreviewMode from './PreviewMode'

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //editMode false is preview mode, editMode true is editMode
      editMode: false,
      generalInfo: {
        id: 1,
        firstName: 'Joe',
        lastName: 'Dirt',
        title: "Front End Developer",
        address: '1234 Hillbilly Ln.',
        phone: '235-646-2423',
        email: 'joedirt@gmail.com',
        websites: {
          web1: "github.com/dirtyjoe",
          web2: "www.shootfireworksatit.org"
        }
      },
      experience: {
        id: 2,
        title: "The Odin Project",
        location: "Remote",
        start: "Sept 2021",
        end: "Present",
        topic1: {
          topic: "React",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in aliquet metus, non fermentum arcu. Integer tempus nibh eu urna tincidunt lacinia.",
          id: Math.floor(Math.random() * 10000)+1
        },
        topic2: {
          topic: "Javascript",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in aliquet metus, non fermentum arcu. Integer tempus nibh eu urna tincidunt lacinia.",
          id: Math.floor(Math.random() * 10000)+1
        },
        topic3: {
          topic: "HTML/CSS",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in aliquet metus, non fermentum arcu. Integer tempus nibh eu urna tincidunt lacinia.",
          id: Math.floor(Math.random() * 10000)+1
        }
      },
      employmentInfo:{
        id: 3,
        job1: {
          employer: "Gas Station",
          location: "CO",
          position: "Attendant",
          start: "Nov 2018",
          end: "April 2021",
          responsibilities: [
            "Fill up gas for the people",
            "Sell candy bars and sodas / give people diabetes",
            "Devour tornados all day"
          ],
          id: Math.floor(Math.random() * 10000)+1
        },
        job2: {
          employer: "Shoe-topia",
          location: "Santa Fe, NM",
          position: "Salesman",
          start: "Nov 2015",
          end: "April 2020",
          responsibilities: [
            "Learn about which shoes are the best",
            "Put them on people's feet",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in aliquet metus, non fermentum arcu. Integer tempus nibh eu urna tincidunt lacinia."
          ],
          id: Math.floor(Math.random() * 10000)+1
        },
      },
      education: {
        id: 4,
        education1: {
          degree: "Full Stack Web Development",
          location: "Remote",
          start: "Sept 2021",
          end: "Ongoing",
          id: Math.floor(Math.random() * 10000)+1
        },
        education2: {
          degree: "Full Stack Web Development",
          location: "Remote",
          start: "Sept 2021",
          end: "Ongoing",
          id: Math.floor(Math.random() * 10000)+1
        },
        education3: {
          degree: "Full Stack Web Development",
          location: "Remote",
          start: "Sept 2021",
          end: "Ongoing",
          id: Math.floor(Math.random() * 10000)+1
        },
      },
      skills: [
        {
          category: "Languages",
          skillList: ["Javascript ES6", "HTML", "CSS"]
        },
        {
          category: "Tools",
          skillList: ["Javascript ES6", "HTML", "CSS","Javascript ES6", "HTML", "CSS","Javascript ES6", "HTML", "CSS"]
        },  
      ]
    }
  }
  render() {
    return (
      <div className="mainBody"> 
        <PreviewMode generalInfo={this.state.generalInfo} experience={this.state.experience} employmentInfo={this.state.employmentInfo} education={this.state.education} skills={this.state.skills}/>
      </div>
    )
  }
}

export default Main
