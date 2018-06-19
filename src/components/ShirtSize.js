import React, { Component } from 'react';

class ShirtSize extends Component {
  render() {
    return (
        <article>
        <label id="dropdown-label" htmlFor="dropdown">T-shirt Size: </label>
            <select id="dropdown">
                <option disabled hidden defaultValue=''></option>
                <option value="xl">X-Large</option>
                <option value="large">Large</option>
                <option value="medium">Medium</option>
                <option value="small">Small</option>
            </select> 
        </article>     
    );
  }
}

export default ShirtSize;