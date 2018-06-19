import React, { Component } from 'react';
import '../styles/App.css';

class Title extends Component {
  render() {
    return (
      <div>
        <header>         
          <h1 id="title">React Survey Form</h1>
        </header>
        <p id="description">This is a survey form I created as part of the FreeCodeCamp - Responsive Web Design Project Projects. Built with React.</p>
      </div>
    );
  }
}

export default Title;