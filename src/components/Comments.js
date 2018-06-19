import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
        <article>
            <textarea name="comments" rows="10" cols="50" placeholder="Please write down any questions or comments here. Thank you!"></textarea>
        </article>      
    );
  }
}

export default Contact;