import React, { Component } from 'react'

class Skill extends Component {
  render() {
      const {category, list} = this.props

      const createList = () => {
          return list.join(', ')
      }
    return (
      <div>
          <p style={{fontWeight:700, fontSize:"14px", marginBottom:"-10px"}}>{category}</p>
          <p>{createList()}</p>
      </div>
    )
  }
}

export default Skill;