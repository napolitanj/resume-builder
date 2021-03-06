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
      activeTab:1,
      generalInfo: {
        firstName: 'Jon',
        lastName: 'Doe',
        title: "My Professional Title",
        city: 'New York, NY',
        phone: '235-646-2473',
        email: 'johndoe@gmail.com',
        websites: [
          "www.johndoe.com",
          "github.com/johndoe"
        ]
      },
      experience: {
        title: "App I Created",
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
          employer: "Business Name",
          location: "Denver, CO",
          position: "My Position at This Company",
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
          employer: "Workplace Name",
          location: "Workplace Location",
          position: "Position",
          start: "Start Date",
          end: "End Date",
          duties: [
            "Responsibilities...",
            "Responsibilities...",
            "Responsibilities..."
          ],
        },
      ],
      education: [
        {
          degree: "The Degree or Certification I Earned",
          school: "The School I Studied At",
          location: "Remote",
          start: "Sept 2021",
          end: "Ongoing",
        },
        {
          degree: "B.S. Group Social Studies",
          school: "Michigan State University",
          location: "East Lansing, MI",
          start: "Sept 2021",
          end: "Ongoing",
        },
        {
          degree: "Leadership School",
          school: "National Outdoor Leadership School",
          location: "Lander, WY",
          start: "Sept 2021",
          end: "Ongoing",
        },
      ],
      skills: [
        {
          title: "Languages",
          skillList: ["Javascript ES6", "HTML", "CSS"]
        },
        {
          title: "Tools",
          skillList: ["Gmail","Microsoft Office","Figma","Canva","Squarespace","Wordpress","Github","Gmail","Microsoft Office","Figma","Canva","Squarespace","Wordpress","Git","Github"]
        },
        {
          title: "Other Relevant Skills for This Job",
          skillList: ["Leadership","Conflict Resolution","Problem Solving","Risk Management"]
        },  
      ]
    }
  }

  //Toggle category in edit window
  editCategory =(e) => {
    this.setState({
      activeTab: e
    })
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
  deleteWebsite = (site) => {
    this.setState(prevState => ({
      generalInfo: {
        ...prevState.generalInfo,
        websites: [...prevState.generalInfo.websites.filter((website) => website !== site)]
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
  removeExpCategory = (index) => {
    const previousTopics = this.state.experience.topics
    previousTopics.splice(index, 1)
    this.setState({
      experience: {
        topics: previousTopics
      }
    })
  }
  addExpCategory = () => {
    this.setState({
      experience: {
        ...this.state.experience,
        topics: [...this.state.experience.topics, {}]
      }
    })
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
    this.setState({
      employment: {
        previousEmployment
      }
    })
  }
  deleteJob = (index) => {
    const previousEmployment = this.state.employmentInfo
    previousEmployment.splice(index,1)
    this.setState({
      employment:
        previousEmployment
    })
  }
  addNewEmployment = () => {
    const previousEmployment = this.state.employmentInfo
    const newObject = {
      id: Math.floor(Math.random() * 10000)+1,
      position: '',
      employer: '',
      location: '',
      start:'',
      end:'',
      duties: ["",""]
    }
    previousEmployment.push(newObject)
    this.setState({
      emplyoment: previousEmployment
    })
  }

  //Education Editting
  editEducation = (e, index) => {
    const previousEducation = this.state.education
    const schoolToEdit = previousEducation[index]
    schoolToEdit[e.target.name] = e.target.value
    previousEducation[index] = schoolToEdit

    this.setState({
      education: 
        previousEducation
    })
  }
  deleteEducation = (index) => {
    const previousEducation = this.state.education
    previousEducation.splice(index,1)
    this.setState({
      education: previousEducation
    })
  }
  addNewEducation = (index) => {
    const previousEducation = this.state.education
    previousEducation.push([])
    this.setState({
      education: previousEducation
    })
  }

  //Skill Editting
  changeSkill = (e,parent,index) => {
    const previousSkills = this.state.skills
    previousSkills[parent].skillList[index] = e.target.value
    this.setState({
      skills: previousSkills
    })
  }
  deleteSkill = (parent,index) => {
    const previousSkills = this.state.skills
    const skillToDelete = previousSkills[parent].skillList[index]
    const filteredSkillList = previousSkills[parent].skillList.filter(duty => duty !== skillToDelete)
    previousSkills[parent].skillList = filteredSkillList

    this.setState({
      skills : previousSkills
    })
  }
  changeTitle = (e, parent) => {
    const previousSkills = this.state.skills
    previousSkills[parent].title = e.target.value
    this.setState({
      skills: previousSkills
    })
  }
  deleteSkillCategory = (index) => {
    const previousSkills = this.state.skills
    previousSkills.splice(index,1)
    this.setState({
      skills: previousSkills
    })
  }
  addSkillCategory = () => {
    const previousSkills = this.state.skills
    const newObject = {
      title: "",
      skillList: ["", "", ""]
    }
    previousSkills.push(newObject)
    this.setState({
      skills: previousSkills
    })
  }
  addSkill = (e) => {
    const previousSkills = this.state.skills
    const categoryToEdit = previousSkills[e]
    categoryToEdit.skillList.push('')
    previousSkills[e] = categoryToEdit
    this.setState({
      skills: previousSkills
    })
  }


  render() {
    return (
      <div className="mainBody">
        <div>
          <div className="editTabs">
            <EditTab tabName={"General"} editCategory={this.editCategory} changeValue={1}/>
            <EditTab tabName={"Experience"} editCategory={this.editCategory} changeValue={2}/>
            <EditTab tabName={"Employment"} editCategory={this.editCategory} changeValue={3}/>
            <EditTab tabName={"Education"} editCategory={this.editCategory} changeValue={4}/>
            <EditTab tabName={"Skills"} editCategory={this.editCategory} changeValue={5}/>
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
              removeExpCategory={this.removeExpCategory}
              addExpCategory={this.addExpCategory}
              editEmployment={this.editEmployment}
              editDuty={this.editDuty}
              deleteDuty={this.deleteDuty}
              addNewDuty={this.addNewDuty}
              deleteJob={this.deleteJob}
              addNewEmployment={this.addNewEmployment}
              editEducation={this.editEducation}
              deleteEducation={this.deleteEducation}
              addNewEducation={this.addNewEducation}
              changeSkill={this.changeSkill}
              deleteSkill={this.deleteSkill}
              addSkill={this.addSkill}
              addSkillCategory={this.addSkillCategory}
              changeTitle={this.changeTitle}
              deleteSkillCategory={this.deleteSkillCategory}
            /> 
        </div>
        <div >
          <PreviewMode generalInfo={this.state.generalInfo} experience={this.state.experience} employmentInfo={this.state.employmentInfo} education={this.state.education} skills={this.state.skills}/>
        </div>
      </div>
    )
  }
}

export default Main
