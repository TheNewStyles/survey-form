import React, { Component } from 'react';

import '../styles/PoliticalParty.css';

class PoliticalParty extends Component {
  render() {
    return (
        <article>
            <fieldset className="political-party-container">
                <legend>Please select your political party:</legend>
                <span>
                    <input id="democrat-radio-button" name="political-party" type="radio" value="Democrat"/>
                    <label htmlFor="democrat-radio-button">Democrat</label>
                </span>
                <span>
                    <input id="republican-radio-button" name="political-party" type="radio" value="Republican"/>
                    <label htmlFor="republican-radio-button">Republican</label>
                </span>
                <span>
                    <input id="libertarian-radio-button" name="political-party" type="radio" value="Libertarian"/>
                    <label htmlFor="libertarian-radio-button">Libertarian</label>
                </span>              
            </fieldset>
        </article>   
    );
  }
}

export default PoliticalParty;