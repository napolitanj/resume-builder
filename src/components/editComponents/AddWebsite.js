import React, { Component } from 'react'

class AddWebsite extends Component {
    constructor(props) {
        super(props);
        this.state={
            url: ''
        }
    }

  render() {
    const {submitWeb} = this.props;

    const onSubmit = (e) => {
        e.preventDefault()

        if(this.state.url === '') {
            alert("Please enter a web address")
            return
        }
        submitWeb(this.state)

        this.setState({url:''})
    }

    return (
      <div>
        <form onSubmit={onSubmit}>
            <label>
                Wesbite
            </label>
            <input type="email" placeholder="Enter URL" value={this.state.url} onChange={(e) => this.setState({url:e.target.value})}></input>
            <input type='submit' value='Add website' />
        </form>
      </div>
    )
  }
}

export default AddWebsite;