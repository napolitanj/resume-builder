import React, { Component } from 'react'
import PreviewMode from './PreviewMode'
import EditMode from './EditMode'
import EditTab from './editComponents/EditTab'

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //editMode false is preview mode, editMode true is editMode
      editMode: false,
      addWebsite:false,
      activeTab:3,
      generalInfo: {
        firstName: 'Joe',
        lastName: 'Dirt',
        title: "Front End Developer",
        city: 'Tuscon, AZ',
        phone: '235-646-2423',
        email: 'joedirt@gmail.com',
        websites: [
          {
            id:1,
            text: "www.joedirt.com"
          }
        ]
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
          id: Math.floor(Math.random() * 10000)+1,
          employer: "Gas Station",
          location: "Westminster, CO",
          position: "Attendant - Slinger of Gas",
          start: "Nov 2018",
          end: "April 2021",
          duties: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Integer in aliquet metus, non fermentum arcu.",
            "Integer in aliquet metus, non fermentum arcu. Integer tempus nibh eu urna tincidunt lacinia."
          ]
        },
        {
          id: Math.floor(Math.random() * 10000)+1,
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

  //Delete later
  logFields = () => {
    const {firstName} = this.state.generalInfo;
    console.log({firstName})
  }

  //GeneralInfo Editting
  changeGeneral = (e) => {
    const {name,value} = e.target;
    this.setState({
      generalInfo: {
        ...this.state.generalInfo,
        [name]: value
      }
    });
  }
  setAddWeb = () => {
    this.setState(prevState => ({
      addWebsite: !prevState.addWebsite
    }))
  }
  submitNewWebsite = (newSite, callback) => {
    this.setState(prevState => ({
      generalInfo: {
        ...prevState.generalInfo,
        websites: [...prevState.generalInfo.websites, newSite]
      }
    }))
  }
  deleteWebsite = (id) => {
    this.setState(prevState => ({
      generalInfo: {
        ...prevState.generalInfo,
        websites: [...prevState.generalInfo.websites.filter((website) => website.id !== id)]
      }
    }))
  }

  //Experience Editting
  editExperience = (e) => {
    const {name,value} = e.target;
    this.setState({
      experience: {
        ...this.state.experience,
        [name]: value
      }
    });
  }
  editTopicTitle = (e, id) => {
    const allPreviousTopics = [...this.state.experience.topics]
    const getArray = allPreviousTopics.filter(topic => {
      if (topic.id === id)
      return topic
    })
    const objectToBeModified = getArray[0]
    const getIndex = allPreviousTopics.indexOf(objectToBeModified)
    objectToBeModified.title = e.target.value
    allPreviousTopics[getIndex] = objectToBeModified

    this.setState({
      experience: {
        ...this.state.experience,
        topics: allPreviousTopics
      }
    })
  }
  editTopicDescription = (e, id) => {
    const allPreviousTopics = [...this.state.experience.topics]
    const getArray = allPreviousTopics.filter(topic => {
      if (topic.id === id)
      return topic
    })
    const objectToBeModified = getArray[0]
    const getIndex = allPreviousTopics.indexOf(objectToBeModified)
    objectToBeModified.description = e.target.value
    allPreviousTopics[getIndex] = objectToBeModified

    this.setState({
      experience: {
        ...this.state.experience,
        topics: allPreviousTopics
      }
    })
  }
  
  //Employment Editting
  editEmployment = (e, id, jobProp) => {
    const previousEmployment = [...this.state.employmentInfo]
    const getArray = previousEmployment.filter(job => {
      if (job.id === id)
      return job
    })
    const jobToModify = getArray[0]
    const getIndex = previousEmployment.indexOf(jobToModify)
    const getKey = Object.keys(jobToModify).filter(key => {
      if (key === jobProp)
      return key
    })
    jobToModify[getKey[0]] = e.target.value
    previousEmployment[getIndex] = jobToModify

    this.setState({
      employment: {
        previousEmployment
      }
    })
  }
  editDuty = (e, parent, index) => {
    const previousEmployment = this.state.employmentInfo
    const arrayToModify = previousEmployment[parent]
    const dutyToModify = arrayToModify.duties[index]
    const getIndex = arrayToModify.duties.indexOf(dutyToModify)
    arrayToModify.duties[getIndex] = e.target.value
    previousEmployment[parent].duties[index] = e.target.value

    this.setState({
      employment: {
        previousEmployment
      }
    })

  }
  deleteDuty = (parent,index) => {
    const previousEmployment = this.state.employmentInfo
    const textToFilter = previousEmployment[parent].duties[index]
    const filteredEmployment = previousEmployment[parent].duties.filter(duty => duty !== textToFilter)
    previousEmployment[parent].duties = filteredEmployment
    this.setState({
      employment : {
        previousEmployment
      }
    })
  }
  addNewDuty = (index) => {
    const previousEmployment = this.state.employmentInfo
    previousEmployment[index].duties.push('')
    console.log(this.state)
    this.setState({
      employment: {
        previousEmployment
      }
    })
  }
  deleteJob = (index) => {
    const previousEmployment = this.state.employmentInfo
    previousEmployment.splice(index,1)
    console.log(previousEmployment)
    this.setState({
      employment:
        previousEmployment
    })
  }


  //education Change
  changeEducation = (e) => {
    const {name,value} = e.target;
    this.setState({
      education: {
        ...this.state.education,
        [name]: value
      }
    });
  }
  //skills Change
  changeSkills = (e) => {
    const {name,value} = e.target;
    this.setState({
      skills: {
        ...this.state.skills,
        [name]: value
      }
    });
  }



  render() {
    return (
      <div className="mainBody">
        <div>
          <div className="editTabs">
            <EditTab tabName={"Gen"} />
            <EditTab tabName={"Exp"} />
            <EditTab tabName={"Emp"} />
            <EditTab tabName={"Edu"} />
            <EditTab tabName={"Skil"} />
          </div>
            <EditMode 
              mainProps={this.state} 
              setAddWeb={this.setAddWeb} 
              changeGeneral={this.changeGeneral}
              submitNewWebsite={this.submitNewWebsite}
              deleteWebsite={this.deleteWebsite}
              editCategory={this.editCategory}
              editTopicTitle={this.editTopicTitle}
              editTopicDescription={this.editTopicDescription}
              editExperience={this.editExperience}
              editEmployment={this.editEmployment}
              editDuty={this.editDuty}
              deleteDuty={this.deleteDuty}
              addNewDuty={this.addNewDuty}
              deleteJob={this.deleteJob}
            /> 
        </div>
        <PreviewMode generalInfo={this.state.generalInfo} experience={this.state.experience} employmentInfo={this.state.employmentInfo} education={this.state.education} skills={this.state.skills}/>
      </div>
    )
  }
}

export default Main
