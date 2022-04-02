import React, { Component } from 'react'

class Skill extends Component {
  render() {
      const {category, list} = this.props

      const createList = () => {
          return list.join(', ')
      }
    return (
      <div>
          <h3>{category}</h3>
          <p>{createList()}</p>
      </div>
    )
  }
}

export default Skill;