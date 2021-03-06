import React, { Component } from 'react'

class Header extends Component {
  render() {
      const {firstName, lastName, title} = this.props;
    return (
      <div className="previewHeader">
          <p style={{fontSize:'32px', fontWeight:700, marginBottom:"-5px"}}>{firstName}{' '}{lastName}</p>
          <p style={{fontSize:'16px', fontWeight:400}}>{title}</p>
        </div>
    )
  }
}

export default Header;