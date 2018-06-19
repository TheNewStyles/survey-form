import React, { Component } from 'react';

import '../styles/UserInfo.css';

class UserInfo extends Component {
  render() {
    return (
        <article className="user-info-container">
          <span className="user-info-container">
            <label id="name-label" htmlFor="name" >Name:  </label>
            <input id="name" className="user-info-margin-bottom" type="text" pattern="[A-Za-z]" placeholder="Enter name"/>
          </span>
          <span className="user-info-container">  
            <label id="email-label" htmlFor="email">Email address:  </label>
            <input id="email" className="user-info-margin-bottom" type="email" placeholder="Enter email"/>
          </span>
          <span className="user-info-container">
            <label id="number-label" htmlFor="number">Lucky number:  </label>
            <input id="number" className="user-info-input-number" type="number" placeholder="1-500" min="1" max="500"/>
          </span>                     
        </article>     
    );
  }
}

export default UserInfo;