import React, { Component } from 'react';

class ContactMethod extends Component {
  render() {
    return (
        <article>
            <div>
            <p>Please select your preferred contact method:</p>
                <input id="email-radio-button" name="contact-method"type="radio" value="email"/>
                <label for="contactChoice1">Email</label>
                <input id="phone-radio-button" name="contact-method" type="radio" value="phone"/>
                <label for="contactChoice2">Phone</label>
                <input id="mail-radio-button" name="contact-method" type="radio" value="mail"/>
                <label for="contactChoice3">Mail</label>
            </div>
        </article>    
    );
  }
}

export default ContactMethod;