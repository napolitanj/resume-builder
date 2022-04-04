import React, { Component } from 'react'
import PreviewMode from './PreviewMode'
import EditMode from './EditMode'


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //editMode false is preview mode, editMode true is editMode
      editMode: false,
      generalInfo: {
        firstName: 'Joe',
        lastName: 'Dirt',
        title: "Front End Developer",
        city: 'Tuscon, AZ',
        phone: '235-646-2423',
        email: 'joedirt@gmail.com',
        websites: ["github.com/dirtjoe", "www.shootfireworksatit.org"]
      },
      experience: {
        title: "The Odin Project",
        location: "Remote",
        start: "Sept 2021",
        end: "Present",
        topics: [
          {
            title: "React",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in aliquet metus, non fermentum arcu. Integer tempus nibh eu urna tincidunt lacinia.",
            id: Math.floor(Math.random() * 10000)+1
          },
          {
            title: "Javascript",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in aliquet metus, non fermentum arcu. Integer tempus nibh eu urna tincidunt lacinia.",
            id: Math.floor(Math.random() * 10000)+1
          },
          {
            title: "HTML/CSS",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in aliquet metus, non fermentum arcu. Integer tempus nibh eu urna tincidunt lacinia.",
            id: Math.floor(Math.random() * 10000)+1
          }
        ]
      },
      employmentInfo:[
        {
          employer: "Gas Station",
          location: "CO",
          position: "Attendant - Slinger of Gas",
          start: "Nov 2018",
          end: "April 2021",
          duties: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Integer in aliquet metus, non fermentum arcu.",
            "Integer in aliquet metus, non fermentum arcu. Integer tempus nibh eu urna tincidunt lacinia."
          ],
          id: Math.floor(Math.random() * 10000)+1
        },
        {
          employer: "Shoe-topia",
          location: "Santa Fe, NM",
          position: "Salesman",
          start: "Nov 2015",
          end: "April 2020",
          duties: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Integer in aliquet metus, non fermentum arcu.",
            "Integer in aliquet metus, non fermentum arcu. Integer tempus nibh eu urna tincidunt lacinia."
          ],
        },
      ],
      education: [
        {
          degree: "Full Stack Web Development",
          school: "The Odin Project",
          location: "Remote",
          start: "Sept 2021",
          end: "Ongoing",
          id: Math.floor(Math.random() * 10000)+1
        },
        {
          degree: "B.S. Group Social Studies",
          school: "Michigan State University",
          location: "East Lansing, MI",
          start: "Sept 2021",
          end: "Ongoing",
          id: Math.floor(Math.random() * 10000)+1
        },
        {
          degree: "Leadership School",
          school: "National Outdoor Leadership School",
          location: "Lander, WY",
          start: "Sept 2021",
          end: "Ongoing",
          id: Math.floor(Math.random() * 10000)+1
        },
      ],
      skills: [
        {
          category: "Languages",
          skillList: ["Javascript ES6", "HTML", "CSS"]
        },
        {
          category: "Tools",
          skillList: ["Javascript ES6", "HTML", "CSS","Javascript ES6", "HTML", "CSS","Javascript ES6", "HTML", "CSS"]
        },
        {
          category: "More Tools",
          skillList: ["Gmail","Microsoft Office","Figma","Canva","Squarespace","Wordpress","Git","Github","Gmail","Microsoft Office","Figma","Canva","Squarespace","Wordpress","Git","Github"]
        },  
      ]
    }
  }

  logFields = () => {
    const {firstName} = this.state.generalInfo;
    console.log({firstName})
  }

  handleChange = (e) => {
    const {name,value} = e.target;
    this.setState({
      generalInfo: {
        ...this.state.generalInfo,
        [name]: value
      }
    });
  }

  render() {
    return (
      <div className="mainBody">
        <EditMode handleChange={this.handleChange} generalInfo={this.state.generalInfo} experience={this.state.experience} employmentInfo={this.state.employmentInfo} education={this.state.education} skills={this.state.skills}/> 
        <PreviewMode generalInfo={this.state.generalInfo} experience={this.state.experience} employmentInfo={this.state.employmentInfo} education={this.state.education} skills={this.state.skills}/>
      </div>
    )
  }
}

export default Main
