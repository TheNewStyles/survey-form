import React, { Component } from 'react';

import '../styles/ShirtSize.css'

class ShirtSize extends Component {
  render() {
    return (
        <article className="shirt-size-container">
            <span className="shirt-size-container">
                <label id="dropdown-label" htmlFor="dropdown">T-shirt Size: </label>
                <select id="dropdown" className="shirt-size-dropdown" >
                    <option ></option>
                    <option value="xl">X-Large</option>
                    <option value="large">Large</option>
                    <option value="medium">Medium</option>
                    <option value="small">Small</option>
                </select> 
            </span>            
        </article>     
    );
  }
}

export default ShirtSize;