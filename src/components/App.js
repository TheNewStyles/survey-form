import React, { Component } from 'react';

import '../styles/App.css';
import Title from './Title.js';
import Form from './Form.js';

class App extends Component {
  render() {
    return (
      <div className="container" id="#page">
        <Title />
        <Form />        
      </div>
    );
  }
}

export default App;
