import React, { Component } from 'react'

class Header extends Component {
  render() {
      const {firstName, lastName, title} = this.props;
    return (
      <div className="previewHeader">
          <p style={{fontSize:'24px', fontWeight:700, marginBottom:"-15px"}}>{firstName}{' '}{lastName}</p>
          <p style={{fontSize:'18px', fontWeight:400}}>{title}</p>
        </div>
    )
  }
}

export default Header;