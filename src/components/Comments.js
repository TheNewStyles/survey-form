import React, { Component } from 'react';

import '../styles/Comments.css';

class Contact extends Component {
  render() {
    return (
        <article>
            <textarea name="comments" className="comments-text-area" rows="10" cols="50" placeholder="Please write down any questions or comments here. Thank you!"></textarea>
        </article>      
    );
  }
}

export default Contact;