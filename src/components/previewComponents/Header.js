import React, { Component } from 'react'

class Header extends Component {
  render() {
      const {firstName, lastName, title} = this.props;
    return (
      <div className="previewHeader">
          <p style={{fontSize:'24px', weight:700}}>{firstName}{' '}{lastName}</p>
          <p style={{fontSize:'18px'}}>{title}</p>
        </div>
    )
  }
}

export default Header;