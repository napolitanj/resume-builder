import React, { Component } from 'react'

class Header extends Component {
  render() {
      const {firstName, lastName, title} = this.props;
    return (
      <div className="previewHeader">
          <h2>{firstName}{' '}{lastName}</h2>
          <h3>{title}</h3>
        </div>
    )
  }
}

export default Header;