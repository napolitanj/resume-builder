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
    }

    return (
      <div>
        <form onSubmit={onSubmit} className="addWeb">
            <input 
            type="url" 
            placeholder="Enter URL" 
            value={this.state.url} 
            onChange={(e) => this.setState({url:e.target.value})}
            />
            <input 
            style={{width:"50%"}} 
            type='submit' 
            value='Add website' 
            onClick={() => submitNew(this.state.url, setAddWeb())}
            />
        </form>
      </div>
    )
  }
}

export default AddWebsite;