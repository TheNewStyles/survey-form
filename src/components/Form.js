import React, { Component } from 'react';

import UserInfo from './UserInfo';
import ShirtSize from './ShirtSize';
import ContactMethod from './ContactMethod';
import PoliticalParty from './PoliticalParty';
import Interests from './Interests';
import Comments from './Comments';
import Submit from './Submit';

class Form extends Component {
  render() {
    return (
    <section className="item">
        <form>
            <UserInfo />
            <ShirtSize />
            <ContactMethod />
            <PoliticalParty />
            <Interests />
            <Comments />
            <Submit />
        </form>   
    </section>

    );
  }
}

export default Form;