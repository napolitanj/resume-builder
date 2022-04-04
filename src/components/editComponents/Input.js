import React, { Component } from 'react'

class Input extends Component {
  render() {
    const {onChange} = this.props;
    console.log(onChange)
    return (
      <div>
          <input onChange={onChange}></input>
      </div>
    )
  }
}

export default Input;