import React, { Component } from 'react';

import '../styles/Interests.css';

class Interests extends Component {
  render() {
    return (
    <article>
        <fieldset>
            <legend>Choose your interests</legend>
            <div className="interests-container">
                <span className="interests-item">
                    <input id="coding" type="checkbox"  name="interest" value="coding"/>
                    <label htmlFor="coding">Coding</label>
                </span>
                <span className="interests-item">
                    <input id="music" type="checkbox"  name="interest" value="music"/>
                    <label htmlFor="music">Music</label>
                </span>
                <span className="interests-item">
                    <input id="golf" type="checkbox" name="interest" value="golf"/>
                    <label htmlFor="golf">Golf</label>
                </span>
                <span className="interests-item">
                    <input id="camping" type="checkbox" name="interest" value="camping"/>
                    <label htmlFor="camping">Camping</label>
                </span>
                <span className="interests-item">
                    <input id="rugby" type="checkbox" name="interest" value="rugby"/>
                    <label htmlFor="rugby">Rugby</label>
                </span>
                <span className="interests-item">
                    <input id="food" type="checkbox" name="interest" value="food"/>
                    <label htmlFor="food">Food</label>
                </span>
                <span className="interests-item">
                    <input id="baseball" type="checkbox" name="interest" value="baseball"/>
                    <label htmlFor="baseball">Baseball</label>
                </span>
            </div>
            
        </fieldset>
    </article>      
    );
  }
}

export default Interests;