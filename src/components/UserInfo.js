import React, { Component } from 'react';

import '../styles/UserInfo.css';

class UserInfo extends Component {
  render() {
    return (
        <article className="container-user-info">
          <span className="container-user-info">
            <label id="name-label" htmlFor="name" >Name:  </label>
            <input id="name" className="user-info-margin-bottom" type="text" pattern="[A-Za-z]" placeholder="Enter name"/>
          </span>
          <span className="container-user-info">  
            <label id="email-label" htmlFor="email">Email address:  </label>
            <input id="email" className="user-info-margin-bottom" type="email" placeholder="Enter email"/>
          </span>
          <span className="container-user-info">
            <label id="number-label" htmlFor="number">Lucky number:  </label>
            <input id="number" class="input-number" type="number" placeholder="1-500" min="" max="500"/>

          </span>                     
        </article>     
    );
  }
}

export default UserInfo;