import React, { Component } from 'react'

class AddWebsite extends Component {
    constructor(props) {
        super(props);
        this.state={
            url: ''
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
            pattern="[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)"
            title="mywebsite.com, www.mywebsite.org, https://website.net"    
            placeholder="Enter URL" 
            value={this.state.url} 
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