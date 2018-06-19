import React, { Component } from 'react';

class PoliticalParty extends Component {
  render() {
    return (
        <article>
            <div>
            <p>Please select your political party:</p>
                <input id="democrat-radio-button" name="political-party"type="radio" value="Democrat"/>
                <label for="democrat-radio-button">Democrat</label>
                <input id="republican-radio-button" name="political-party" type="radio" value="Republican"/>
                <label for="republican-radio-button">Republican</label>
                <input id="libertarian-radio-button" name="political-party" type="radio" value="Libertarian"/>
                <label for="libertarian-radio-button">Libertarian</label>
            </div>
        </article>   
    );
  }
}

export default PoliticalParty;