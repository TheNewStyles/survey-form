import React, { Component } from 'react';

import '../styles/ContactMethod.css';

class ContactMethod extends Component {
  render() {
    return (
        <article>
            <fieldset className="contact-method-container">
                <legend>Please select your preferred contact method:</legend>
                <span>
                    <input id="email-radio-button" name="contact-method"type="radio" value="email"/>
                    <label htmlFor="contactChoice1">Email</label>
                </span>
                <span>
                    <input id="phone-radio-button" name="contact-method" type="radio" value="phone"/>
                    <label htmlFor="contactChoice2">Phone</label>
                </span>
                <span>
                    <input id="mail-radio-button" name="contact-method" type="radio" value="mail"/>
                    <label htmlFor="contactChoice3">Mail</label>
                </span> 
            </fieldset>         
        </article>    
    );
  }
}

export default ContactMethod;