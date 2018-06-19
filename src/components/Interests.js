import React, { Component } from 'react';

class Interests extends Component {
  render() {
    return (
    <article>
        <fieldset>
            <legend>Choose your interests</legend>
            <div>
                <input type="checkbox" id="coding" name="interest" value="coding"/>
                <label htmlFor="coding">Coding</label>
            </div>
            <div>
                <input type="checkbox" id="music" name="interest" value="music"/>
                <label htmlFor="music">Music</label>
            </div>
            <div>
                <input type="checkbox" id="golf" name="interest" value="golf"/>
                <label htmlFor="golf">Golf</label>
            </div>
            <div>
                <input type="checkbox" id="camping" name="interest" value="camping"/>
                <label htmlFor="camping">Camping</label>
            </div>
        </fieldset>
    </article>      
    );
  }
}

export default Interests;