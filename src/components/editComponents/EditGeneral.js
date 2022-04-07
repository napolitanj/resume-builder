import React, { Component } from 'react'
import AddWebsite from './AddWebsite'
import { FaTimes} from 'react-icons/fa'

class EditGeneral extends Component {
  render() {
      const {general, changeGeneral, addWeb, setAddWeb, websites, submitNewWebsite, deleteWebsite} = this.props;
    return (
      <div>
          <h2>General Info</h2>
            <p>First Name</p>
            <input name="firstName" value={general.firstName} onChange={(e) => changeGeneral(e)}></input>
            <p>Last Name</p>
            <input name="lastName" value={general.lastName} onChange={(e) => changeGeneral(e)}></input>
            <p>Title</p>
            <input name="title" value={general.title} onChange={(e) => changeGeneral(e)}></input>
            <p>City</p>
            <input name="city" value={general.city} onChange={(e) => changeGeneral(e)}></input>
            <p>Phone</p>
            <input name="phone" value={general.phone} onChange={(e) => changeGeneral(e)}></input>
            <p>Email</p>
            <input name="email" value={general.email} onChange={(e) => changeGeneral(e)}></input>
            <hr></hr>
            <p style={{fontWeight:"700"}}>Web pages</p>
            {general.websites.map(site => <p>{site.text} 
              <FaTimes 
              style={{color:'gray',cursor:'pointer'}} 
              onClick={() => deleteWebsite(site.id)}
              />
            </p>)}
            <hr></hr>
            <div style={{marginTop:"20px"}}>
              <button onClick={() => setAddWeb()}>Add a website</button>
              {addWeb && <AddWebsite 
              websites={websites} 
              submitNew={submitNewWebsite}
              setAddWeb={setAddWeb}
              />}
            </div>
        </div>
    )
  }
}

export default EditGeneral