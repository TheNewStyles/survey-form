import React, { Component } from 'react';

class UserInfo extends Component {
  render() {
    return (
        <article>
            <label id="name-label" for="name" >Name: </label>
            <input id="name" type="text" pattern="[A-Za-z]" placeholder="Enter name"/>
            <label id="email-label" for="email">Email address: </label>
            <input id="email" type="email" placeholder="Enter email"/>
            <label id="number-label" for="number">Lucky number: </label>
            <input id="number" type="number" min="1" max="500" placeholder="Enter number"/>            
        </article>     
    );
  }
}

export default UserInfo;