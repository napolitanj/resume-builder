import React, { Component } from 'react'
import uniqid from 'uniqid'

class AddWebsite extends Component {
    constructor(props) {
        super(props);
        this.state={
            url: '',
            id: uniqid()
        }
    }

  render() {
    const {websites, submitNew, setAddWeb} = this.props;

    const onSubmit = (e) => {
        e.preventDefault()

        if(this.state.url === '') {
            alert("Please enter a web address")
            return
        }

        this.setState({url:''})
        submitNew(this.state.url)
        setAddWeb()
    }

    return (
      <div>
        <form onSubmit={onSubmit} className="addWeb">
            <input 
            type="text"
            placeholder="Enter URL" 
            value={this.state.url}
            maxLength="35"
            onChange={(e) => this.setState({url:e.target.value})}
            />
            <input 
            style={{width:"50%"}} 
            type='submit' 
            value='Submit' 
            />
        </form>
      </div>
    )
  }
}

export default AddWebsite;